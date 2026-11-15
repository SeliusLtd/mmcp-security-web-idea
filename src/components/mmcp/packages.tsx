"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { packages } from "@/lib/data/mmcp";
import { SectionHeading } from "@/components/mmcp/section-heading";

export function Packages() {
  return (
    <section
      id="packages"
      className="relative border-t border-border px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="§ 04"
          kicker="Protection Tiers"
          title="Limited editions of cover"
          note="Three tiers of continuous protection, each framed around a different scale of risk. Hover a tier to frame it against the wall."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {packages.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col"
            >
              {/* Faux-frame preview */}
              <div className="faux-frame relative aspect-[4/3] w-full overflow-hidden border border-border bg-card">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover opacity-70 transition-all duration-[900ms] ease-out group-hover:scale-105 group-hover:opacity-100"
                  draggable={false}
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, oklch(0 0 0 / 0.1), oklch(0 0 0 / 0.7))",
                  }}
                />
                <div className="absolute left-4 top-4 flex flex-col gap-1">
                  <span className="text-[9px] tracking-mono uppercase text-accent">
                    {p.edition}
                  </span>
                  <span className="font-display text-3xl text-foreground">
                    {p.title}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 text-right">
                  <div className="font-display text-2xl text-foreground">
                    {p.price}
                  </div>
                  <div className="text-[9px] tracking-mono uppercase text-muted-foreground">
                    {p.cadence}
                  </div>
                </div>
              </div>

              {/* Caption block */}
              <div className="mt-5 flex flex-1 flex-col">
                <div className="text-[10px] tracking-mono uppercase text-muted-foreground">
                  {p.tier}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {p.includes.map((inc) => (
                    <li
                      key={inc}
                      className="flex items-start gap-2.5 text-sm text-foreground/80"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#engage"
                  className="mt-6 inline-flex w-fit items-center gap-2 border border-border px-5 py-2.5 text-[11px] tracking-mono uppercase text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  Request {p.title}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
