"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { faixaAtual } from "@/data/precos";
import { ofertaAtiva } from "@/data/vendas";

// Faixa fina no topo da home e das páginas de concurso ativo: prazo da faixa
// de preço vigente + cronômetro regressivo até `faixaAtual.encerraEm`.
//
// Some sozinha quando a faixa não tem prazo (preço padrão), quando
// `ofertaAtiva` vira false em @/data/vendas ou, já no navegador, quando o
// prazo passa. Atenção: o cronômetro zera sozinho, o preço não — a virada da
// faixa continua manual (ver @/data/precos.ts).

interface Restante {
  h: string;
  m: string;
  s: string;
}

const dois = (n: number) => String(n).padStart(2, "0");

function calcularRestante(alvo: number): Restante | null {
  const segundos = Math.floor((alvo - Date.now()) / 1000);
  if (segundos <= 0) return null;
  return {
    h: dois(Math.floor(segundos / 3600)),
    m: dois(Math.floor((segundos % 3600) / 60)),
    s: dois(segundos % 60),
  };
}

const alvoParse = faixaAtual.encerraEm ? Date.parse(faixaAtual.encerraEm) : NaN;
const alvo: number | null = Number.isNaN(alvoParse) ? null : alvoParse;

interface FaixaOfertaProps {
  /** Como chamar o que está em oferta: "Projeto PRF", "Projetos PRF e PM-GO"… */
  produto?: string;
}

export function FaixaOferta({ produto = "Projeto" }: FaixaOfertaProps) {
  // null até montar no cliente: o HTML estático sai com traços no lugar dos
  // dígitos, em vez de congelar a hora do build.
  const [restante, setRestante] = useState<Restante | null>(null);
  const [encerrada, setEncerrada] = useState(false);

  useEffect(() => {
    if (alvo === null) return;
    const tick = () => {
      const r = calcularRestante(alvo);
      if (r === null) {
        setEncerrada(true);
        window.clearInterval(id);
        return;
      }
      setRestante(r);
    };
    const id = window.setInterval(tick, 1000);
    tick();
    return () => window.clearInterval(id);
  }, []);

  if (!ofertaAtiva || alvo === null || encerrada) return null;

  return (
    <div className="bg-[#A23420] text-[var(--bg)]">
      <Container size="wide">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 py-2.5 sm:justify-between">
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span className="hidden items-center gap-2 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--bg)]/80 sm:inline-flex">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--bg)]/90"
              />
              Oferta especial
            </span>

            <span
              aria-hidden="true"
              className="hidden h-4 w-px bg-[var(--bg)]/25 sm:inline-block"
            />

            <span className="text-sm text-[var(--bg)]/85 sm:text-[15px]">
              {produto} por{" "}
              <strong className="font-semibold text-[var(--bg)]">
                R$ {faixaAtual.preco}
              </strong>
              <span className="hidden md:inline"> até {faixaAtual.prazo}</span>
            </span>
          </p>

          <p className="flex items-center gap-x-3 whitespace-nowrap">
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--bg)]/80">
              Termina em
            </span>
            <span
              role="timer"
              className="font-mono inline-flex items-baseline gap-x-2 text-sm font-semibold tabular-nums sm:text-[15px]"
            >
              <Unidade valor={restante?.h} sufixo="h" />
              <Unidade valor={restante?.m} sufixo="min" />
              <Unidade valor={restante?.s} sufixo="s" />
            </span>
          </p>
        </div>
      </Container>
    </div>
  );
}

function Unidade({ valor, sufixo }: { valor?: string; sufixo: string }) {
  return (
    <span className="inline-flex items-baseline">
      <span>{valor ?? "--"}</span>
      <span className="ml-0.5 text-[10px] font-medium text-[var(--bg)]/70">
        {sufixo}
      </span>
    </span>
  );
}
