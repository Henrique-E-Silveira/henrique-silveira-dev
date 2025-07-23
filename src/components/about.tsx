import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Heart, Users, Zap, Target, BookOpen } from "lucide-react"

const softSkills = [
  { icon: Target, name: "Organização", description: "Metodologia ágil e planejamento" },
  { icon: Heart, name: "Resiliência", description: "Persistência em desafios" },
  { icon: Users, name: "Comunicação", description: "Clareza e assertividade" },
  { icon: Zap, name: "Proatividade", description: "Iniciativa e antecipação" },
  { icon: Users, name: "Trabalho em equipe", description: "Colaboração efetiva" },
  { icon: BookOpen, name: "Aprendizado contínuo", description: "Sempre buscando evoluir" },
]

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className={`transition-all duration-1000 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Sobre Mim</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça minha trajetória e o que me motiva como desenvolvedor
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Story Section */}
            <div className="space-y-6">
              <Card className="card-hover border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Formação Acadêmica</h3>
                      <p className="text-muted-foreground">Minha jornada educacional</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary/30 pl-4">
                      <Badge variant="secondary" className="mb-2">Atual</Badge>
                      <h4 className="font-semibold">3º ano do Ensino Médio</h4>
                      <p className="text-sm text-muted-foreground">Em andamento</p>
                    </div>
                    
                    <div className="border-l-2 border-primary/30 pl-4">
                      <Badge variant="secondary" className="mb-2">2024</Badge>
                      <h4 className="font-semibold">Técnico em Desenvolvimento de Sistemas</h4>
                      <p className="text-sm text-muted-foreground">ETEC Prof. Basilides de Godoy</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Minha Motivação</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Aos 17 anos, descobri minha paixão pela programação através do curso técnico. 
                    O desenvolvimento back-end me fascina pela sua lógica, estrutura e o poder de 
                    criar soluções robustas que sustentam aplicações complexas.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Busco constantemente aprender novas tecnologias e aplicar boas práticas de 
                    desenvolvimento. Estou determinado a contribuir em uma equipe que valorize 
                    a inovação e o crescimento profissional mútuo.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Soft Skills Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
                <span className="gradient-text">Soft Skills</span>
              </h3>
              
              <div className="grid gap-4">
                {softSkills.map((skill, index) => (
                  <Card 
                    key={skill.name} 
                    className={`card-hover border-primary/10 transition-all duration-300 ${
                      inView ? "animate-slide-in-right" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <skill.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">{skill.name}</h4>
                          <p className="text-muted-foreground text-sm">{skill.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Languages Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">
              <span className="gradient-text">Idiomas</span>
            </h3>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-white">PT</span>
                </div>
                <h4 className="font-semibold">Português</h4>
                <p className="text-sm text-muted-foreground">Nativo</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-white">EN</span>
                </div>
                <h4 className="font-semibold">Inglês</h4>
                <p className="text-sm text-muted-foreground">Avançado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}