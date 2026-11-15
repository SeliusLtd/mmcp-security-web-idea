"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Grid2x2 } from "lucide-react";
import { useMmcp } from "@/lib/store/mmcp";

export function FullscreenViewer() {
  const { viewerOpen, viewerItems, viewerIndex, closeViewer, nextViewer, prevViewer } =
    useMmcp();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hudVisible, setHudVisible] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const current = viewerItems[viewerIndex];

  // Keyboard + scroll lock
  useEffect(() => {
    if (!viewerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeViewer();
      else if (e.key === "ArrowRight") nextViewer();
      else if (e.key === "ArrowLeft") prevViewer();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [viewerOpen, closeViewer, nextViewer, prevViewer]);

  const onMouseMove = (e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
    setHudVisible(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setHudVisible(false), 1600);
  };

  // HUD offset so it doesn't sit under the cursor
  const vw = typeof window !== "undefined" ? window.innerWidth : 0;
  const vh = typeof window !== "undefined" ? window.innerHeight : 0;
  const hudLeft = Math.min(pos.x + 28, vw - 230);
  const hudTop = Math.min(pos.y + 28, vh - 200);

  return (
    <AnimatePresence>
      {viewerOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[80] bg-background"
          onMouseMove={onMouseMove}
        >
          {/* Vignette */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 100% at 50% 40%, transparent 35%, oklch(0 0 0 / 0.55) 100%)",
            }}
          />

          {/* Image */}
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-10 md:p-16">
            <AnimatePresence mode="wait">
              <motion.img
                key={viewerIndex}
                src={current.src}
                alt={current.alt}
                initial={{ opacity: 0, scale: 1.04, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.99, filter: "blur(8px)" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="max-h-full max-w-full object-contain shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]"
                draggable={false}
              />
            </AnimatePresence>
          </div>

          {/* Top bar */}
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5 sm:p-7">
            <div className="flex items-center gap-3 text-[11px] tracking-mono uppercase text-muted-foreground">
              <Grid2x2 className="h-3.5 w-3.5 text-accent" />
              <span>MMCP Archive</span>
              <span className="hairline h-px w-8" />
              <span>
                {String(viewerIndex + 1).padStart(2, "0")} /{" "}
                {String(viewerItems.length).padStart(2, "0")}
              </span>
            </div>
            <button
              onClick={closeViewer}
              className="group flex items-center gap-2 text-[11px] tracking-mono uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>Close</span>
              <span className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors group-hover:border-accent group-hover:text-accent">
                <X className="h-4 w-4" />
              </span>
            </button>
          </div>

          {/* Prev / Next */}
          <button
            onClick={prevViewer}
            aria-label="Previous"
            className="group absolute left-0 top-0 z-10 flex h-full w-[14%] items-center justify-start px-3 sm:px-6"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full border border-border bg-background/30 backdrop-blur-sm transition-all group-hover:border-accent group-hover:text-accent">
              <ChevronLeft className="h-5 w-5" />
            </span>
          </button>
          <button
            onClick={nextViewer}
            aria-label="Next"
            className="group absolute right-0 top-0 z-10 flex h-full w-[14%] items-center justify-end px-3 sm:px-6"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full border border-border bg-background/30 backdrop-blur-sm transition-all group-hover:border-accent group-hover:text-accent">
              <ChevronRight className="h-5 w-5" />
            </span>
          </button>

          {/* Caption / title bottom-left */}
          <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
            <div className="max-w-2xl">
              <div className="mb-2 flex items-center gap-3 text-[10px] tracking-mono uppercase text-accent">
                <span className="h-px w-6 bg-accent" />
                Plate
              </div>
              <h3 className="font-display text-2xl leading-tight text-foreground sm:text-3xl">
                {current.title}
              </h3>
              {current.caption && (
                <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                  {current.caption}
                </p>
              )}
            </div>
          </div>

          {/* Cursor-following operational readout (the "print size at scale") */}
          <AnimatePresence>
            {hudVisible && current.spec && current.spec.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.18 }}
                style={{ left: hudLeft, top: hudTop }}
                className="pointer-events-none absolute z-20 w-[210px] border border-border bg-popover/85 backdrop-blur-md"
              >
                <div className="flex items-center justify-between border-b border-border px-3 py-1.5">
                  <span className="text-[9px] tracking-mono uppercase text-accent">
                    Operational Readout
                  </span>
                  <span className="flex items-center gap-1 text-[9px] tracking-mono uppercase text-muted-foreground">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                    live
                  </span>
                </div>
                <div className="scan-line h-px w-full opacity-60" />
                <dl className="divide-y divide-border">
                  {current.spec.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between px-3 py-1.5"
                    >
                      <dt className="text-[10px] tracking-wide uppercase text-muted-foreground">
                        {row.label}
                      </dt>
                      <dd className="font-mono text-xs text-foreground">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                {/* scale ruler */}
                <div className="border-t border-border px-3 py-2">
                  <div className="mb-1 flex items-center justify-between text-[9px] tracking-mono uppercase text-muted-foreground">
                    <span>scale</span>
                    <span>1:240</span>
                  </div>
                  <div className="flex items-end gap-[3px]">
                    {[6, 10, 6, 10, 6, 10, 6].map((h, i) => (
                      <span
                        key={i}
                        className="w-[14px] bg-foreground/70"
                        style={{ height: `${h}px` }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Edge hint */}
          <div className="pointer-events-none absolute bottom-5 right-5 z-10 hidden text-[10px] tracking-mono uppercase text-muted-foreground sm:block">
            ← → browse · esc close
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
