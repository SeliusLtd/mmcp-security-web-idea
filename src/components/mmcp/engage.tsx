"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { SectionHeading } from "@/components/mmcp/section-heading";
import { useToast } from "@/hooks/use-toast";

const contact = [
  { icon: Phone, label: "Control room", value: "+27 15 000 0000", note: "24/7 armed response" },
  { icon: Mail, label: "Briefings", value: "ops@mmcp.co.za", note: "tactical & client liaison" },
  { icon: MapPin, label: "Watch floor", value: "Polokwane, Limpopo", note: "by appointment" },
  { icon: Clock, label: "Operations", value: "24 / 7 / 365", note: "never off-watch" },
];

export function Engage() {
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const { toast } = useToast();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || !data.contact) {
      toast({
        title: "Signal incomplete",
        description: "Please add your name and a contact number.",
        variant: "destructive",
      });
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/engage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      toast({
        title: "Briefing request received",
        description: "Our watch floor will revert within the hour.",
      });
      form.reset();
    } catch {
      toast({
        title: "Signal lost",
        description: "Call the control room directly on +27 15 000 0000.",
        variant: "destructive",
      });
    } finally {
      setStatus("idle");
    }
  };

  return (
    <section
      id="engage"
      className="relative border-t border-border px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="§ 06"
          kicker="Engage"
          title="Request a briefing"
          note="Tell us where you are and what keeps you awake. Our watch floor reverts within the hour, every hour."
        />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Principal or contact" />
              <Field label="Contact number" name="contact" placeholder="+27 …" />
              <Field label="Email" name="email" placeholder="optional" type="email" />
              <Field label="Sector" name="sector" placeholder="estate / retail / mining" />
              <div className="bg-background p-5 sm:col-span-2">
                <label className="text-[10px] tracking-mono uppercase text-muted-foreground">
                  Brief
                </label>
                <textarea
                  name="brief"
                  rows={4}
                  placeholder="What do you need held?"
                  className="mt-2 w-full resize-none border-0 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 inline-flex items-center gap-3 bg-accent px-7 py-3.5 text-[11px] tracking-mono uppercase text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              {status === "loading" ? "Transmitting…" : "Transmit briefing request"}
            </button>
          </motion.form>

          {/* Contact rails */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
              {contact.map((c) => (
                <div key={c.label} className="bg-background p-5">
                  <c.icon className="h-4 w-4 text-accent" />
                  <div className="mt-3 text-[10px] tracking-mono uppercase text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1 text-sm text-foreground">{c.value}</div>
                  <div className="mt-0.5 text-[10px] tracking-wide text-muted-foreground">
                    {c.note}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border border-border p-5">
              <div className="text-[10px] tracking-mono uppercase text-muted-foreground">
                PSIRA No.
              </div>
              <div className="mt-1 font-mono text-sm text-foreground">
                0000000 — verified
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                MMCP Securities (Pty) Ltd is registered with the Private
                Security Industry Regulatory Authority and operates in
                compliance with the PSIRA Code of Conduct.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="bg-background p-5">
      <label className="text-[10px] tracking-mono uppercase text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full border-0 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
      />
    </div>
  );
}
