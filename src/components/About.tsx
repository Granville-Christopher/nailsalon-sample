import salonConfig from "@/data/salonConfig";
import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
    >
      <div
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-secondary blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
        <FadeIn>
          <p className="section-label">Our space</p>
          <h2 className="section-title mt-5 text-5xl sm:text-6xl md:text-7xl">
            About
          </h2>
        </FadeIn>

        <FadeIn delay={120}>
          <p className="max-w-xl text-lg font-light leading-[1.8] text-muted sm:text-xl">
            {salonConfig.about}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
