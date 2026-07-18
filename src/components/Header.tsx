"use client";

import { useEffect, useState } from "react";
import salonConfig from "@/data/salonConfig";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const overHero = !scrolled && !open;

  const logoClass = overHero
    ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.55),0_0_18px_rgba(255,255,255,0.45)] hover:opacity-90"
    : "text-foreground hover:opacity-80";

  const linkClass = overHero
    ? "text-white/95 [text-shadow:0_1px_2px_rgba(0,0,0,0.5),0_0_14px_rgba(255,255,255,0.4)] hover:text-white"
    : "text-muted hover:text-foreground";

  const iconClass = overHero
    ? "text-white [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.55))_drop-shadow(0_0_10px_rgba(255,255,255,0.4))]"
    : "text-foreground";

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled || open
          ? "border-b border-foreground/8 bg-background/95 backdrop-blur-md"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <a
          href="#top"
          className={[
            "font-display text-xl tracking-wide transition-all duration-300 sm:text-2xl",
            logoClass,
          ].join(" ")}
          onClick={closeMenu}
        >
          {salonConfig.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {salonConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={[
                "text-sm transition-all duration-300",
                linkClass,
              ].join(" ")}
            >
              {item.label}
            </a>
          ))}
          <WhatsAppButton label="Book Now" className="!py-2.5 !text-xs" />
        </nav>

        <button
          type="button"
          className={[
            "inline-flex h-10 w-10 items-center justify-center rounded-md transition-all duration-300 md:hidden",
            iconClass,
          ].join(" ")}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <span className="relative block h-4 w-5">
            <span
              className={[
                "absolute left-0 block h-0.5 w-full bg-current transition-all duration-300",
                open ? "top-1.5 rotate-45" : "top-0",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-1.5 block h-0.5 w-full bg-current transition-opacity duration-300",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 block h-0.5 w-full bg-current transition-all duration-300",
                open ? "top-1.5 -rotate-45" : "top-3",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={[
          "border-t border-foreground/8 bg-background md:hidden",
          "transition-[max-height,opacity] duration-300 ease-out overflow-hidden",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {salonConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-md px-3 py-3 text-base text-foreground hover:bg-secondary"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 px-1 pb-2" onClick={closeMenu}>
            <WhatsAppButton label="Book Now" fullWidth />
          </div>
        </nav>
      </div>
    </header>
  );
}
