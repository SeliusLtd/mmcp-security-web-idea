"use client";

import { Shield } from "lucide-react";

const footerNav = [
  {
    title: "Operations",
    links: [
      { label: "Field deployments", href: "#operations" },
      { label: "Services", href: "#services" },
      { label: "Sectors", href: "#sectors" },
    ],
  },
  {
    title: "Engage",
    links: [
      { label: "Protection tiers", href: "#packages" },
      { label: "Operators", href: "#operators" },
      { label: "Request briefing", href: "#engage" },
    ],
  },
  {
    title: "Governance",
    links: [
      { label: "PSIRA registered", href: "#" },
      { label: "Code of conduct", href: "#" },
      { label: "Privacy & POPIA", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      {/* Marquee strip */}
      <div className="overflow-hidden border-b border-border py-3">
        <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap text-[10px] tracking-mono uppercase text-muted-foreground">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex items-center gap-8">
              {[
                "Armed Response",
                "Tactical Guarding",
                "Verified Surveillance",
                "Alarm & Detection",
                "Executive Protection",
                "K9 & Aerial Overwatch",
                "Polokwane · Limpopo",
                "PSIRA Registered",
              ].map((t) => (
                <span key={t} className="flex items-center gap-8">
                  <span className="text-accent">◆</span>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Wordmark */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center border border-accent/40 text-accent">
                <Shield className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-xl text-foreground">
                  MMCP Securities
                </div>
                <div className="text-[9px] tracking-mono uppercase text-muted-foreground">
                  Polokwane · Limpopo · South Africa
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A gallery-grade private security firm. We hold Limpopo under a
              single, accountable picture — watched, verified, resolved.
            </p>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 md:col-span-7 sm:grid-cols-3">
            {footerNav.map((col) => (
              <div key={col.title}>
                <div className="text-[10px] tracking-mono uppercase text-accent">
                  {col.title}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-[10px] tracking-mono uppercase text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} MMCP Securities (Pty) Ltd</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            watch floor — live
          </span>
          <span>Risk · Response · Resolve</span>
        </div>
      </div>
    </footer>
  );
}
