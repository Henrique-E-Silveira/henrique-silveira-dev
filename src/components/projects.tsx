import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Database, Server, Code } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Sistema de Gerenciamento Escolar",
    description: "API REST completa para gestão de estudantes, professores e notas. Desenvolvida em C# com ASP.NET Core, implementando autenticação JWT, CRUD completo e relatórios dinâmicos.",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "Entity Framework"],
    category: "Back-end",
    icon: Database,
    features: [
      "Autenticação e autorização com JWT",
      "CRUD completo de entidades",
      "Relatórios em PDF",
      "API RESTful documentada"
    ],
    githubUrl: "https://github.com/Henrique-E-Silveira",
    liveUrl: null,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 2,
    title: "E-commerce Backend",
    description: "Sistema robusto de e-commerce com carrinho de compras, processamento de pedidos e gestão de estoque. Implementado com padrões de arquitetura limpa e princípios SOLID.",
    technologies: ["C#", "MySQL", "ASP.NET Web API", "Swagger"],
    category: "Back-end",
    icon: Server,
    features: [
      "Gestão de produtos e categorias",
      "Carrinho de compras persistente",
      "Sistema de pedidos",
      "Controle de estoque automatizado"
    ],
    githubUrl: "https://github.com/Henrique-E-Silveira",
    liveUrl: null,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 3,
    title: "App Mobile Flutter",
    description: "Aplicativo móvel de lista de tarefas com sincronização em nuvem. Interface intuitiva com Material Design e integração com backend próprio desenvolvido em C#.",
    technologies: ["Flutter", "Dart", "Firebase", "C# API"],
    category: "Mobile",
    icon: Code,
    features: [
      "Sincronização em tempo real",
      "Interface Material Design",
      "Notificações push",
      "Modo offline"
    ],
    githubUrl: "https://github.com/Henrique-E-Silveira",
    liveUrl: null,
    color: "from-cyan-400 to-blue-500"
  }
]

interface ProjectCardProps {
  project: typeof projects[0]
  index: number
  inView: boolean
}

function ProjectCard({ project, index, inView }: ProjectCardProps) {
  return (
    <Card 
      className={`card-hover border-primary/10 h-full transition-all duration-500 ${
        inView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <CardContent className="p-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className={`w-14 h-14 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center`}>
            <project.icon className="w-7 h-7 text-white" />
          </div>
          <Badge variant="secondary" className="ml-4">
            {project.category}
          </Badge>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
              Principais Funcionalidades
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
              Tecnologias
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-3 pt-4 border-t border-border/50">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10"
            onClick={() => window.open(project.githubUrl, "_blank")}
          >
            <Github className="w-4 h-4 mr-2" />
            Código
          </Button>
          {project.liveUrl && (
            <Button
              size="sm"
              className="flex-1 bg-gradient-primary hover:shadow-glow"
              onClick={() => window.open(project.liveUrl, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className={`transition-all duration-1000 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Projetos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi para aplicar meus conhecimentos
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                inView={inView}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}