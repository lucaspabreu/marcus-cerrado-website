"use client";

import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Resultado } from "@/data/resultados";

interface GaleriaResultadosProps {
  imagens: Resultado[];
}

export function GaleriaResultados({ imagens }: GaleriaResultadosProps) {
  const [aberta, setAberta] = useState<number | null>(null);

  const fechar = useCallback(() => setAberta(null), []);
  const anterior = useCallback(
    () => setAberta((i) => (i === null ? i : (i - 1 + imagens.length) % imagens.length)),
    [imagens.length]
  );
  const proxima = useCallback(
    () => setAberta((i) => (i === null ? i : (i + 1) % imagens.length)),
    [imagens.length]
  );

  useEffect(() => {
    if (aberta === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") fechar();
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "ArrowRight") proxima();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [aberta, fechar, anterior, proxima]);

  const atual = aberta === null ? null : imagens[aberta];

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 [column-fill:balance]">
        {imagens.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setAberta(i)}
            aria-label={`Ampliar resultado ${i + 1}`}
            className="mb-3 sm:mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--bg)] transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={`Aprovação de aluno do Método CERRADO ${i + 1}`}
              width={img.w}
              height={img.h}
              loading="lazy"
              decoding="async"
              className="w-full h-auto"
            />
          </button>
        ))}
      </div>

      {atual && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Resultado ampliado"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8"
          onClick={fechar}
        >
          <button
            type="button"
            onClick={fechar}
            aria-label="Fechar"
            className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" strokeWidth={1.75} />
          </button>

          {imagens.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  anterior();
                }}
                aria-label="Anterior"
                className="absolute left-2 sm:left-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" strokeWidth={1.75} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  proxima();
                }}
                aria-label="Próxima"
                className="absolute right-2 sm:right-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="h-6 w-6" strokeWidth={1.75} />
              </button>
            </>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={atual.src}
            alt="Aprovação de aluno do Método CERRADO"
            width={atual.w}
            height={atual.h}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
