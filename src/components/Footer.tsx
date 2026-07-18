import salonConfig from "@/data/salonConfig";

export default function Footer() {
  const year = new Date().getFullYear();
  const { name, siteCredit, nav } = salonConfig;

  return (
    <footer className="border-t border-white/10 bg-foreground px-5 py-14 text-secondary sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-2xl tracking-[-0.01em] text-white">{name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/40">
              Manicures, pedicures, and quiet beauty rituals by appointment.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Footer">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-white/45 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">
            © {year} {name}. All rights reserved.
          </p>

          {siteCredit.enabled ? (
            <p className="text-xs text-white/30">
              Site by{" "}
              {siteCredit.url ? (
                <a
                  href={siteCredit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 underline-offset-2 hover:text-white hover:underline"
                >
                  {siteCredit.businessName}
                </a>
              ) : (
                <span className="text-white/55">{siteCredit.businessName}</span>
              )}
            </p>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
