import Image from "next/image";
import salonConfig from "@/data/salonConfig";
import FadeIn from "@/components/FadeIn";

export default function Gallery() {
  const images = salonConfig.gallery;

  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-secondary/60 px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Selected work</p>
              <h2 className="section-title mt-5 text-5xl sm:text-6xl md:text-7xl">
                Gallery
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted md:text-right">
              Nails, skin, and the quiet details we love finishing.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3 md:gap-3">
          {images.map((image, i) => (
            <FadeIn
              key={image.src}
              delay={(i % 3) * 80}
              className={[
                "relative overflow-hidden bg-background/40",
                i === 0
                  ? "col-span-2 aspect-[16/10] md:col-span-2 md:aspect-[16/11]"
                  : "aspect-[4/5]",
              ].join(" ")}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  i === 0
                    ? "(max-width: 768px) 100vw, 66vw"
                    : "(max-width: 768px) 50vw, 33vw"
                }
                className="object-cover transition-transform duration-[1.1s] ease-out hover:scale-[1.04]"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
