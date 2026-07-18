import Image from "next/image";
import salonConfig from "@/data/salonConfig";
import FadeIn from "@/components/FadeIn";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-20 bg-secondary/60 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="font-display text-3xl tracking-wide text-foreground sm:text-4xl md:text-5xl">
            Gallery
          </h2>
          <p className="mt-3 max-w-lg text-muted">
            A glimpse of the atmosphere and finishes we love creating.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 md:gap-4">
          {salonConfig.gallery.map((image, i) => (
            <FadeIn key={image.src} delay={(i % 3) * 80} className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
