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

## Deploy (Vercel)

1. Em [vercel.com/new](https://vercel.com/new), entre com o GitHub e importe o repositório.
2. Mantenha o comando de build `npm run build`. O Nitro detecta a Vercel sozinho e gera o `.vercel/output`.
3. Clique em _Deploy_. A Vercel entrega um endereço `*.vercel.app` com HTTPS.

O endereço público é lido automaticamente da Vercel durante o build (`VERCEL_PROJECT_PRODUCTION_URL`)
e alimenta canonical, `og:image`, `og:url` e os dados estruturados. Não é preciso configurar nada.

**Domínio próprio:** em _Settings → Domains → Add_, siga as instruções de DNS. Depois que o domínio estiver
como domínio de produção, faça um novo deploy para que o canonical use o novo endereço. Se preferir fixar
o endereço manualmente, crie `VITE_SITE_URL` (veja `.env.example`) apenas no ambiente _Production_.

**Atenção:** em _Settings → Deployment Protection_, o endereço de produção precisa estar público, senão o
Google não consegue acessar o site.

## Aparecer no Google

O site já entrega `sitemap.xml` e `robots.txt` (gerados com o endereço de cada requisição), título e
descrição por página, dados estruturados (Organization) e imagem de compartilhamento. Falta a parte
que só o dono do site faz:

1. Abra o [Google Search Console](https://search.google.com/search-console) e adicione o site como
   propriedade (domínio ou prefixo de URL) e confirme a posse. Sem domínio próprio, use "Prefixo do URL" com o endereço `https://...vercel.app` exato.
2. Em _Sitemaps_, envie `sitemap.xml`.
3. Em _Inspeção de URL_, peça a indexação da página inicial.
4. Crie o [Perfil da Empresa no Google](https://www.google.com/business/) com o mesmo nome, telefone e site.
   Isso ajuda em buscas locais.

A indexação leva de dias a semanas. Aparecer para buscas como "automação de WhatsApp" depende, além do
site estar no ar, de conteúdo relevante e de links de outros sites apontando para ele.
