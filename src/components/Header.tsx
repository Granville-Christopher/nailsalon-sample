"use client";

import { useEffect, useState } from "react";
import salonConfig from "@/data/salonConfig";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
    ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.45)] hover:opacity-90"
    : "text-foreground hover:opacity-75";

  const linkClass = overHero
    ? "text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.4)] hover:text-white"
    : "text-muted hover:text-foreground";

  const iconClass = overHero
    ? "text-white [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.45))]"
    : "text-foreground";

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled || open
          ? "border-b border-foreground/8 bg-background/92 backdrop-blur-xl"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.75rem] sm:px-8 lg:px-10">
        <a
          href="#top"
          className={[
            "font-display text-xl tracking-[-0.01em] transition-all duration-300 sm:text-2xl",
            logoClass,
          ].join(" ")}
          onClick={closeMenu}
        >
          {salonConfig.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {salonConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={[
                "relative text-[0.7rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300",
                "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full",
                linkClass,
              ].join(" ")}
            >
              {item.label}
            </a>
          ))}
          <WhatsAppButton label="Book" showIcon={false} className="!px-5 !py-2.5" />
        </nav>

        <button
          type="button"
          className={[
            "inline-flex h-11 w-11 items-center justify-center transition-all duration-300 md:hidden",
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
                "absolute left-0 block h-px w-full bg-current transition-all duration-300",
                open ? "top-1.5 rotate-45" : "top-0",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-1.5 block h-px w-full bg-current transition-opacity duration-300",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 block h-px w-full bg-current transition-all duration-300",
                open ? "top-1.5 -rotate-45" : "top-3",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={[
          "border-t border-foreground/8 bg-background md:hidden",
          "overflow-hidden transition-[max-height,opacity] duration-500 ease-out",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="flex flex-col px-5 py-5" aria-label="Mobile">
          {salonConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="border-b border-foreground/6 px-1 py-4 text-xs font-medium uppercase tracking-[0.14em] text-foreground"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-5" onClick={closeMenu}>
            <WhatsAppButton label="Reserve an Appointment" fullWidth />
          </div>
        </nav>
      </div>
    </header>
  );
}
