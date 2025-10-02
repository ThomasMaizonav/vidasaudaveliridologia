"use client";

import type React from "react";
import { useMemo, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, MessageSquare } from "lucide-react";

const WHATSAPP_NUMBER = "5567999824950"; // DDI+DDD+número, sem espaços

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Monta a URL do WhatsApp toda vez que o formulário muda
  const whatsUrl = useMemo(() => {
    const texto =
      `Olá! Gostaria de agendar uma consulta.\n\n` +
      `Nome: ${formData.name}\n` +
      `Telefone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Mensagem: ${formData.message}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
  }, [formData]);

  // Se quiser manter o submit para validação dos 'required', só previne e não abre popup
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // nada aqui: o link abaixo é quem abre de fato
  };

  const quickWhatsHref = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-elderly-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estamos prontos para atendê-lo. Agende sua consulta ou tire suas dúvidas conosco
          </p>
        </div>

        {/* Grid com 2 colunas */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Coluna 1: Informações */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>

              <Card className="border-secondary/20 bg-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-elderly-lg mb-2">
                        WhatsApp
                      </h4>
                      <p className="text-elderly-base text-muted-foreground mb-3">
                        Envie uma mensagem pelo WhatsApp
                      </p>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-elderly-base bg-transparent"
                        onClick={() => window.open(quickWhatsHref, "_blank")}
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Enviar Mensagem
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-elderly-lg mb-2">
                        Endereço
                      </h4>
                      <p className="text-elderly-base text-muted-foreground">
                        R. Dr. Nelson Araújo, 26
                        <br />
                        Centro, Dourados - MS
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-elderly-lg mb-2">
                        Horário de Funcionamento
                      </h4>
                      <div className="text-elderly-base text-muted-foreground space-y-1">
                        <p>Segunda a Sexta: 8h às 18h</p>
                        <p>Sábado: 8h às 12h</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Coluna 2: Formulário */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Envie uma Mensagem
                </CardTitle>
                <p className="text-elderly-base text-muted-foreground text-center text-pretty">
                  Preencha o formulário abaixo e entraremos em contato
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6" target="_blank">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-elderly-base font-medium text-foreground mb-2"
                    >
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="text-elderly-base py-3"
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-elderly-base font-medium text-foreground mb-2"
                    >
                      Telefone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="text-elderly-base py-3"
                      placeholder="(67) 99999-9999"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-elderly-base font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="text-elderly-base py-3"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-elderly-base font-medium text-foreground mb-2"
                    >
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="text-elderly-base min-h-[120px]"
                      placeholder="Conte-nos como podemos ajudá-lo..."
                    />
                  </div>

                  {/* Botão que é um <a> real por baixo */}
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-elderly-lg py-4"
                  >
                    <a href={whatsUrl} target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Enviar via WhatsApp
                    </a>
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Ao enviar, você será redirecionado para o WhatsApp
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mapa / Localização */}
        <div className="mt-16">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Nossa Localização
              </h3>
              <div className="bg-muted/50 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-elderly-lg font-semibold text-foreground">
                    Clínica Vida Saudável
                  </p>
                  <p className="text-elderly-base text-muted-foreground">
                    R. Dr. Nelson Araújo, 26 - Centro, Dourados - MS
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 text-elderly-base bg-transparent"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/search/R.+Dr.+Nelson+Araújo,+26+Centro,+Dourados+-+MS",
                        "_blank"
                      )
                    }
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Ver no Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
