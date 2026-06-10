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
  tone?: "light" | "dark";
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
  tone = "light",
}: SectionProps) {
  const isDark = tone === "dark";

  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 md:py-24",
        isDark
          ? "bg-[var(--ink)] text-[var(--bg)]"
          : "border-t border-[var(--line)]",
        className
      )}
    >
      <Container size={containerSize}>
        {(number || eyebrow || title || intro) && (
          <header className="mb-10 sm:mb-14 max-w-2xl">
            {(number || eyebrow) && (
              <div className="flex items-baseline gap-3 mb-4">
                {number && (
                  <span
                    className={cn(
                      "font-display text-xs tabular-nums",
                      isDark ? "text-[var(--accent-soft)]" : "text-[var(--accent)]"
                    )}
                  >
                    {number}
                  </span>
                )}
                {eyebrow && (
                  <span
                    className={cn(
                      "text-[11px] uppercase tracking-[0.18em] font-medium",
                      isDark ? "text-[var(--bg)]/55" : "text-[var(--neutral)]"
                    )}
                  >
                    {eyebrow}
                  </span>
                )}
              </div>
            )}
            {title && (
              <h2
                className={cn(
                  "font-display text-3xl sm:text-4xl md:text-[2.75rem] font-normal leading-[1.1] tracking-tight",
                  isDark ? "text-[var(--bg)]" : "text-[var(--ink)]"
                )}
              >
                {title}
              </h2>
            )}
            {intro && (
              <p
                className={cn(
                  "mt-5 text-base sm:text-lg leading-relaxed max-w-xl",
                  isDark ? "text-[var(--bg)]/65" : "text-[var(--neutral)]"
                )}
              >
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
