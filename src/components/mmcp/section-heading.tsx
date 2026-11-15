"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  index,
  kicker,
  title,
  note,
}: {
  index: string;
  kicker: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-8 border-b border-border pb-8 md:grid-cols-12">
      <div className="md:col-span-3">
        <div className="flex items-center gap-3 text-[10px] tracking-mono uppercase text-muted-foreground">
          <span className="text-accent">{index}</span>
          <span className="h-px w-8 bg-border" />
          <span>{kicker}</span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="md:col-span-9"
      >
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight text-foreground">
          {title}
        </h2>
        {note && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {note}
          </p>
        )}
      </motion.div>
    </div>
  );
}
