import salonConfig from "@/data/salonConfig";

export default function Footer() {
  const year = new Date().getFullYear();
  const { name, siteCredit } = salonConfig;

  return (
    <footer className="border-t border-foreground/10 bg-foreground px-4 py-10 text-secondary sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl tracking-wide text-white">{name}</p>
          <p className="mt-1 text-sm text-white/60">
            © {year} {name}. All rights reserved.
          </p>
        </div>

        {siteCredit.enabled ? (
          <p className="text-xs text-white/50">
            Site by{" "}
            {siteCredit.url ? (
              <a
                href={siteCredit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 underline-offset-2 hover:text-white hover:underline"
              >
                {siteCredit.businessName}
              </a>
            ) : (
              <span className="text-white/70">{siteCredit.businessName}</span>
            )}
          </p>
        ) : null}
      </div>
    </footer>
  );
}
