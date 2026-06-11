import type { Metadata } from "next";
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

const SITE_URL = "https://marcusnery.com.br";
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
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
