"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle, Phone, MessageCircle } from "lucide-react"

export function FAQSection() {
  const faqs = [
    {
      question: "O que é iridologia e como funciona?",
      answer:
        "A iridologia é uma técnica de diagnóstico natural que analisa as características da íris dos olhos (cor, fibras, manchas, sinais) para identificar predisposições e desequilíbrios no organismo. Cada área da íris corresponde a um órgão ou sistema do corpo, permitindo uma avaliação holística da saúde.",
    },
    {
      question: "O exame de iridologia é doloroso?",
      answer:
        "Não, o exame de iridologia é completamente indolor e não invasivo. Utilizamos apenas uma lupa especial ou equipamento de ampliação para observar detalhadamente a íris dos seus olhos. Não há contato físico nem uso de colírios ou medicamentos.",
    },
    {
      question: "Quanto tempo demora uma consulta?",
      answer:
        "Uma consulta completa de iridologia dura entre 60 a 90 minutos. Este tempo inclui a conversa inicial sobre seu histórico de saúde, o exame detalhado da íris, a análise dos resultados e as orientações personalizadas para seu tratamento.",
    },
    {
      question: "Que tipos de problemas a iridologia pode detectar?",
      answer:
        "A iridologia pode identificar predisposições a problemas digestivos, circulatórios, respiratórios, renais, hepáticos, nervosos e muito mais. Também revela níveis de toxinas, inflamações, deficiências nutricionais e o estado geral da vitalidade do organismo.",
    },
    {
      question: "Preciso fazer algum preparo antes da consulta?",
      answer:
        "Não é necessário nenhum preparo especial. Recomendamos apenas que venha descansado e traga uma lista dos medicamentos que usa regularmente. Se usar lentes de contato, traga o estojo para removê-las durante o exame.",
    },
    {
      question: "Com que frequência devo fazer o acompanhamento?",
      answer:
        "Para casos preventivos, recomendamos uma avaliação anual. Para tratamentos específicos, o acompanhamento pode ser trimestral ou semestral, dependendo da condição. Cada caso é avaliado individualmente para determinar a frequência ideal.",
    },
    {
      question: "Crianças podem fazer iridologia?",
      answer:
        "Sim, crianças podem fazer iridologia a partir dos 3 anos de idade, quando conseguem colaborar com o exame. É uma excelente ferramenta para identificar predisposições e orientar cuidados preventivos desde cedo.",
    },
    {
      question: "Qual o valor da consulta?",
      answer:
        "Os valores variam conforme o tipo de consulta escolhida. Entre em contato conosco pelo telefone (67) 3422-0697 para informações detalhadas sobre preços e formas de pagamento. Oferecemos condições especiais para idosos.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-elderly-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Esclarecemos as principais dúvidas sobre iridologia e nossos serviços. Se não encontrar sua pergunta, entre
            em contato conosco.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="mb-12">
          <CardContent className="p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 py-2"
                >
                  <AccordionTrigger className="text-left text-elderly-lg font-semibold hover:text-primary [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-elderly-base text-muted-foreground pt-4 pb-2 text-pretty">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-elderly-xl">
                <Phone className="w-6 h-6 text-primary" />
                <span>Ainda tem dúvidas?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-elderly-base text-muted-foreground mb-6 text-pretty">
                Nossa equipe está pronta para esclarecer todas as suas dúvidas sobre iridologia e agendar sua consulta.
              </p>
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-elderly-base py-3"
                onClick={() => window.open("https://wa.me/5567999824950", "_blank")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Enviar Mensagem: (67) 3422-0697
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-elderly-xl">
                <MessageCircle className="w-6 h-6 text-secondary" />
                <span>Quer saber mais?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-elderly-base text-muted-foreground mb-6 text-pretty">
                Visite nossa clínica e conheça pessoalmente nosso trabalho. Estamos localizados no centro de Dourados.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-elderly-base py-3 bg-transparent"
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Localização
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Informação Importante</h3>
              <p className="text-elderly-base text-muted-foreground text-pretty">
                A iridologia é uma prática de medicina complementar e não substitui o acompanhamento médico
                convencional. Sempre consulte seu médico para questões de saúde sérias e mantenha seus exames em dia.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
