<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep official contact details and the encoded WhatsApp URL in one browser-safe contact module so every contact link stays consistent.
- Keep the contact form and footer as separate components; the form must have no delivery handler until a real integration is provided.
- Render undefined social destinations and unavailable company pages as non-interactive text rather than inventing URLs or creating dead links.
- Define the brand palette and page styling centrally in the global design system to keep contact and footer presentation consistent.
