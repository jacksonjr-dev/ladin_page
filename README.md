# JPGLabs — Landing page

Site da JPGLabs ("Transformando processos em soluções"), construída com
TanStack Start, React 19 e Tailwind CSS 4.

## Estado atual

- WhatsApp é o único canal de contato funcional (`src/lib/contact.ts`).
- O formulário valida os campos e abre o WhatsApp com a mensagem já escrita. Não há servidor nem e-mail, e a página nunca diz que a mensagem foi entregue.
- Canais de contato: WhatsApp (+55 85 98630-4497) e Instagram (@Jdg_sistems). Ainda não há e-mail nem LinkedIn, então eles não aparecem no site.
- Páginas: Início, Soluções, Como trabalhamos, Sobre nós e Contato. A página de Projetos foi removida até existirem casos reais para mostrar.

As regras do projeto estão em [AGENTS.md](AGENTS.md).

## Desenvolvimento

```sh
npm i
npm run dev      # servidor local
npm run lint     # ESLint + Prettier
npm test         # Vitest
npm run build    # build de produção
```
