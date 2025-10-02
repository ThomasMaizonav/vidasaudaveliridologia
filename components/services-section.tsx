"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Leaf, Flower, Heart, Clock, Phone, CheckCircle } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Eye,
      title: "Iridologia Completa",
      subtitle: "Microsemiótica Iridea",
      description:
        "Análise detalhada da íris dos olhos para identificar predisposições e desequilíbrios no organismo. Exame não invasivo que revela informações importantes sobre sua saúde.",
      duration: "60 minutos",
      benefits: [
        "Diagnóstico natural e não invasivo",
        "Identificação de predisposições",
        "Mapeamento de órgãos e sistemas",
        "Orientações personalizadas",
      ],
      featured: true,
    },
    {
      icon: Leaf,
      title: "Naturopatia",
      subtitle: "Medicina Natural",
      description:
        "Tratamento baseado em métodos naturais, utilizando o poder de cura da natureza para restaurar o equilíbrio e promover a saúde integral.",
      duration: "45 minutos",
      benefits: [
        "Tratamentos naturais",
        "Sem efeitos colaterais",
        "Fortalecimento da imunidade",
        "Abordagem holística",
      ],
      featured: false,
    },
    {
      icon: Flower,
      title: "Terapia Floral de Íris",
      subtitle: "Master Especialista",
      description:
        "Terapia especializada utilizando essências florais específicas baseadas na análise da íris, promovendo equilíbrio emocional e físico.",
      duration: "50 minutos",
      benefits: [
        "Equilíbrio emocional",
        "Essências personalizadas",
        "Tratamento individualizado",
        "Resultados duradouros",
      ],
      featured: false,
    },
    {
      icon: Heart,
      title: "Consulta Integrada",
      subtitle: "Avaliação Completa",
      description:
        "Combinação de iridologia, naturopatia e terapia floral em uma consulta completa para um diagnóstico e tratamento mais abrangente.",
      duration: "90 minutos",
      benefits: [
        "Avaliação completa",
        "Múltiplas abordagens",
        "Plano de tratamento integrado",
        "Acompanhamento personalizado",
      ],
      featured: true,
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-elderly-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Oferecemos uma gama completa de serviços em medicina natural e iridologia para cuidar da sua saúde de forma
            holística
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  service.featured
                    ? "border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5"
                    : "hover:border-primary/30"
                }`}
              >
                {service.featured && (
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                    Mais Procurado
                  </Badge>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        service.featured ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-elderly-xl mb-1">{service.title}</CardTitle>
                      <p className="text-sm text-primary font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-elderly-base text-muted-foreground text-pretty">{service.description}</p>

                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Duração: {service.duration}</span>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-elderly-base mb-3">Benefícios:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    className={`w-full text-elderly-base py-3 ${
                      service.featured
                        ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                        : "bg-primary hover:bg-primary/90 text-primary-foreground"
                    }`}
                    onClick={() => window.open("https://wa.me/5567999824950", "_blank")}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Agendar {service.title}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Process Section */}
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Como Funciona a Consulta</h3>
            <p className="text-elderly-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Nosso processo é simples e acolhedor, pensado para oferecer o melhor atendimento
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                1
              </div>
              <h4 className="font-semibold text-elderly-lg mb-2">Agendamento</h4>
              <p className="text-muted-foreground text-pretty">Ligue para (67) 99982-4950 e agende sua consulta</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                2
              </div>
              <h4 className="font-semibold text-elderly-lg mb-2">Acolhimento</h4>
              <p className="text-muted-foreground text-pretty">
                Recepção calorosa e conversa inicial sobre seu histórico
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                3
              </div>
              <h4 className="font-semibold text-elderly-lg mb-2">Análise</h4>
              <p className="text-muted-foreground text-pretty">Exame detalhado da íris e avaliação completa</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                4
              </div>
              <h4 className="font-semibold text-elderly-lg mb-2">Orientações</h4>
              <p className="text-muted-foreground text-pretty">Explicação dos resultados e plano de tratamento</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white border-0">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Pronto para Cuidar da Sua Saúde?</h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
                Agende sua consulta hoje mesmo e descubra o que seus olhos podem revelar sobre sua saúde
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-elderly-lg px-8 py-4"
                  onClick={() => window.open("tel:+5567999824950", "_self")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Ligar Agora: (67) 99982-4950
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-elderly-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
                  onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ver Localização
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
