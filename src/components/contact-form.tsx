import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useRef, useState, type CSSProperties, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { buildContactFormUrl, contactFormSchema, type ContactFormValues } from "@/lib/contact";

type Field = keyof ContactFormValues;
type Errors = Partial<Record<Field, string>>;

const fieldOrder: Field[] = ["name", "company", "email", "phone", "challenge"];

// There is no server: sending opens WhatsApp with the message already written. The form only says
// the chat was opened, never that the message was delivered, because the visitor still has to send it.
export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const raw = Object.fromEntries(
      fieldOrder.map((field) => [field, String(data.get(field) ?? "")]),
    );
    const result = contactFormSchema.safeParse(raw);

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as Field;
        next[field] ??= issue.message;
      }
      setErrors(next);
      setOpened(false);
      const first = fieldOrder.find((field) => next[field]);
      if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    window.open(buildContactFormUrl(result.data), "_blank", "noopener,noreferrer");
    setOpened(true);
  };

  const fieldProps = (field: Field) => ({
    id: field,
    name: field,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });
  const error = (field: Field) =>
    errors[field] ? (
      <span id={`${field}-error`} className="field-error">
        {errors[field]}
      </span>
    ) : null;

  return (
    <form
      ref={formRef}
      className="contact-form rise"
      style={{ "--i": 3 } as CSSProperties}
      aria-labelledby="contact-form-title"
      onSubmit={onSubmit}
      noValidate
    >
      <div className="form-heading">
        <h2 id="contact-form-title">Vamos conhecer seu desafio.</h2>
      </div>
      <div className="fields-grid">
        <label htmlFor="name">
          Nome
          <Input
            {...fieldProps("name")}
            autoComplete="name"
            placeholder="Seu nome…"
            className="contact-input"
            maxLength={100}
          />
          {error("name")}
        </label>
        <label htmlFor="company">
          Empresa <span className="optional">(opcional)</span>
          <Input
            {...fieldProps("company")}
            autoComplete="organization"
            placeholder="Nome da sua empresa…"
            className="contact-input"
            maxLength={100}
          />
          {error("company")}
        </label>
        <label htmlFor="email">
          E-mail <span className="optional">(opcional)</span>
          <Input
            {...fieldProps("email")}
            type="email"
            autoComplete="email"
            inputMode="email"
            spellCheck={false}
            placeholder="voce@empresa.com…"
            className="contact-input"
            maxLength={150}
          />
          {error("email")}
        </label>
        <label htmlFor="phone">
          WhatsApp <span className="optional">(opcional)</span>
          <Input
            {...fieldProps("phone")}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="(00) 00000-0000…"
            className="contact-input"
            maxLength={30}
          />
          {error("phone")}
        </label>
      </div>
      <label htmlFor="challenge">
        Conte um pouco sobre seu desafio
        <Textarea
          {...fieldProps("challenge")}
          placeholder="O que você gostaria de transformar na sua empresa…"
          className="contact-textarea"
          maxLength={1500}
        />
        {error("challenge")}
      </label>
      <div className="form-bottom">
        <p className="form-status" role="status">
          <MessageCircle size={13} aria-hidden="true" />
          {opened
            ? "Abrimos o WhatsApp com a sua mensagem. Falta só tocar em enviar por lá."
            : "A mensagem será aberta no WhatsApp para você enviar."}
        </p>
        <Button type="submit" size="lg" className="submit-button">
          Enviar mensagem
          <ArrowUpRight aria-hidden="true" />
        </Button>
      </div>
    </form>
  );
}
