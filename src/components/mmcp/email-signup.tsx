"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const { toast } = useToast();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      toast({
        title: "Invalid address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    // Placeholder only — no backend wired yet.
    setDone(true);
    toast({
      title: "You're on the list",
      description: "We'll send the next field briefing to your inbox.",
    });
  };

  return (
    <section className="relative border-t border-border bg-card px-5 py-20 sm:px-8 sm:py-28">
      {/* subtle blue field glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 120%, oklch(0.62 0.19 255 / 0.18), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 border border-border px-3 py-1 text-[10px] tracking-mono uppercase text-accent">
            <Mail className="h-3 w-3" />
            The Field Briefing
          </div>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight text-foreground">
            Security intelligence, sent monthly.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Threat trends across Limpopo, operational notes from the watch
            floor, and the occasional quiet night. No noise, no spam.
          </p>

          {done ? (
            <div className="mx-auto mt-8 max-w-md border border-accent/40 bg-accent/10 px-6 py-5">
              <div className="text-[10px] tracking-mono uppercase text-accent">
                Confirmed
              </div>
              <p className="mt-1 text-sm text-foreground">
                You're subscribed. The next briefing lands in your inbox at
                month-end.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                aria-label="Email address"
                className="h-12 flex-1 border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="group inline-flex h-12 items-center justify-center gap-2 bg-accent px-6 text-[11px] tracking-mono uppercase text-accent-foreground transition-opacity hover:opacity-90"
              >
                Subscribe
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          )}

          <p className="mt-4 text-[10px] tracking-mono uppercase text-muted-foreground">
            Placeholder · no data sent until launch
          </p>
        </motion.div>
      </div>
    </section>
  );
}
