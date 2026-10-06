import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
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

// Used where real content doesn't exist yet: says so plainly and offers the one working channel.
export function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <Reveal className="empty-state">
      <h3>{title}</h3>
      <p>{text}</p>
      <WhatsAppButton label="Falar com a JPGLabs" />
    </Reveal>
  );
}

export function CtaBand() {
  return (
    <section className="section" aria-labelledby="cta-title">
      <Reveal className="section-inner cta-band">
        <div>
          <h2 id="cta-title">Tem um desafio em mente?</h2>
          <p>Conte o que sua empresa precisa. Vamos pensar juntos no próximo passo.</p>
        </div>
        <WhatsAppButton />
      </Reveal>
    </section>
  );
}
