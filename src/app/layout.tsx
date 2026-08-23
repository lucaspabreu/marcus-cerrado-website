import type { Metadata } from "next";
import Script from "next/script";
import { Anton, Cal_Sans, Inter, Roboto_Mono } from "next/font/google";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import "./globals.css";

const calSans = Cal_Sans({
  variable: "--font-cal-sans",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

// Anton — face condensada pesada para os títulos "capa" dos produtos
const anton = Anton({
  variable: "--font-cover",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// Domínio canônico. Enquanto marcusnery.com.br não estiver no ar, usamos o
// deploy do Cloudflare Pages para o preview de link funcionar. Trocar quando
// o domínio final entrar (ou setar NEXT_PUBLIC_SITE_URL no ambiente).
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://marcus-cerrado-website.pages.dev";
// IDs de tracking. São públicos por natureza (vão no JS do cliente), então
// ficam versionados como padrão de produção — o build estático roda no
// Cloudflare, onde .env.local não existe. Em dev não dispara nada, pra não
// sujar os dados de produção; env var sobrescreve em qualquer ambiente.
// GA_ID aceita tanto GA4 (G-XXXXXXX) quanto Google Ads (AW-XXXXXXXXX);
// gtag.js suporta múltiplos config() na mesma tag.
const IS_PROD = process.env.NODE_ENV === "production";
const GA_ID =
  process.env.NEXT_PUBLIC_GA_ID ?? (IS_PROD ? "G-C7DHJMY1CS" : undefined);
const FB_PIXEL_ID =
  process.env.NEXT_PUBLIC_FB_PIXEL_ID ??
  (IS_PROD ? "1528092039326254" : undefined);

const SITE_TITLE = "Cerrado Concursos";
const SITE_DESCRIPTION =
  "Marcus Nery, criador do Método CERRADO. Aprovado na PRF aos 19 anos. Materiais de estudo para concursos policiais com leitura clara de edital, banca e estratégia.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — Cerrado Concursos",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Marcus Nery",
    "concursos policiais",
    "Método CERRADO",
    "PRF",
    "PCGO",
    "PMGO",
    "PMDF",
    "polícia civil",
    "polícia federal",
    "preparação concurso",
  ],
  authors: [{ name: "Cerrado Concursos" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Cerrado Concursos",
    images: [
      {
        url: "/logo-cerrado_page-1x1.jpg",
        width: 484,
        height: 484,
        alt: "Cerrado Concursos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/logo-cerrado_page-1x1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${calSans.variable} ${inter.variable} ${robotoMono.variable} ${anton.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink)]">
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        {FB_PIXEL_ID && (
          <>
            <Script id="fb-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${FB_PIXEL_ID}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
