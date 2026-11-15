"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ChevronDown } from "lucide-react";
import { heroPlates, fieldBriefing, stats } from "@/lib/data/mmcp";
import { useMmcp } from "@/lib/store/mmcp";

export function Hero() {
  const [active, setActive] = useState(0);
  const [briefingOpen, setBriefingOpen] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const openViewer = useMmcp((s) => s.openViewer);

  // Auto-cycle hero plates with cinematic dissolve
  useEffect(() => {
    const t = setInterval(() => {
      setActive((i) => (i + 1) % heroPlates.length);
    }, 6200);
    return () => clearInterval(t);
  }, []);

  const toggleBriefing = () => {
    if (briefingOpen) {
      setLeaving(true);
      window.setTimeout(() => {
        setBriefingOpen(false);
        setLeaving(false);
      }, 400);
    } else {
      setBriefingOpen(true);
    }
  };

  const plate = heroPlates[active];

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Plates */}
      <AnimatePresence>
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={plate.src}
              alt={plate.alt}
              className="kenburns h-full w-full object-cover"
              draggable={false}
            />
          </div>
          {/* Cinematic grade */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, oklch(0 0 0 / 0.55) 0%, oklch(0 0 0 / 0.15) 30%, oklch(0 0 0 / 0.05) 50%, oklch(0 0 0 / 0.75) 100%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-overlay"
            style={{
              background:
                "radial-gradient(80% 60% at 70% 30%, oklch(0.62 0.19 255 / 0.22), transparent 60%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Top hairline + ticker */}
      <div className="pointer-events-none absolute inset-x-0 top-16 z-20 px-5 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="hairline h-px w-full" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-between px-5 pb-10 pt-32 sm:px-8">
        {/* Eyebrow row */}
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-3 text-[10px] tracking-mono uppercase text-muted-foreground">
            <span className="h-px w-6 bg-accent" />
            <span>Current Deployment — Featured</span>
          </div>
          <div className="hidden items-center gap-6 text-[10px] tracking-mono uppercase text-muted-foreground sm:flex">
            <span>Polokwane · Limpopo · ZA</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              watch live
            </span>
          </div>
        </div>

        {/* Title block */}
        <div className="max-w-4xl">
          <h1 className="font-display text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.95] tracking-tight text-foreground">
            Risk. Response.
            <br />
            <span className="italic text-accent">Resolve.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            A Polokwane-based private security firm — armed response, tactical
            guarding, verified surveillance and executive protection, held to
            a gallery standard of discipline.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={toggleBriefing}
              className="group flex items-center gap-3 border border-border px-5 py-3 text-[11px] tracking-mono uppercase text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <BookOpen className="h-4 w-4" />
              Read the field briefing
            </button>
            <button
              onClick={() => openViewer(heroPlates, active)}
              className="group flex items-center gap-3 px-2 py-3 text-[11px] tracking-mono uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              Open plate in fullscreen
              <span className="h-px w-8 bg-muted-foreground transition-all group-hover:w-12 group-hover:bg-accent" />
            </button>
          </div>

          {/* Stats strip */}
          <div className="mt-12 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-background/80 px-5 py-4 backdrop-blur-sm">
                <div className="font-display text-2xl text-foreground sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] tracking-mono uppercase text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plate indicator */}
        <div className="flex items-end justify-between gap-6">
          <div className="flex flex-col gap-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5 }}
              >
                <div className="font-display text-lg text-foreground sm:text-xl">
                  {plate.title}
                </div>
                <div className="text-[11px] tracking-mono uppercase text-muted-foreground">
                  Plate {String(active + 1).padStart(2, "0")} /{" "}
                  {String(heroPlates.length).padStart(2, "0")}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2">
            {heroPlates.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Plate ${i + 1}`}
                className="group relative h-8 w-px bg-foreground/20"
              >
                <span
                  className={`absolute -bottom-0 left-0 w-full bg-accent transition-all duration-500 ${
                    i === active ? "h-full" : "h-0 group-hover:h-1/3"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground sm:flex">
        <span className="text-[9px] tracking-mono uppercase">scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>

      {/* Field briefing overlay — 600ms fade */}
      <AnimatePresence>
        {briefingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[65] bg-background/90 backdrop-blur-md"
            onClick={toggleBriefing}
          >
            <div
              className={`mx-auto mt-[12vh] h-[68vh] w-full max-w-3xl overflow-y-auto px-6 py-10 thin-scroll sm:px-12 ${
                leaving ? "fade-panel-leave" : "fade-panel"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-[10px] tracking-mono uppercase text-accent">
                  <span className="h-px w-6 bg-accent" />
                  Field Briefing — From the Director
                </div>
                <button
                  onClick={toggleBriefing}
                  className="text-[11px] tracking-mono uppercase text-muted-foreground transition-colors hover:text-foreground"
                >
                  Close
                </button>
              </div>

              <p className="mt-8 font-display text-2xl italic leading-relaxed text-foreground sm:text-3xl">
                {fieldBriefing.standfirst}
              </p>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
                {fieldBriefing.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-8 text-[11px] tracking-mono uppercase text-muted-foreground">
                {fieldBriefing.signoff}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
