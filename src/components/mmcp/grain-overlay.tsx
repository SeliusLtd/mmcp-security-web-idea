"use client";

import { useMmcp } from "@/lib/store/mmcp";

export function GrainOverlay() {
  const grainOn = useMmcp((s) => s.grainOn);
  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-[70] transition-opacity duration-500 ${
        grainOn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="grain-layer absolute inset-0 mix-blend-overlay opacity-[0.07]" />
      <div className="grain-layer absolute inset-0 mix-blend-soft-light opacity-[0.05]" />
    </div>
  );
}
