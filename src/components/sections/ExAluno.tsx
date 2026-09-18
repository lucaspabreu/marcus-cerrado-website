import { ArrowRight } from "lucide-react";
import { whatsappHref } from "@/lib/whatsapp";
import { Container } from "../ui/Container";

// Faixa escura logo abaixo de "Acesso": condição especial pra quem já comprou
// qualquer produto da Cerrado. Não tem preço aqui de propósito, a condição é
// passada no WhatsApp; a mensagem já chega citando a carreira da página.
export function ExAluno({ sigla }: { sigla: string }) {
  const href = whatsappHref(
    `Olá! Já sou aluno(a) da Cerrado e quero saber da condição especial de ex-aluno para a ${sigla}.`
  );

  return (
    <section
      id="ex-aluno"
      className="bg-[var(--ink)] py-14 text-center text-[var(--bg)] sm:py-16 md:py-20"
    >
      <Container>
        <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--accent-soft)]">
          Condição exclusiva para ex-alunos
        </span>

        <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-2xl font-normal leading-[1.1] tracking-tight sm:text-3xl lg:text-4xl">
          Já adquiriu algum produto da Cerrado?{" "}
          <span className="text-[var(--accent-soft)]">
            Você tem condição especial.
          </span>
        </h2>

        <div
          aria-hidden="true"
          className="mx-auto mt-6 h-px w-16 bg-[var(--accent-soft)]/60"
        />

        <p className="mx-auto mt-6 max-w-lg text-balance text-sm leading-relaxed text-[var(--bg)]/65 sm:text-base">
          Quem já foi aluno não paga o mesmo que quem está chegando agora. Fale
          no nosso WhatsApp e receba a sua condição para a {sigla}.
        </p>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-7 inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-lg bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--bg)] transition-colors duration-200 hover:bg-[var(--accent-deep)]"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 shrink-0"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
          </svg>
          <span>Quero minha condição</span>
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        </a>

        <p className="mt-4 flex items-center justify-center gap-2 text-xs text-[var(--bg)]/45">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-[var(--accent-soft)]"
          />
          Atendimento pelo WhatsApp
        </p>
      </Container>
    </section>
  );
}
