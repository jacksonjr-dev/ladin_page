import { z } from "zod";

const WHATSAPP_NUMBER = "5585986304497";
const WHATSAPP_MESSAGE =
  "Olá, JPGLabs! Gostaria de conversar sobre uma solução para minha empresa.";

const INSTAGRAM_HANDLE = "Jdg_sistems";

const whatsappLink = (text: string) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;

export const contact = {
  instagramHandle: `@${INSTAGRAM_HANDLE}`,
  instagramUrl: `https://www.instagram.com/${INSTAGRAM_HANDLE}/`,
  whatsappLabel: "+55 (85) 98630-4497",
  whatsappUrl: whatsappLink(WHATSAPP_MESSAGE),
};

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(100, "Use até 100 caracteres."),
  company: z.string().trim().max(100, "Use até 100 caracteres."),
  email: z
    .string()
    .trim()
    .max(150, "Use até 150 caracteres.")
    .refine((value) => value === "" || z.string().email().safeParse(value).success, {
      message: "Informe um e-mail válido, como voce@empresa.com.",
    }),
  phone: z
    .string()
    .trim()
    .max(30, "Use até 30 caracteres.")
    .refine((value) => value === "" || value.replace(/\D/g, "").length >= 10, {
      message: "Informe o WhatsApp com DDD, como (85) 99999-9999.",
    }),
  challenge: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais sobre o desafio (mínimo de 10 caracteres).")
    .max(1500, "Use até 1500 caracteres."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

/** Builds the WhatsApp link that opens a chat with the form answers already written. */
export function buildContactFormUrl(values: ContactFormValues) {
  const lines = [WHATSAPP_MESSAGE, "", `Nome: ${values.name}`];
  if (values.company) lines.push(`Empresa: ${values.company}`);
  if (values.email) lines.push(`E-mail: ${values.email}`);
  if (values.phone) lines.push(`WhatsApp: ${values.phone}`);
  lines.push("", `Desafio: ${values.challenge}`);
  return whatsappLink(lines.join("\n"));
}
