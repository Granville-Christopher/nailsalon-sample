import salonConfig from "@/data/salonConfig";
import FadeIn from "@/components/FadeIn";

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="font-display text-3xl tracking-wide text-foreground sm:text-4xl md:text-5xl">
            Services
          </h2>
          <p className="mt-3 max-w-lg text-muted">
            Thoughtful treatments priced with clarity — message us to reserve your time.
          </p>
        </FadeIn>

        <ul className="mt-12 divide-y border-y border-foreground/10">
          {salonConfig.services.map((service, i) => (
            <li key={service.name}>
              <FadeIn delay={i * 60}>
                <div className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8">
                  <div>
                    <h3 className="font-display text-xl tracking-wide text-foreground sm:text-2xl">
                      {service.name}
                    </h3>
                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                      {service.description}
                    </p>
                  </div>
                  <p className="text-sm font-medium tracking-wide text-primary sm:text-right sm:text-base">
                    {service.price}
                  </p>
                </div>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
