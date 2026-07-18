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
        className="animate-ken-burns object-cover object-center"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/35 to-foreground/15"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="animate-hero-in font-display text-[clamp(2.75rem,8vw,5.75rem)] font-medium leading-[0.95] tracking-[-0.01em] text-white">
            {name}
          </p>
          <h1 className="animate-hero-in-delay mt-5 max-w-xl text-lg font-light leading-relaxed text-white/90 sm:mt-6 sm:text-xl md:text-2xl">
            {tagline}
          </h1>
          <div className="animate-hero-in-delay mt-9 sm:mt-10">
            <WhatsAppButton label={hero.ctaLabel} variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
