"use client";

import { motion } from "framer-motion";
import { sectors } from "@/lib/data/mmcp";
import { useMmcp } from "@/lib/store/mmcp";
import type { GalleryItem } from "@/lib/store/mmcp";
import { SectionHeading } from "@/components/mmcp/section-heading";

export function Sectors() {
  const openViewer = useMmcp((s) => s.openViewer);

  const gallery: GalleryItem[] = sectors.map((s) => ({
    src: s.image,
    alt: s.title,
    title: s.title,
    caption: s.note,
  }));

  return (
    <section
      id="sectors"
      className="relative border-t border-border px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="§ 03"
          kicker="Sectors"
          title="Ground we hold"
          note="From gated estates to mining perimeters, each sector demands a different grammar of defence. Select a plate to present."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s, i) => (
            <motion.button
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onClick={() => openViewer(gallery, i)}
              className="group relative block aspect-[3/4] w-full overflow-hidden text-left"
            >
              <img
                src={s.image}
                alt={s.title}
                className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
                draggable={false}
              />
              <div
                aria-hidden
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(0 0 0 / 0.1) 0%, oklch(0 0 0 / 0.2) 50%, oklch(0 0 0 / 0.9) 100%)",
                }}
              />
              <div className="absolute inset-0 border border-border transition-colors duration-500 group-hover:border-accent" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="mb-2 text-[9px] tracking-mono uppercase text-accent">
                  {s.index}
                </div>
                <h3 className="font-display text-xl leading-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-1.5 max-w-[28ch] text-xs leading-relaxed text-foreground/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {s.note}
                </p>
              </div>

              {/* corner ticks */}
              <span className="absolute left-2 top-2 h-2 w-2 border-l border-t border-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-2 right-2 h-2 w-2 border-b border-r border-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
