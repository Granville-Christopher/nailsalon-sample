import salonConfig from "@/data/salonConfig";
import FadeIn from "@/components/FadeIn";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Contact() {
  const { email } = salonConfig.contact;

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="font-display text-3xl tracking-wide text-foreground sm:text-4xl md:text-5xl">
            Contact
          </h2>
          <p className="mt-3 max-w-lg text-muted">
            The fastest way to book is WhatsApp — we usually reply within the hour during business hours.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-10 flex max-w-md flex-col gap-6">
            <WhatsAppButton label="Book on WhatsApp" className="w-full sm:w-auto" />

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Email
              </p>
              <a
                href={`mailto:${email}`}
                className="mt-2 inline-block text-base text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline sm:text-lg"
              >
                {email}
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
