import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Mail, Github, Linkedin, MapPin, Phone, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "henrique.silveira.dev@email.com",
    href: "mailto:henrique.silveira.dev@email.com",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/henrique-silveira-dev/",
    href: "https://www.linkedin.com/in/henrique-silveira-dev/",
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "/Henrique-E-Silveira",
    href: "https://github.com/Henrique-E-Silveira",
    color: "from-gray-600 to-gray-800"
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Paulo, Brasil",
    href: null,
    color: "from-green-500 to-green-600"
  }
]

export function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornarei em breve!",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gradient-subtle relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className={`transition-all duration-1000 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Vamos Conversar?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e conversas interessantes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  <span className="gradient-text">Entre em Contato</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Estou em busca de oportunidades de estágio em desenvolvimento back-end. 
                  Se você tem uma vaga ou quer apenas conversar sobre tecnologia, 
                  ficarei feliz em responder!
                </p>
              </div>

              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={info.label}
                    className={`card-hover border-primary/10 transition-all duration-300 ${
                      inView ? "animate-slide-in-right" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-lg">{info.label}</h4>
                          {info.href ? (
                            <a
                              href={info.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

            </div>

            {/* Contact Form */}
            <Card className="card-hover border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">
                  <span className="gradient-text">Envie uma Mensagem</span>
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu nome completo"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="seu@email.com"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Assunto da mensagem"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Sua mensagem..."
                      rows={5}
                      className="border-primary/20 focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}