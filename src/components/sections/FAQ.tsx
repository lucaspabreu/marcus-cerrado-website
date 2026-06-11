import { Section } from "../ui/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion";
import { faq } from "@/data/faq";

export function FAQ() {
  return (
    <Section
      id="faq"
      eyebrow="Dúvidas comuns"
      title={
        <>
          Antes de
          <br />
          <span className="text-[var(--accent)]">decidir.</span>
        </>
      }
      containerSize="narrow"
    >
      <Accordion type="single" collapsible className="border-t border-[var(--line)]">
        {faq.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.pergunta}</AccordionTrigger>
            <AccordionContent>
              <p className="text-base sm:text-lg leading-relaxed">{item.resposta}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <p className="mt-12 text-sm text-[var(--neutral)] leading-relaxed">
        Outra dúvida específica? Mande mensagem pelo Instagram{" "}
        <a
          href="https://instagram.com/marcusconcursos"
          className="text-[var(--accent)] underline underline-offset-4 hover:text-[var(--accent-deep)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          @marcusconcursos
        </a>
        . A equipe responde em até 24 horas em dias úteis.
      </p>
    </Section>
  );
}
