import salonConfig from "@/data/salonConfig";
import FadeIn from "@/components/FadeIn";

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Menu</p>
              <h2 className="section-title mt-5 text-5xl sm:text-6xl md:text-7xl">
                Services
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted md:text-right">
              Clean technique and lasting finishes — message us to reserve your time.
            </p>
          </div>
        </FadeIn>

        <ul className="mt-14 border-t border-foreground/10">
          {salonConfig.services.map((service, i) => (
            <li key={service.name} className="border-b border-foreground/10">
              <FadeIn delay={i * 50}>
                <div className="grid gap-3 py-8 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-10 sm:py-9">
                  <div>
                    <h3 className="font-display text-2xl tracking-[-0.01em] text-foreground sm:text-[1.75rem]">
                      {service.name}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                      {service.description}
                    </p>
                  </div>
                  <p className="text-sm font-medium tracking-[0.04em] text-primary sm:text-right">
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
