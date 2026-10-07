import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { ContactForm } from "@/components/contact-form";
import { buildContactFormUrl, contact, contactFormSchema } from "@/lib/contact";

describe("contact module", () => {
  it("targets the official WhatsApp number with the preset message", () => {
    const url = new URL(contact.whatsappUrl);

    expect(url.searchParams.get("phone")).toBe("5585986304497");
    expect(url.searchParams.get("text")).toBe(
      "Olá, JPGLabs! Gostaria de conversar sobre uma solução para minha empresa.",
    );
  });

  it("points Instagram to the official profile", () => {
    expect(contact.instagramUrl).toBe("https://www.instagram.com/Jdg_sistems/");
  });
});

describe("contact form schema", () => {
  const valid = { name: "Ana", company: "", email: "", phone: "", challenge: "Quero automatizar" };

  it("accepts only the name and the challenge", () => {
    expect(contactFormSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects a malformed e-mail and a phone without area code", () => {
    expect(contactFormSchema.safeParse({ ...valid, email: "ana@" }).success).toBe(false);
    expect(contactFormSchema.safeParse({ ...valid, phone: "9999" }).success).toBe(false);
  });

  it("writes the answers into the WhatsApp message", () => {
    const parsed = contactFormSchema.parse({ ...valid, company: "ACME", email: "ana@acme.com" });
    const text = new URL(buildContactFormUrl(parsed)).searchParams.get("text");

    expect(text).toContain("Nome: Ana");
    expect(text).toContain("Empresa: ACME");
    expect(text).toContain("E-mail: ana@acme.com");
    expect(text).toContain("Desafio: Quero automatizar");
    expect(text).not.toContain("WhatsApp: ");
  });
});

describe("ContactForm", () => {
  afterEach(() => vi.restoreAllMocks());

  it("shows inline errors and does not open WhatsApp when the form is empty", () => {
    const open = vi.spyOn(window, "open").mockReturnValue(null);
    render(<ContactForm />);

    fireEvent.click(screen.getByRole("button", { name: /enviar mensagem/i }));

    expect(screen.getByText("Informe seu nome.")).toBeInTheDocument();
    expect(screen.getByLabelText(/^Nome/)).toHaveAttribute("aria-invalid", "true");
    expect(open).not.toHaveBeenCalled();
  });

  it("opens WhatsApp with the message and only says the chat was opened", () => {
    const open = vi.spyOn(window, "open").mockReturnValue(null);
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/^Nome/), { target: { value: "Ana" } });
    fireEvent.change(screen.getByLabelText(/Conte um pouco/), {
      target: { value: "Quero organizar meus pedidos" },
    });
    fireEvent.click(screen.getByRole("button", { name: /enviar mensagem/i }));

    expect(open).toHaveBeenCalledTimes(1);
    const [url] = open.mock.calls[0] as [string];
    expect(new URL(url).searchParams.get("text")).toContain("Quero organizar meus pedidos");
    expect(screen.getByRole("status")).toHaveTextContent(/Abrimos o WhatsApp/);
    expect(screen.queryByText(/enviada com sucesso/i)).not.toBeInTheDocument();
  });
});
