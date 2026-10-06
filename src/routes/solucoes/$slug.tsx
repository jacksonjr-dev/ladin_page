import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Checklist, Faq } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { RevealItem, RevealList } from "@/components/reveal";
import { CtaBand, Section } from "@/components/section";
import { steps } from "@/lib/process";
import { pageHead } from "@/lib/seo";
import { findSolution, solutions } from "@/lib/solutions";

export const Route = createFileRoute("/solucoes/$slug")({
  loader: ({ params }) => {
    const solution = findSolution(params.slug);
    if (!solution) throw notFound();
    return { slug: solution.slug };
  },
  head: ({ loaderData }) => {
    const solution = loaderData ? findSolution(loaderData.slug) : undefined;
    if (!solution) return {};
    return pageHead({
      path: `/solucoes/${solution.slug}`,
      title: solution.seoTitle,
      description: solution.seoDescription,
    });
  },
  component: SolutionPage,
});

function SolutionPage() {
  const { slug } = Route.useLoaderData();
  const solution = findSolution(slug);
  if (!solution) return null;

  const { icon: Icon, h1, forWho, text, benefits, example, faq, topic } = solution;
  const others = solutions.filter((item) => item.slug !== slug);

  return (
    <main id="conteudo">
      <PageHero eyebrow="SOLUÇÕES" title={h1} description={text} long>
        <Link to="/solucoes" className="ghost-link">
          Ver todas as soluções
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </PageHero>

      <Section id="who-title" title="Para quem é">
        <div className="detail-grid">
          <div className="detail-intro">
            <span className="solution-icon">
              <Icon size={24} aria-hidden="true" />
            </span>
            <p className="prose">{forWho}</p>
          </div>
          <div className="detail-body">
            <h3 className="detail-label">O que muda no dia a dia</h3>
            <Checklist items={benefits} />
            <div className="example">
              <h3 className="detail-label">Exemplo ilustrativo</h3>
              <p>{example}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="how-title"
        title="Como começamos"
        intro="O caminho é o mesmo para qualquer solução: primeiro entendemos o seu processo, depois propomos o próximo passo."
      >
        <RevealList className="steps steps-4">
          {steps.map((step) => (
            <RevealItem key={step.title} className="step">
              <h3>{step.title}</h3>
              <p>{step.summary}</p>
            </RevealItem>
          ))}
        </RevealList>
      </Section>

      <Section id="faq-title" title="Perguntas frequentes">
        <Faq items={faq} />
      </Section>

      <Section
        id="others-title"
        title="Outras soluções"
        intro="Cada solução funciona sozinha, e muitas podem ser conectadas entre si."
      >
        <ul className="link-list">
          {others.map((item) => (
            <li key={item.slug}>
              <Link to="/solucoes/$slug" params={{ slug: item.slug }}>
                {item.title}
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title={`Quer conversar sobre ${topic}?`}
        text="Conte como funciona o seu processo hoje. Dizemos se faz sentido e qual seria o primeiro passo."
        label="Falar no WhatsApp"
        message={`Olá, JPGLabs! Gostaria de conversar sobre ${topic} para a minha empresa.`}
      />
    </main>
  );
}
