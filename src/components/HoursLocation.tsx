import salonConfig from "@/data/salonConfig";
import FadeIn from "@/components/FadeIn";

export default function HoursLocation() {
  const { hours, location } = salonConfig;

  return (
    <section
      id="hours"
      className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="section-label">Visit</p>
          <h2 className="section-title mt-5 text-5xl sm:text-6xl md:text-7xl">
            Hours & Location
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
            Find us easily — appointments preferred, walk-ins when availability allows.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <h3 className="font-display text-2xl tracking-[-0.01em] text-foreground">
              Business hours
            </h3>
            <dl className="mt-7">
              {hours.map((row) => (
                <div
                  key={row.day}
                  className="flex items-baseline justify-between gap-6 border-b border-foreground/10 py-3.5 text-sm sm:text-[0.95rem]"
                >
                  <dt className="font-medium text-foreground">{row.day}</dt>
                  <dd className="text-right text-muted">{row.hours}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-12">
              <h3 className="font-display text-2xl tracking-[-0.01em] text-foreground">
                Address
              </h3>
              <address className="mt-4 not-italic leading-relaxed text-muted">
                <p>{location.addressLine1}</p>
                <p>{location.addressLine2}</p>
              </address>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-foreground/5 lg:aspect-auto lg:min-h-[26rem]">
              <iframe
                title={`Map showing ${salonConfig.name}`}
                src={location.mapEmbedUrl}
                className="absolute inset-0 h-full w-full border-0 grayscale-[25%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
