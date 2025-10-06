"use client"

import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="
        relative overflow-hidden
        min-h-0 md:min-h-screen
        flex items-center justify-center
        bg-background md:bg-gradient-to-br from-primary/5 to-secondary/5
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              <span className="text-primary">Iridologia</span>
              <br />
              Conheça os Benefícios
            </h1>

            <p className="text-elderly-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 text-pretty">
              Descubra o que seus olhos podem revelar sobre sua saúde. A iridologia é uma técnica natural que analisa a
              íris para identificar desequilíbrios no organismo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-elderly-lg px-8 py-4"
                onClick={() => window.open("https://wa.me/5567999824950", "_blank", "_self")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Agendar Consulta
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-elderly-lg px-8 py-4 border-2 bg-transparent"
                onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
              >
                Saiba Mais
              </Button>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-3 gap-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="text-elderly-base font-semibold">(67) 99982-4950</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Endereço</p>
                  <p className="text-elderly-base font-semibold">Centro, Dourados-MS</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Horário</p>
                  <p className="text-elderly-base font-semibold">Seg-Sex 8h-17:30h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Images / Right column */}
          <div className="relative">
            {/* 👉 NÃO usar overflow-hidden aqui, pra não matar o shape */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* shape azul original, atrás das imagens */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl transform rotate-6"></div>

              {/* Card principal */}
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                <Image
                  src="/images/design-mode/img3%281%29.jpeg"
                  alt="Iridologia - Análise da íris dos olhos"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-2xl object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Card secundário */}
              <div className="relative bg-white rounded-2xl p-3 shadow-xl mt-6">
                <Image
                  src="/images/design-mode/image.png"
                  alt="Mapas de Microsemiótica Oftálmica - Íris Direita e Esquerda"
                  width={600}
                  height={300}
                  className="w-full h-auto max-h-[300px] md:max-h-none rounded-xl object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <p className="text-center text-sm text-muted-foreground mt-3">
                  Mapas da íris mostrando as correspondências dos órgãos
                </p>
              </div>
            </div>
          </div>
          {/* /Right column */}
        </div>
      </div>
    </section>
  )
}
