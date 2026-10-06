import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { CSSProperties } from "react";
import { Magnetic } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/contact";

export function WhatsAppButton({
  label = "Conversar pelo WhatsApp",
  className = "",
  style,
}: {
  label?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Magnetic>
      <Button asChild size="lg" className={`whatsapp-button ${className}`} style={style}>
        <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle aria-hidden="true" />
          {label}
          <ArrowUpRight aria-hidden="true" />
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
      </Button>
    </Magnetic>
  );
}
