import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FlowField } from "@/components/flow-field";
import { rise } from "@/components/page-hero";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { contact } from "@/lib/contact";
import { pageHead } from "@/lib/seo";

const TITLE = "Contato | JPGLabs";
const DESCRIPTION =
  "Converse com a JPGLabs sobre soluções para sua empresa. Fale com a gente pelo WhatsApp ou pelo Instagram.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    ...pageHead({ path: "/contato", title: TITLE, description: DESCRIPTION }),
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="hero-stage">
      <FlowField />
      <main id="conteudo" className="contact-section">
        <div className="contact-layout">
          <section className="contact-copy" aria-labelledby="contact-title">
            <p className="eyebrow rise" style={rise(0)}>
              CONTATO
            </p>
            <h1 id="contact-title" className="rise" style={rise(1)}>
              Toda solução começa com uma <span>boa conversa.</span>
            </h1>
            <p className="contact-description rise" style={rise(2)}>
              Conte para nós o que sua empresa precisa. Vamos pensar juntos no próximo passo para
              transformar seus processos.
            </p>
            <WhatsAppButton className="rise" style={rise(3)} />
            <a
              className="direct-contact rise"
              style={rise(4)}
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="direct-icon">
                <MessageCircle size={20} aria-hidden="true" />
              </span>
              <span>
                <span className="direct-label">Nosso WhatsApp oficial</span>
                <span className="direct-number">{contact.whatsappLabel}</span>
              </span>
              <ArrowUpRight size={15} aria-hidden="true" />
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
            <a
              className="direct-contact rise"
              style={rise(4)}
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="direct-icon">
                <Instagram size={20} aria-hidden="true" />
              </span>
              <span>
                <span className="direct-label">Nosso Instagram</span>
                <span className="direct-number">{contact.instagramHandle}</span>
              </span>
              <ArrowUpRight size={15} aria-hidden="true" />
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
            <p className="contact-note rise" style={rise(5)}>
              <span aria-hidden="true" />
              Contato direto. Uma conversa de verdade.
            </p>
          </section>
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
