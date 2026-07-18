/**
 * =============================================================================
 * SALON CONFIG — edit THIS file to re-skin the template for a new client
 * =============================================================================
 * Typical workflow (~10 minutes):
 *  1. Update brand name, tagline, about copy
 *  2. Swap colors (hex values below)
 *  3. Replace services + prices
 *  4. Update hours, address, map embed URL
 *  5. Set WhatsApp number + email
 *  6. Swap image URLs (Unsplash, Cloudinary, or /public paths)
 *  7. Tweak SEO title/description
 *  8. Toggle site credit on/off
 * =============================================================================
 */

export type Service = {
  name: string;
  description: string;
  /** Display string, e.g. "from $45" or "₦15,000" */
  price: string;
};

export type BusinessHours = {
  day: string;
  hours: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type SalonConfig = {
  /** Brand / salon display name */
  name: string;
  /** Short line under the brand in the hero */
  tagline: string;
  /** Longer about-section copy */
  about: string;
  /** Optional logo path under /public — leave empty to show text name only */
  logoSrc: string;

  colors: {
    /** Main brand accent (buttons, links, highlights) */
    primary: string;
    /** Darker shade for hover states */
    primaryDark: string;
    /** Soft wash behind sections / accents */
    secondary: string;
    /** Page background base */
    background: string;
    /** Main body text */
    foreground: string;
    /** Muted supporting text */
    muted: string;
  };

  hero: {
    /** Full-bleed hero image (Unsplash or local /public path) */
    image: string;
    imageAlt: string;
    /** Primary CTA label (opens WhatsApp) */
    ctaLabel: string;
  };

  services: Service[];

  gallery: GalleryImage[];

  hours: BusinessHours[];

  location: {
    addressLine1: string;
    addressLine2: string;
    /** Google Maps → Share → Embed a map → copy the iframe src URL */
    mapEmbedUrl: string;
  };

  contact: {
    email: string;
    /**
     * Digits only with country code, no + or spaces.
     * Used for https://wa.me/{whatsappNumber}
     */
    whatsappNumber: string;
    /** Optional pre-filled WhatsApp message */
    whatsappMessage: string;
  };

  seo: {
    title: string;
    description: string;
    /** Absolute URL preferred for OG images when live */
    ogImage: string;
    /** Site URL for metadataBase (update per client deploy) */
    siteUrl: string;
  };

  /**
   * Footer "Site by …" credit — turn off if the client doesn't want it,
   * or change businessName / url per your agency.
   */
  siteCredit: {
    enabled: boolean;
    businessName: string;
    url: string;
  };

  nav: {
    label: string;
    href: string;
  }[];
};

const salonConfig: SalonConfig = {
  // ——— Brand ———
  name: "Noir Nail Bar",
  tagline: "Polished nails. Soft skin. Quiet luxury.",
  about:
    "Noir Nail Bar is a calm corner for manicures, pedicures, and glow-up beauty rituals. We focus on clean technique, lasting finishes, and a space that feels unhurried from the moment you sit down.",
  logoSrc: "",

  // ——— Colors (swap these hex values to rebrand) ———
  colors: {
    primary: "#5C6B5A",
    primaryDark: "#465344",
    secondary: "#E4E8E1",
    background: "#F5F6F3",
    foreground: "#1F2420",
    muted: "#5A635C",
  },

  // ——— Hero ———
  hero: {
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Manicurist applying nail polish at a nail bar",
    ctaLabel: "Book Now",
  },

  // ——— Services (add, remove, or rewrite freely) ———
  services: [
    {
      name: "Classic Manicure",
      description: "Shape, cuticle care, massage, and a polished finish that lasts.",
      price: "from $35",
    },
    {
      name: "Gel Manicure",
      description: "Long-wear gel color with a glossy or soft-matte finish.",
      price: "from $50",
    },
    {
      name: "Luxury Pedicure",
      description: "Soak, exfoliation, massage, and perfect polish for tired feet.",
      price: "from $55",
    },
    {
      name: "Nail Art Add-on",
      description: "Minimal accents or full designs customized to your look.",
      price: "from $15",
    },
    {
      name: "Brow Shape & Tint",
      description: "Cleaned-up arches with a soft tint for natural definition.",
      price: "from $40",
    },
    {
      name: "Express Facial Glow",
      description: "Quick cleanse, mask, and hydration for camera-ready skin.",
      price: "from $65",
    },
  ],

  // ——— Gallery ———
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
      alt: "Fresh manicure with soft pink polish",
    },
    {
      src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80",
      alt: "Nail art detail close-up",
    },
    {
      src: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=800&q=80",
      alt: "Beauty products arranged on a counter",
    },
    {
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      alt: "Facial skincare treatment",
    },
    {
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
      alt: "Makeup brushes and beauty tools",
    },
    {
      src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
      alt: "Cosmetic products flat lay",
    },
  ],

  // ——— Hours ———
  hours: [
    { day: "Monday", hours: "10:00 AM – 7:00 PM" },
    { day: "Tuesday", hours: "10:00 AM – 7:00 PM" },
    { day: "Wednesday", hours: "10:00 AM – 7:00 PM" },
    { day: "Thursday", hours: "10:00 AM – 8:00 PM" },
    { day: "Friday", hours: "10:00 AM – 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 6:00 PM" },
    { day: "Sunday", hours: "11:00 AM – 4:00 PM" },
  ],

  // ——— Location ———
  location: {
    addressLine1: "88 Orchard Lane",
    addressLine2: "Unit 2, Your City, ST 00000",
    // Replace with client's Google Maps embed src (Share → Embed a map)
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648715453!2d-73.98823492346386!3d40.75889597138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
  },

  // ——— Contact (primary CTA = WhatsApp) ———
  contact: {
    email: "christophergranville2@gmail.com",
    whatsappNumber: "2349133871053",
    whatsappMessage: "Hi! I'd like to book an appointment at Noir Nail Bar.",
  },

  // ——— SEO ———
  seo: {
    title: "Noir Nail Bar | Nails & Beauty",
    description:
      "Book manicures, pedicures, and beauty treatments at Noir Nail Bar. Clean, calm, and easy to reach on WhatsApp.",
    ogImage:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=80",
    siteUrl: "https://example.com",
  },

  // ——— Footer credit ———
  siteCredit: {
    enabled: true,
    businessName: "Your Business Name",
    url: "",
  },

  // ——— Nav anchors (match section ids on the page) ———
  nav: [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Hours", href: "#hours" },
    { label: "Contact", href: "#contact" },
  ],
};

export default salonConfig;

/** Helper: WhatsApp click-to-chat URL with optional prefilled message */
export function getWhatsAppUrl(
  number = salonConfig.contact.whatsappNumber,
  message = salonConfig.contact.whatsappMessage,
) {
  const base = `https://wa.me/${number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
