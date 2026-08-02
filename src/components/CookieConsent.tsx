"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

type ConsentChoice = "granted" | "denied";

const STORAGE_KEY = "cerrado-cookie-consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function updateGoogleConsent(choice: ConsentChoice) {
  window.gtag?.("consent", "update", {
    analytics_storage: choice,
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
  });
}

// Injeta o Meta Pixel só depois do consentimento — sem gate de consent mode
// próprio, ele precisa ser carregado sob demanda.
function loadFacebookPixel(pixelId: string) {
  if (document.getElementById("fb-pixel-init")) return;

  const script = document.createElement("script");
  script.id = "fb-pixel-init";
  script.textContent = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${pixelId}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);

  const noscript = document.createElement("noscript");
  const img = document.createElement("img");
  img.height = 1;
  img.width = 1;
  img.style.display = "none";
  img.src = `https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`;
  img.alt = "";
  noscript.appendChild(img);
  document.body.appendChild(noscript);
}

function applyConsent(choice: ConsentChoice, fbPixelId?: string) {
  updateGoogleConsent(choice);
  if (choice === "granted" && fbPixelId) {
    loadFacebookPixel(fbPixelId);
  }
}

interface CookieConsentProps {
  fbPixelId?: string;
}

export function CookieConsent({ fbPixelId }: CookieConsentProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentChoice | null;
    if (stored === "granted") {
      applyConsent("granted", fbPixelId);
    } else if (!stored) {
      setVisible(true);
    }
  }, [fbPixelId]);

  function handleChoice(choice: ConsentChoice) {
    localStorage.setItem(STORAGE_KEY, choice);
    applyConsent(choice, fbPixelId);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-[var(--line-strong)] bg-[var(--bg-elevated)] px-5 py-4 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
          Usamos cookies para melhorar sua experiência e medir o desempenho do
          site. Ao clicar em &ldquo;Aceitar&rdquo;, você concorda com o uso de
          cookies de análise e publicidade.
        </p>
        <div className="flex shrink-0 gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleChoice("denied")}
          >
            Recusar
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => handleChoice("granted")}
          >
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  );
}
