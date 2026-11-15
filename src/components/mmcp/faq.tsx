"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/mmcp/section-heading";

const faqs = [
  {
    q: "How fast does armed response arrive?",
    a: "Our four Polokwane response cells average under six minutes across the metropolitan area. Response time to your exact address depends on cell proximity — we'll quote a committed ETA during your site survey.",
  },
  {
    q: "Is MMCP Securities PSIRA registered?",
    a: "Yes. MMCP Securities (Pty) Ltd is registered with the Private Security Industry Regulatory Authority and every officer on our books is PSIRA-graded, from Grade A (access control) through Grade E (tactical / armed).",
  },
  {
    q: "Do you operate outside Polokwane?",
    a: "Our primary footprint is the Polokwane metropolitan area and the wider Limpopo province — including estates, mines, retail centres and agricultural holdings up to roughly 120 km from the watch floor. Beyond that we work through vetted partner firms.",
  },
  {
    q: "What happens when my alarm goes off?",
    a: "Your signal reaches the watch floor instantly over dual-path signalling. An operator verifies the event (via AI-assisted CCTV where installed), and only a confirmed threat dispatches an armed response unit — cutting false alarms by over 90%.",
  },
  {
    q: "Can I keep my existing alarm or CCTV system?",
    a: "In almost every case, yes. Our technicians will assess your current infrastructure and integrate it onto our monitoring platform. Where hardware is end-of-life we'll recommend replacements — never push equipment you don't need.",
  },
  {
    q: "How is pricing structured?",
    a: "Three continuous-protection tiers — Sentinel, Vanguard and Sovereign — run as monthly retainers. Sovereign and any bespoke estate or mining brief are quoted per site after a free risk assessment. No long lock-in contracts on standard tiers.",
  },
  {
    q: "Do you offer executive / close protection?",
    a: "Yes. Discreet close-protection details are available for principals in transit, at residence and during public engagement, staffed by Grade E officers in armoured vehicles. Bookings are by prior arrangement through the operations director.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="relative border-t border-border px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="§ 07"
          kicker="FAQ"
          title="Before you engage"
          note="The questions principals ask before signing on. If yours isn't here, the watch floor answers within the hour."
        />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="group py-5 text-left hover:no-underline">
                    <span className="flex items-start gap-4">
                      <span className="mt-0.5 text-[10px] tracking-mono uppercase text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-lg leading-snug text-foreground sm:text-xl">
                        {f.q}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-10 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Side rail */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-24 border border-border p-6">
              <div className="flex items-center gap-2 text-[10px] tracking-mono uppercase text-accent">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Watch floor — live
              </div>
              <h3 className="mt-4 font-display text-2xl text-foreground">
                Still uncertain?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A fifteen-minute call with our operations director costs
                nothing and answers the rest. We'll quote a committed response
                ETA for your address on the spot.
              </p>
              <a
                href="#engage"
                className="mt-6 inline-flex w-fit items-center gap-3 bg-accent px-6 py-3 text-[11px] tracking-mono uppercase text-accent-foreground transition-opacity hover:opacity-90"
              >
                Request a briefing
              </a>
              <div className="mt-6 border-t border-border pt-4 text-[10px] tracking-mono uppercase text-muted-foreground">
                Or call control room
                <div className="mt-1 font-mono text-sm text-foreground">
                  +27 15 000 0000
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
