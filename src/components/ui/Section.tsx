import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  number?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  containerSize?: "default" | "narrow" | "wide";
}

export function Section({
  children,
  className,
  id,
  number,
  eyebrow,
  title,
  intro,
  containerSize = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20 md:py-24", className)}
    >
      <Container size={containerSize}>
        {(number || eyebrow || title || intro) && (
          <header className="mb-10 sm:mb-14 max-w-2xl">
            {(number || eyebrow) && (
              <div className="flex items-baseline gap-3 mb-4">
                {number && (
                  <span className="font-display text-xs text-[var(--accent)] tabular-nums">
                    {number}
                  </span>
                )}
                {eyebrow && <span className="eyebrow">{eyebrow}</span>}
              </div>
            )}
            {title && (
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-normal leading-[1.1] tracking-tight text-[var(--ink)]">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 text-base sm:text-lg text-[var(--neutral)] leading-relaxed max-w-xl">
                {intro}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
