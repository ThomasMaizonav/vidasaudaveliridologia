"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Vida Saudável</h1>
              <p className="text-sm text-muted-foreground">Iridologia</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-elderly-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-elderly-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-elderly-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-elderly-base font-medium text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-elderly-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-elderly-base px-6 py-3"
              onClick={() => window.open("https://wa.me/5567999824950", "_blank")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="lg" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-3">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-elderly-lg font-medium text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-elderly-lg font-medium text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-elderly-lg font-medium text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-elderly-lg font-medium text-foreground hover:text-primary transition-colors text-left py-2"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-elderly-lg font-medium text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Contato
              </button>

              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-elderly-lg px-6 py-4 mt-4"
                onClick={() => window.open("https://wa.me/5567999824950", "_blank")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Agendar Consulta
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
