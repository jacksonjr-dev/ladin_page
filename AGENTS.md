## Application rules

- Keep official contact details and the encoded WhatsApp URL in one browser-safe contact module so every contact link stays consistent.
- Keep the contact form and footer as separate components. The form has no server: submitting validates the fields and opens WhatsApp with the message pre-written. It must never claim the message was delivered, only that the chat was opened.
- Render undefined social destinations as non-interactive text rather than inventing URLs or creating dead links. Company pages are real routes (see `src/lib/site.ts`); where content does not exist yet, use an explicit empty state instead of invented content.
- Define the brand palette and page styling centrally in the global design system to keep contact and footer presentation consistent.
