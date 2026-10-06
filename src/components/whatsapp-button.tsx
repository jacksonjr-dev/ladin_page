import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { CSSProperties } from "react";
import { Magnetic } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { contact, whatsappLink } from "@/lib/contact";

export function WhatsAppButton({
  label = "Conversar pelo WhatsApp",
  message,
  className = "",
  style,
}: {
  label?: string;
  message?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Magnetic>
      <Button asChild size="lg" className={`whatsapp-button ${className}`} style={style}>
        <a
          href={message ? whatsappLink(message) : contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle aria-hidden="true" />
          {label}
          <ArrowUpRight aria-hidden="true" />
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
      </Button>
    </Magnetic>
  );
}
