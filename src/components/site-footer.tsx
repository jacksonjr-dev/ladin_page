import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, MessageCircle } from "lucide-react";
import { Brand } from "@/components/brand";
import { contact } from "@/lib/contact";
import { navItems } from "@/lib/site";

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
            <span className="footer-signature">Tecnologia com propósito.</span>
            <span className="footer-location">Fortaleza, CE · Atendimento em todo o Brasil</span>
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
        </div>
      </div>
    </footer>
  );
}
