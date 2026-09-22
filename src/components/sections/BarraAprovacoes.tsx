import { aprovacoes } from "@/data/aprovacoes";

export function BarraAprovacoes() {
  // Render the list 4 times to fill the marquee track and create a seamless loop.
  // Animation translates by -50%, so we need at least 2 copies; 4 gives buffer.
  const trackItems = Array.from({ length: 4 }).flatMap(() => aprovacoes);

  return (
    <section
      className="bg-[var(--band)] py-5 sm:py-6 relative overflow-hidden marquee-pause"
      aria-label="Aprovações em concursos policiais"
    >
      <div className="flex items-center">
        {/* Static label */}
        <div className="shrink-0 flex items-center gap-3 pl-6 sm:pl-10 pr-6 sm:pr-10 relative z-20 bg-[var(--band)]">
          <span className="text-[10px] uppercase tracking-[0.18em] font-medium text-[var(--accent-soft)] whitespace-nowrap">
            Aprovações
          </span>
        </div>

        {/* Marquee track */}
        <div className="relative flex-1 overflow-hidden">
          {/* Edge fades */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-[var(--band)] to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-[var(--band)] to-transparent"
          />

          <div className="flex w-max animate-marquee">
            {trackItems.map((item, idx) => (
              <div
                key={`${item.sigla}-${idx}`}
                className="flex items-center shrink-0"
              >
                <div className="flex items-baseline gap-3 px-8 sm:px-12">
                  <span className="font-display text-base sm:text-lg text-[var(--band-fg)] tracking-tight whitespace-nowrap">
                    {item.sigla}
                  </span>
                  <span className="text-xs text-[var(--band-fg)]/55 whitespace-nowrap">
                    {item.nome}
                  </span>
                </div>
                <span
                  aria-hidden="true"
                  className="inline-block w-px h-3 bg-[var(--band-fg)]/15"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
