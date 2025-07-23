import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"

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

          <div className="max-w-4xl mx-auto">
            <Card className="card-hover border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  <span className="gradient-text">Minha Motivação</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6 text-center">
                  Aos 17 anos, descobri minha paixão pela programação através do curso técnico em 
                  Desenvolvimento de Sistemas. O desenvolvimento back-end me fascina pela sua lógica, 
                  estrutura e o poder de criar soluções robustas que sustentam aplicações complexas.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg text-center">
                  Busco constantemente aprender novas tecnologias e aplicar boas práticas de 
                  desenvolvimento. Estou determinado a contribuir em uma equipe que valorize 
                  a inovação e o crescimento profissional mútuo.
                </p>
              </CardContent>
            </Card>
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