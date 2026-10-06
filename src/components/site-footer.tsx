import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { Brand } from "@/components/brand";
import { contact } from "@/lib/contact";
import { navItems } from "@/lib/site";

// Destinations not defined yet are shown as text, never as invented or dead links.
function Placeholder({ icon, name, hint }: { icon: ReactNode; name: string; hint: string }) {
  return (
    <div className="footer-placeholder">
      <span>
        {icon}
        {name}
      </span>
      <small>{hint}</small>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand-block">
            <Link to="/" aria-label="JPGLabs — Início">
              <Brand footer />
            </Link>
            <p>
              Transformando processos
              <br />
              em soluções.
            </p>
            <span className="footer-signature">TECNOLOGIA COM PROPÓSITO.</span>
          </div>
          <nav className="footer-column" aria-label="Empresa">
            <h3>Empresa</h3>
            {navItems.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="footer-column">
            <h3>Contato</h3>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
            >
              <MessageCircle size={16} aria-hidden="true" />
              WhatsApp
              <ArrowUpRight size={13} aria-hidden="true" />
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
            <span className="footer-phone">{contact.whatsappLabel}</span>
            <Placeholder
              icon={<Mail size={16} aria-hidden="true" />}
              name="E-mail"
              hint="[E-MAIL DA EMPRESA]"
            />
          </div>
          <div className="footer-column">
            <h3>Redes</h3>
            <Placeholder
              icon={<Linkedin size={16} aria-hidden="true" />}
              name="LinkedIn"
              hint="[LINK DO LINKEDIN]"
            />
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
            >
              <Instagram size={16} aria-hidden="true" />
              Instagram
              <ArrowUpRight size={13} aria-hidden="true" />
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
            <span className="footer-phone">{contact.instagramHandle}</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} JPGLabs. Todos os direitos reservados.</span>
          <span className="footer-bottom-brand">
            Ideias. Processos. Soluções.
            <span className="footer-dot" aria-hidden="true" />
          </span>
        </div>
      </div>
    </footer>
  );
}
