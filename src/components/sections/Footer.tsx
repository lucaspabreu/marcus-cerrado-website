import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";
import { Container } from "../ui/Container";

function TikTokIcon({ className, strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const legalLinks = [
  { label: "Termos de uso", href: "#" },
  { label: "Política de privacidade", href: "#" },
  { label: "Contrato de matrícula", href: "#" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/marcusconcursos",
    Icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@marcusconcursos",
    Icon: Youtube,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@marcusconcursos",
    Icon: TikTokIcon,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-16 sm:py-20">
      <Container size="wide">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="font-display text-2xl tracking-tight text-[var(--ink)]"
            >
              Cerrado Concursos
              <span className="text-[var(--accent)]">.</span>
            </Link>
            <p className="mt-3 text-sm text-[var(--neutral)] leading-relaxed max-w-sm">
              Estratégia honesta para concursos policiais. Comandado por Marcus Nery.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow mb-4">Redes</h3>
            <ul className="space-y-2.5">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Cerrado Concursos no ${label}`}
                    className="group inline-flex items-center gap-3 text-sm text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors"
                  >
                    <Icon
                      className="h-4 w-4 text-[var(--neutral)] group-hover:text-[var(--accent)] transition-colors"
                      strokeWidth={1.5}
                    />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="eyebrow mb-4">Institucional</h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-xs text-[var(--neutral)]">
            © {new Date().getFullYear()} Cerrado Concursos. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[var(--neutral)]">
            Desenvolvido com cuidado · Brasil
          </p>
        </div>
      </Container>
    </footer>
  );
}
