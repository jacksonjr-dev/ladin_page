import { ArrowUpRight, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Brand } from '@/components/brand';
import { contact } from '@/lib/contact';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand-block"><a href="/" aria-label="JPGLabs — Início"><Brand footer /></a><p>Transformando processos<br />em soluções.</p><span className="footer-signature">TECNOLOGIA COM PROPÓSITO.</span></div>
          <div className="footer-column"><h3>Empresa</h3><a href="/">Início</a>{['Soluções', 'Como trabalhamos', 'Projetos', 'Sobre nós'].map((item) => <span key={item} className="pending-page" title="Página ainda não disponível">{item}</span>)}<a href="#contato">Contato</a></div>
          <div className="footer-column"><h3>Contato</h3><a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer-icon-link"><MessageCircle size={16} />WhatsApp<ArrowUpRight size={13} /></a><span className="footer-phone">{contact.whatsappLabel}</span><div className="footer-placeholder"><span><Mail size={16} />E-mail</span><small>[E-MAIL DA EMPRESA]</small></div></div>
          <div className="footer-column"><h3>Redes</h3><div className="footer-placeholder"><span><Linkedin size={16} />LinkedIn</span><small>[LINK DO LINKEDIN]</small></div><div className="footer-placeholder"><span><Instagram size={16} />Instagram</span><small>[LINK DO INSTAGRAM]</small></div></div>
        </div>
        <div className="footer-bottom"><span>© 2026 JPGLabs. Todos os direitos reservados.</span><span className="footer-bottom-brand">Ideias. Processos. Soluções.<span className="footer-dot" /></span></div>
      </div>
    </footer>
  );
}