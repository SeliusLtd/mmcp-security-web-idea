"use client";

import { useEffect, useState } from "react";
import { Shield, Sun, Moon, Film } from "lucide-react";
import { useTheme } from "next-themes";
import { useMmcp } from "@/lib/store/mmcp";
import { cn } from "@/lib/utils";

const nav = [
  { href: "#operations", label: "Operations" },
  { href: "#services", label: "Services" },
  { href: "#sectors", label: "Sectors" },
  { href: "#packages", label: "Protection Tiers" },
  { href: "#operators", label: "Operators" },
  { href: "#faq", label: "FAQ" },
  { href: "#engage", label: "Engage" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const { setTheme } = useTheme();
  const { grainOn, toggleGrain } = useMmcp();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[60] transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8">
        {/* Wordmark */}
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border border-accent/40 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
            <Shield className="h-4 w-4" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base tracking-wide text-foreground">
              MMCP
            </span>
            <span className="text-[9px] tracking-mono uppercase text-muted-foreground">
              Securities · Polokwane
            </span>
          </span>
        </a>

        {/* Nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group relative text-[11px] tracking-mono uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleGrain}
            aria-pressed={grainOn}
            aria-label="Toggle film grain"
            className={cn(
              "grid h-9 w-9 place-items-center border border-border transition-colors hover:border-accent",
              grainOn ? "text-accent" : "text-muted-foreground"
            )}
            title="Film grain"
          >
            <Film className="h-4 w-4" />
          </button>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <Sun className="hidden h-4 w-4 dark:block" />
            <Moon className="block h-4 w-4 dark:hidden" />
          </button>
          <a
            href="#engage"
            className="hidden h-9 items-center bg-accent px-5 text-[11px] tracking-mono uppercase text-accent-foreground transition-opacity hover:opacity-90 sm:flex"
          >
            Request Briefing
          </a>
        </div>
      </div>
    </header>
  );
}
