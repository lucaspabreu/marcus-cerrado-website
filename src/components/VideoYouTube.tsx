"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoYouTubeProps {
  /** Id do vídeo no YouTube (o `v=` da URL). */
  id: string;
  titulo: string;
  className?: string;
}

// Player com "facade": mostra só a thumbnail do YouTube com um botão de play
// e troca pelo iframe (com autoplay) no clique. Evita carregar o player do
// YouTube antes da hora — o vídeo fica acima da dobra na página do concurso.
export function VideoYouTube({ id, titulo, className }: VideoYouTubeProps) {
  const [tocando, setTocando] = useState(false);
  const [poster, setPoster] = useState(
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
  );
  const posterFallback = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden rounded-xl bg-black ring-1 ring-white/15 shadow-2xl shadow-black/40",
        className
      )}
    >
      {tocando ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setTocando(true)}
          className="group absolute inset-0 h-full w-full cursor-pointer"
          aria-label={`Assistir: ${titulo}`}
        >
          {/* Thumbnail do YouTube; sem maxres, cai pro hqdefault */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt=""
            onError={() => setPoster(posterFallback)}
            onLoad={(e) => {
              if (e.currentTarget.naturalWidth < 300) setPoster(posterFallback);
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/10"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-2xl transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
              <Play
                className="h-6 w-6 translate-x-0.5 sm:h-7 sm:w-7"
                strokeWidth={2}
                fill="currentColor"
              />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
