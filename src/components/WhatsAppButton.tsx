import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { getWhatsAppUrl } from "@/data/salonConfig";

type WhatsAppButtonProps = {
  label?: string;
  className?: string;
  /** visual weight */
  variant?: "primary" | "secondary" | "ghost";
  showIcon?: boolean;
  fullWidth?: boolean;
};

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow transition-all duration-300",
  secondary:
    "bg-white/95 text-foreground border border-primary/25 hover:border-primary/50 hover:bg-secondary transition-all duration-300",
  ghost:
    "bg-transparent text-primary underline-offset-4 hover:underline transition-colors duration-300",
};

export default function WhatsAppButton({
  label = "Book on WhatsApp",
  className = "",
  variant = "primary",
  showIcon = true,
  fullWidth = false,
}: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium tracking-wide",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        variants[variant],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
    >
      {showIcon ? <WhatsAppIcon className="h-5 w-5 shrink-0" /> : null}
      <span>{label}</span>
    </a>
  );
}
