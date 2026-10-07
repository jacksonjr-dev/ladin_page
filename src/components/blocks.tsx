import { Check, Plus } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal, RevealItem, RevealList } from "@/components/reveal";

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="checklist">
      {items.map((item) => (
        <li key={item}>
          <Check size={16} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Faq({ items }: { items: { question: string; answer: ReactNode }[] }) {
  return (
    <Reveal className="faq">
      {items.map((item) => (
        <details key={item.question} className="faq-item">
          <summary>
            <span>{item.question}</span>
            <Plus size={18} aria-hidden="true" />
          </summary>
          <div className="faq-answer">{item.answer}</div>
        </details>
      ))}
    </Reveal>
  );
}

export function CardGrid({
  items,
  columns = 3,
}: {
  items: { title: string; text: string }[];
  columns?: 2 | 3 | 4;
}) {
  return (
    <RevealList className={`pillars cols-${columns}`}>
      {items.map((item) => (
        <RevealItem key={item.title} className="pillar">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </RevealItem>
      ))}
    </RevealList>
  );
}
