import { Section } from "@/components/ui/section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "É muito caro?",
    answer: "Na verdade, caro é continuar perdendo oportunidades por não ter uma presença digital à altura do seu negócio. Nossas soluções são personalizadas para cada realidade e pensadas para trazer retorno."
  },
  {
    question: "Terei resultados reais?",
    answer: "Nosso foco é resultado — por isso entregamos não só design, mas estratégia, performance e acompanhamento. Você vai sentir a diferença no seu bolso, não só na aparência."
  },
  {
    question: "Como funciona o processo?",
    answer: "Simples e transparente: começamos com uma reunião estratégica, montamos um plano personalizado, e você acompanha cada etapa com clareza. Sem mistério, sem promessas vazias."
  },
  {
    question: "Quanto tempo demora para ver resultados?",
    answer: "Isso varia dependendo do serviço, mas nossos clientes geralmente começam a ver melhorias significativas já nas primeiras semanas. Sites podem começar a gerar leads imediatamente após o lançamento."
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer: "Sim! Oferecemos suporte contínuo e acompanhamento para garantir que sua presença digital continue performando e evoluindo junto com seu negócio."
  }
]

export function FAQSection() {
  return (
    <Section id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">Perguntas Frequentes</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-lg px-6 bg-gradient-card hover:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}