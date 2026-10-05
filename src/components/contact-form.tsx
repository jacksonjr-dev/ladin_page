import { ArrowUpRight, LockKeyhole } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
  return (
    <form className="contact-form" onSubmit={(event) => event.preventDefault()} aria-label="Formulário de contato">
      <div className="form-heading"><h2>Vamos conhecer seu desafio.</h2><span className="coming-soon">Em breve</span></div>
      <div className="fields-grid">
        <label htmlFor="name">Nome<Input id="name" name="name" autoComplete="name" placeholder="Seu nome" className="contact-input" /></label>
        <label htmlFor="company">Empresa<Input id="company" name="company" autoComplete="organization" placeholder="Nome da sua empresa" className="contact-input" /></label>
        <label htmlFor="email">E-mail<Input id="email" name="email" type="email" autoComplete="email" placeholder="voce@empresa.com" className="contact-input" /></label>
        <label htmlFor="phone">WhatsApp<Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" className="contact-input" /></label>
      </div>
      <label htmlFor="challenge">Conte um pouco sobre seu desafio<Textarea id="challenge" name="challenge" placeholder="O que você gostaria de transformar na sua empresa?" className="contact-textarea" /></label>
      <div className="form-bottom"><span className="form-status"><LockKeyhole size={13} /> Envio ainda não disponível</span><Button type="submit" variant="secondary" disabled size="lg" className="submit-button">Enviar mensagem<ArrowUpRight /></Button></div>
    </form>
  );
}