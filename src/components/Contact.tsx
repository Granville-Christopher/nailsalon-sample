import salonConfig from "@/data/salonConfig";
import FadeIn from "@/components/FadeIn";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Contact() {
  const { email } = salonConfig.contact;

  return (
    <section
      id="contact"
      className="scroll-mt-24 relative overflow-hidden bg-secondary/50 px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <FadeIn>
            <p className="section-label">Book</p>
            <h2 className="section-title mt-5 text-5xl sm:text-6xl md:text-7xl">
              Contact
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              The fastest way to book is WhatsApp — we usually reply within the hour during business hours.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="flex flex-col gap-8 lg:items-end">
              <WhatsAppButton label="Book on WhatsApp" className="w-full sm:w-auto" />
              <div className="lg:text-right">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted">
                  Email
                </p>
                <a
                  href={`mailto:${email}`}
                  className="mt-2 inline-block text-lg text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                >
                  {email}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
