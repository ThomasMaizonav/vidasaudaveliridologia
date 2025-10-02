"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Heart, Shield, Users } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre a <span className="text-primary">Vida Saudável</span>
          </h2>
          <p className="text-elderly-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Há mais de 20 anos dedicados ao cuidado da sua saúde através da iridologia e terapias naturais
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Professional Info */}
          <div>
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4 text-elderly-base px-4 py-2">
                Especialista em Iridologia
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">José Antônio Pacheco</h3>
              <p className="text-elderly-lg text-muted-foreground mb-6 text-pretty">
                Profissional especializado em Microsemiótica Iridea, Naturopatia e Master em Terapia Floral de Íris. Com
                vasta experiência no diagnóstico através da análise da íris, oferecendo um olhar holístico sobre a
                saúde.
              </p>
            </div>

            {/* Specialties */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start space-x-3">
                <Eye className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-elderly-base mb-1">Microsemiótica Iridea</h4>
                  <p className="text-sm text-muted-foreground">Análise detalhada da íris</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-elderly-base mb-1">Naturopatia</h4>
                  <p className="text-sm text-muted-foreground">Medicina natural</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-elderly-base mb-1">Terapia Floral</h4>
                  <p className="text-sm text-muted-foreground">Especialista em Florais de Íris</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-elderly-base mb-1">Experiência</h4>
                  <p className="text-sm text-muted-foreground">Mais de 20 anos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Photo */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-3 shadow-xl">
                <Image
                  src="/images/design-mode/img2%281%29.jpeg"
                  alt="José Antônio Pacheco - Iridólogo especialista"
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="relative w-full max-w-md mx-auto mt-8">
              
            </div>
          </div>
        </div>

        {/* Clinic Info */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Clinic Photo */}
          <div className="lg:order-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-3 shadow-xl">
                <Image
                  src="/images/design-mode/img1%281%29.jpeg"
                  alt="Clínica Vida Saudável - Fachada"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Clinic Description */}
          <div className="lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Nossa Clínica</h3>
            <p className="text-elderly-lg text-muted-foreground mb-6 text-pretty">
              A Clínica Vida Saudável está localizada no centro de Dourados-MS, oferecendo um ambiente acolhedor e
              profissional para seus atendimentos. Nossa estrutura foi pensada para proporcionar conforto e
              tranquilidade durante as consultas.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-elderly-base">Ambiente climatizado e confortável</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-elderly-base">Equipamentos modernos para análise</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-elderly-base">Localização central e de fácil acesso</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-elderly-base">Atendimento personalizado e humanizado</span>
              </div>
            </div>
          </div>
        </div>

        {/* What is Iridology */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">O que é Iridologia?</h3>
                <p className="text-elderly-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
                  A iridologia é uma técnica de diagnóstico que analisa as características da íris dos olhos para
                  identificar predisposições e desequilíbrios no organismo.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-elderly-lg mb-2">Análise Detalhada</h4>
                  <p className="text-muted-foreground text-pretty">
                    Exame minucioso das fibras, cores e sinais presentes na íris
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-elderly-lg mb-2">Diagnóstico Natural</h4>
                  <p className="text-muted-foreground text-pretty">
                    Método não invasivo que revela informações sobre sua saúde
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-elderly-lg mb-2">Prevenção</h4>
                  <p className="text-muted-foreground text-pretty">
                    Identificação precoce de tendências e desequilíbrios
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
