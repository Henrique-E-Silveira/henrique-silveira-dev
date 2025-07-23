import { ArrowDown, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import henriqueProfile from "@/assets/henrique-profile.jpg"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="text-center animate-fade-in-up">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative inline-block">
              <img
                src={henriqueProfile}
                alt="Henrique Eduardo da Silveira"
                className="w-48 h-48 rounded-full mx-auto object-cover shadow-glow border-4 border-primary/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow">
            <span className="gradient-text">Henrique Eduardo</span>
            <br />
            <span className="text-foreground">da Silveira</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            17 anos • Desenvolvedor Back-end
          </p>

          {/* Impact Statement */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed text-foreground/90 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Apaixonado por desenvolvimento back-end e sempre em busca de{" "}
            <span className="gradient-text font-semibold">aprendizado contínuo</span>.
            <br />
            Pronto para contribuir como estagiário em projetos inovadores.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              onClick={() => window.open("https://www.linkedin.com/in/henrique-silveira-dev/", "_blank")}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button
              size="lg"
              className="rounded-full bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8"
              onClick={() => scrollToSection("projects")}
            >
              Ver Projetos
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 px-8"
              onClick={() => scrollToSection("contact")}
            >
              Entre em Contato
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10"
              onClick={() => scrollToSection("about")}
            >
              <ArrowDown className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}