import type { CSSProperties, ReactNode } from "react";
import { FlowField } from "@/components/flow-field";

// Staggers the entrance of each block; the delay is applied in CSS from --i.
export const rise = (i: number) => ({ "--i": i }) as CSSProperties;

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  long = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
  long?: boolean;
}) {
  return (
    <section className="hero-stage page-hero" aria-labelledby="page-title">
      <FlowField />
      <div className="page-hero-inner">
        <p className="eyebrow rise" style={rise(0)}>
          {eyebrow}
        </p>
        <h1
          id="page-title"
          className={`display-title rise${long ? " is-long" : ""}`}
          style={rise(1)}
        >
          {title}
        </h1>
        <p className="lead rise" style={rise(2)}>
          {description}
        </p>
        {children && (
          <div className="hero-actions rise" style={rise(3)}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
