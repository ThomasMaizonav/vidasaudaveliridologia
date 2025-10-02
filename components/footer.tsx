"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Eye, Heart, Shield } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Clinic Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Vida Saudável</h3>
                  <p className="text-primary-foreground/80">Iridologia & Medicina Natural</p>
                </div>
              </div>

              <p className="text-elderly-base text-primary-foreground/90 mb-6 text-pretty max-w-md">
                Há mais de 20 anos cuidando da sua saúde através da iridologia, naturopatia e terapias naturais.
                Oferecemos um atendimento humanizado e personalizado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 text-elderly-base bg-transparent"
                  onClick={() => window.open("https://wa.me/5567999824950", "_blank")}
                >
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-elderly-lg font-semibold mb-6">Navegação</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("inicio")}
                    className="text-elderly-base text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("sobre")}
                    className="text-elderly-base text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("servicos")}
                    className="text-elderly-base text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("faq")}
                    className="text-elderly-base text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contato")}
                    className="text-elderly-base text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-elderly-lg font-semibold mb-6">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-elderly-base font-medium">(67) 99982 4950</p>
                    <p className="text-sm text-primary-foreground/70">Segunda a Sexta</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-elderly-base">R. Dr. Nelson Araújo, 26</p>
                    <p className="text-sm text-primary-foreground/70">Centro, Dourados - MS</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-elderly-base">Seg-Sex: 8h às 17:30h</p>
                {/*    <p className="text-sm text-primary-foreground/70">Sáb: 8h às 12h</p>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Icons */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center space-x-2">
              <Eye className="w-5 h-5" />
              <span className="text-elderly-base">Iridologia</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span className="text-elderly-base">Naturopatia</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span className="text-elderly-base">Terapia Floral</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-elderly-base text-primary-foreground/80">
                © 2024 Vida Saudável - Todos os direitos reservados
              </p>
              <p className="text-sm text-primary-foreground/60 mt-1">
                José Antônio Pacheco - Especialista em Iridologia
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-primary-foreground/70 text-pretty">
                A iridologia é uma prática de medicina complementar.
                <br />
                Não substitui o acompanhamento médico convencional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
