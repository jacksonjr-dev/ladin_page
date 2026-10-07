import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp-button";

export function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section className="section" aria-labelledby={id}>
      <div className="section-inner">
        <Reveal className="section-head">
          <h2 id={id}>{title}</h2>
          {intro && <p>{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/** Closing call to action. Each page passes its own wording; "to" links inside the site instead of WhatsApp. */
export function CtaBand({
  title = "Tem um desafio em mente?",
  text = "Conte o que sua empresa precisa. Vamos pensar juntos no próximo passo.",
  label,
  to,
  message,
}: {
  title?: string;
  text?: string;
  label?: string;
  message?: string;
  to?: "/solucoes" | "/como-trabalhamos" | "/contato";
}) {
  return (
    <section className="section" aria-labelledby="cta-title">
      <Reveal className="section-inner cta-band">
        <div>
          <h2 id="cta-title">{title}</h2>
          <p>{text}</p>
        </div>
        {to ? (
          <Button asChild size="lg" className="whatsapp-button">
            <Link to={to}>
              {label}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        ) : (
          <WhatsAppButton {...(label ? { label } : {})} {...(message ? { message } : {})} />
        )}
      </Reveal>
    </section>
  );
}
