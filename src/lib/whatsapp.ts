// Número do WhatsApp de suporte: 55 + DDD + número, sem espaços ou símbolos.
// Usado pelo botão flutuante (components/WhatsAppFloat.tsx) e por qualquer
// CTA de suporte nas páginas. Pra trocar o número, mexa só aqui.
export const WHATSAPP_NUMBER = "5566981289655";

/** Link do WhatsApp com a mensagem já preenchida. */
export function whatsappHref(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
