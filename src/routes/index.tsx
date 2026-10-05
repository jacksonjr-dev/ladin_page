import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight, ChevronRight, MessageCircle } from 'lucide-react';
import { Brand } from '@/components/brand';
import { ContactForm } from '@/components/contact-form';
import { SiteFooter } from '@/components/site-footer';
import { Button } from '@/components/ui/button';
import { contact } from '@/lib/contact';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Contato | JPGLabs' },
    { name: 'description', content: 'Converse com a JPGLabs sobre soluções para sua empresa. Entre em contato pelo nosso WhatsApp oficial.' },
    { property: 'og:title', content: 'Contato | JPGLabs' },
    { property: 'og:description', content: 'Transformando processos em soluções. Converse com a JPGLabs pelo WhatsApp.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a href="/" aria-label="JPGLabs — Início"><Brand /></a>
          <nav className="header-nav" aria-label="Navegação principal">
            {['Soluções', 'Como trabalhamos', 'Projetos', 'Sobre nós'].map((item) => <span className="nav-pending" key={item} title="Página ainda não disponível">{item}</span>)}
            <a href="#contato" className="nav-current">Contato</a>
          </nav>
          <Button asChild className="header-contact"><a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">Vamos conversar<ArrowUpRight /></a></Button>
        </div>
      </header>
      <main id="contato" className="contact-section">
        <div className="breadcrumb"><a href="/">Início</a><ChevronRight size={11} /><span>Contato</span></div>
        <div className="contact-layout">
          <section className="contact-copy" aria-labelledby="contact-title">
            <p className="eyebrow">CONTATO</p>
            <h1 id="contact-title">Toda solução<br />começa com uma<br /><span>boa conversa.</span></h1>
            <p className="contact-description">Conte para nós o que sua empresa precisa.<br />Vamos pensar juntos no próximo passo para<br className="desktop-break" /> transformar seus processos.</p>
            <Button asChild size="lg" className="whatsapp-button"><a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle />Conversar pelo WhatsApp<ArrowUpRight /></a></Button>
            <div className="direct-contact"><div className="direct-icon"><MessageCircle size={20} /></div><div><p>Nosso WhatsApp oficial</p><a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">{contact.whatsappLabel}</a></div><ArrowUpRight size={15} /></div>
            <p className="contact-note"><span />Contato direto. Uma conversa de verdade.</p>
          </section>
          <ContactForm />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
