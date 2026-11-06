import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Database, Server, Code, Terminal } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Crypto Tracker API",
    description:
      "API de alta performance para monitoramento de criptomoedas em tempo real. Desenvolvida em C# com ASP.NET Core, integra-se à CoinGecko para fornecer cotações, variações de mercado e detalhes técnicos de ativos digitais.",
    technologies: ["C#", "ASP.NET Core", "REST Client", "JSON Serialization"],
    category: "Back-end",
    icon: Database,
    features: [
      "Integração com API externa (CoinGecko)",
      "Consumo Assíncrono de dados (Async/Await)",
      "Tratamento de erros e Status Codes REST",
      "Filtros de busca e ordenação de ativos",
    ],
    githubUrl: "https://github.com/Henrique-E-Silveira/API_Cripto",
    liveUrl: null,
    color: "from-orange-500 to-yellow-600",
  },
  {
    id: 2,
    title: "Crypto Dashboard UI",
    description:
      "Interface moderna para monitoramento de ativos digitais. Focado em UX/UI, o projeto apresenta um painel interativo com gráficos, listagem de ativos e conversão de moedas, simulando um ambiente real de trading.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
    category: "Front-end",
    icon: Code,
    features: [
      "Interface responsiva (Mobile First)",
      "Simulação de dados (Mocked Data) em tempo real",
      "Gráficos interativos de performance",
      "Design moderno com suporte a Dark Mode",
    ],
    githubUrl: "https://github.com/Henrique-E-Silveira/crypto-health-hub",
    liveUrl: "https://crypto-health-hub-five.vercel.app/",
    color: "from-blue-400 to-emerald-500",
  },
  {
    id: 3,
    title: "Projeto em Desenvolvimento",
    description:
      "Atualmente focado na construção de um sistema de microserviços com foco em alta disponibilidade. Explorando conceitos avançados de arquitetura, Docker e Mensageria (RabbitMQ).",
    technologies: ["Docker", "RabbitMQ", "Microservices"],
    category: "Estudo Ativo",
    icon: Terminal,
    features: [
      "Arquitetura de Microserviços",
      "Containerização com Docker",
      "Comunicação assíncrona",
      "Boas práticas de Clean Architecture",
    ],
    githubUrl: null as string | null,
    liveUrl: null,
    color: "from-gray-600 to-gray-400", 
  },
];

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
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
          <div
            className={`w-14 h-14 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center`}
          >
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
                <li
                  key={idx}
                  className="flex items-center text-sm text-muted-foreground"
                >
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
          {project.githubUrl ? (
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10"
            onClick={() => window.open(project.githubUrl!, "_blank")}
          >
            <Github className="w-4 h-4 mr-2" />
            Código
          </Button>
          ) : (
            <span className="flex-1 text-center text-sm text-muted-foreground py-2">Em breve no GitHub</span>
          )}
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
  );
}

export function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        <div
          className={`transition-all duration-1000 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
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
  );
}
