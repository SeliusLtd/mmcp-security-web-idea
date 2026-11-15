"use client";

import { motion } from "framer-motion";
import { operators } from "@/lib/data/mmcp";
import { useMmcp } from "@/lib/store/mmcp";
import type { GalleryItem } from "@/lib/store/mmcp";
import { SectionHeading } from "@/components/mmcp/section-heading";

export function Operators() {
  const openViewer = useMmcp((s) => s.openViewer);

  const gallery: GalleryItem[] = operators.map((o) => ({
    src: o.image,
    alt: o.name,
    title: o.name,
    caption: `${o.role} · ${o.grade}`,
  }));

  return (
    <section
      id="operators"
      className="relative border-t border-border px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="§ 05"
          kicker="Operators"
          title="Monographs in discipline"
          note="The officers who hold the line. Each monograph is a portrait of tenure, grade and command."
        />

        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {operators.map((o, i) => (
            <motion.button
              key={o.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onClick={() => openViewer(gallery, i)}
              className="group block text-left"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-border bg-card transition-colors duration-500 group-hover:border-accent">
                <img
                  src={o.image}
                  alt={o.name}
                  className="h-full w-full object-cover grayscale transition-all duration-[1000ms] ease-out group-hover:scale-105 group-hover:grayscale-0"
                  draggable={false}
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, oklch(0 0 0 / 0) 55%, oklch(0 0 0 / 0.8) 100%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="text-[9px] tracking-mono uppercase text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="font-display text-lg leading-tight text-foreground">
                    {o.name}
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="text-sm text-foreground">{o.role}</div>
                <div className="mt-0.5 text-[10px] tracking-mono uppercase text-muted-foreground">
                  {o.grade}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
