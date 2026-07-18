"use client";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { getWhatsAppUrl } from "@/data/salonConfig";

export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 md:bottom-7 md:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
