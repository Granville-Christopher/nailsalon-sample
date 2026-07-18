import salonConfig from "@/data/salonConfig";
import FadeIn from "@/components/FadeIn";

export default function HoursLocation() {
  const { hours, location } = salonConfig;

  return (
    <section
      id="hours"
      className="scroll-mt-20 bg-secondary/50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="font-display text-3xl tracking-wide text-foreground sm:text-4xl md:text-5xl">
            Hours & Location
          </h2>
          <p className="mt-3 max-w-lg text-muted">
            Find us easily — walk-ins welcome when availability allows.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <h3 className="font-display text-xl tracking-wide text-foreground sm:text-2xl">
              Business hours
            </h3>
            <dl className="mt-6 space-y-3">
              {hours.map((row) => (
                <div
                  key={row.day}
                  className="flex items-baseline justify-between gap-4 border-b border-foreground/10 pb-3 text-sm sm:text-base"
                >
                  <dt className="font-medium text-foreground">{row.day}</dt>
                  <dd className="text-right text-muted">{row.hours}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <h3 className="font-display text-xl tracking-wide text-foreground sm:text-2xl">
                Address
              </h3>
              <address className="mt-3 not-italic leading-relaxed text-muted">
                <p>{location.addressLine1}</p>
                <p>{location.addressLine2}</p>
              </address>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-foreground/5 lg:aspect-auto lg:min-h-[22rem]">
              <iframe
                title={`Map showing ${salonConfig.name}`}
                src={location.mapEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
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
