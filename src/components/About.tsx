import salonConfig from "@/data/salonConfig";
import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      {/* Soft atmospheric wash */}
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-secondary blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="font-display text-3xl tracking-wide text-foreground sm:text-4xl md:text-5xl">
            About
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {salonConfig.about}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
