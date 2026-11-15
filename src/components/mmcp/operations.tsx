"use client";

import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { operations } from "@/lib/data/mmcp";
import { useMmcp } from "@/lib/store/mmcp";
import { SectionHeading } from "@/components/mmcp/section-heading";

export function Operations() {
  const openViewer = useMmcp((s) => s.openViewer);

  return (
    <section id="operations" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="§ 01"
          kicker="Operations"
          title="Curated field deployments"
          note="A selection of recent, named operations across Limpopo. Select any plate for a fullscreen presentation — arrow keys browse."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {operations.map((op, i) => (
            <motion.button
              key={op.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => openViewer(operations, i)}
              className={`group relative block overflow-hidden text-left ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  i === 0 ? "aspect-[16/10] md:aspect-auto md:h-full" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={op.src}
                  alt={op.alt}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  draggable={false}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(180deg, oklch(0 0 0 / 0) 40%, oklch(0 0 0 / 0.85) 100%)",
                  }}
                />
                {/* fullscreen hint */}
                <div className="absolute right-3 top-3 flex items-center gap-1.5 border border-border bg-background/40 px-2.5 py-1 text-[9px] tracking-mono uppercase text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <Maximize2 className="h-3 w-3" />
                  view
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="mb-1 flex items-center gap-2 text-[9px] tracking-mono uppercase text-accent">
                  <span className="h-px w-5 bg-accent" />
                  Operation
                </div>
                <h3
                  className={`font-display leading-tight text-foreground ${
                    i === 0 ? "text-2xl sm:text-3xl" : "text-xl"
                  }`}
                >
                  {op.title}
                </h3>
                {i === 0 && (
                  <p className="mt-2 max-w-md text-sm text-foreground/70">
                    {op.caption}
                  </p>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
