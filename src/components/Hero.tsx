import Image from "next/image";
import salonConfig from "@/data/salonConfig";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Hero() {
  const { name, tagline, hero } = salonConfig;

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Soft wash for readable type — not a card/badge overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/35 to-foreground/20"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto w-full max-w-6xl animate-hero-in">
          <p className="font-display text-4xl leading-none tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {name}
          </p>
          <h1 className="mt-4 max-w-xl text-lg font-normal leading-relaxed text-white/90 sm:text-xl md:text-2xl">
            {tagline}
          </h1>
          <div className="mt-8">
            <WhatsAppButton
              label={hero.ctaLabel}
              className="min-w-[10.5rem] bg-primary text-white hover:bg-primary-dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
