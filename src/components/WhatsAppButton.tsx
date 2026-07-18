import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { getWhatsAppUrl } from "@/data/salonConfig";

type WhatsAppButtonProps = {
  label?: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "light";
  showIcon?: boolean;
  fullWidth?: boolean;
};

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark border border-transparent",
  secondary:
    "bg-transparent text-foreground border border-foreground/20 hover:border-foreground/45 hover:bg-foreground/[0.03]",
  light:
    "bg-white text-foreground border border-white hover:bg-white/90",
  ghost:
    "bg-transparent text-primary underline-offset-4 hover:underline border border-transparent",
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
        "inline-flex items-center justify-center gap-2.5 rounded-sm px-6 py-3.5",
        "text-[0.7rem] font-semibold uppercase tracking-[0.14em]",
        "transition-all duration-300 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        variants[variant],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
    >
      {showIcon ? <WhatsAppIcon className="h-4 w-4 shrink-0 opacity-90" /> : null}
      <span>{label}</span>
    </a>
  );
}
