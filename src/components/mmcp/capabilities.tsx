"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data/mmcp";
import { useMmcp } from "@/lib/store/mmcp";
import type { GalleryItem } from "@/lib/store/mmcp";
import { SectionHeading } from "@/components/mmcp/section-heading";

export function Capabilities() {
  const openViewer = useMmcp((s) => s.openViewer);

  const gallery: GalleryItem[] = services.map((s) => ({
    src: s.image,
    alt: s.title,
    title: s.title,
    caption: s.summary,
    spec: s.spec,
  }));

  return (
    <section id="services" className="relative border-t border-border px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          index="§ 02"
          kicker="Services"
          title="Six disciplines, one watch floor"
          note="Every capability routes back to a single verified picture in our Polokwane operations centre. Hover a card to frame it; click to present."
        />

        <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative flex flex-col bg-background p-6"
            >
              {/* Faux-frame preview on hover */}
              <div className="relative mb-6 overflow-hidden">
                <div className="faux-frame relative aspect-[16/10] w-full overflow-hidden border border-border bg-card">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    draggable={false}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-50 transition-opacity duration-500 group-hover:opacity-80"
                    style={{
                      background:
                        "linear-gradient(180deg, oklch(0 0 0 / 0) 50%, oklch(0 0 0 / 0.6) 100%)",
                    }}
                  />
                  <div className="absolute bottom-2 left-2 flex items-center gap-2 text-[9px] tracking-mono uppercase text-foreground/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    framed preview
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] tracking-mono uppercase text-muted-foreground">
                    {s.index} · {s.discipline}
                  </div>
                  <h3 className="mt-1 font-display text-xl text-foreground sm:text-2xl">
                    {s.title}
                  </h3>
                </div>
                <button
                  onClick={() => openViewer(gallery, i)}
                  aria-label={`Present ${s.title}`}
                  className="grid h-8 w-8 place-items-center border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.summary}
              </p>

              {/* spec row */}
              <dl className="mt-5 grid grid-cols-3 gap-px border border-border bg-border">
                {s.spec.map((row) => (
                  <div key={row.label} className="bg-background px-3 py-2.5">
                    <dt className="text-[9px] tracking-mono uppercase text-muted-foreground">
                      {row.label}
                    </dt>
                    <dd className="mt-0.5 font-mono text-xs text-foreground">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
