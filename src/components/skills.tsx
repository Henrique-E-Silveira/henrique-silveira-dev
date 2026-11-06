import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getYearsStudying } from "@/lib/dates";
import { Code2, Database, Wrench, Layout } from "lucide-react";

const categories = [
  { title: "Back-end", icon: Code2, items: ["C#", "ASP.NET Core", "Entity Framework", "LINQ", "Python", "Node.js", "RESTful APIs", "PHP"] },
  { title: "Bancos de Dados", icon: Database, items: ["MySQL", "SQL Server", "SQL", "MongoDB"] },
  { title: "DevOps & Ferramentas", icon: Wrench, items: ["Git", "GitHub", "Docker", "RabbitMQ"] },
  { title: "Front-end", icon: Layout, items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Flutter"] },
];

export function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="skills" ref={ref} className="py-20 bg-gradient-subtle relative overflow-hidden">
      <div className="container-custom section-padding relative z-10">
        <div className={`transition-all duration-1000 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Habilidades</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Minha stack, organizada por área — com foco em back-end
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {categories.map((cat, i) => (
              <Card
                key={cat.title}
                className={`card-hover border-primary/10 ${i === 0 ? "md:col-span-2 border-primary/30" : ""}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <cat.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold">{cat.title}</h3>
                    {i === 0 && <Badge className="ml-auto">Foco principal</Badge>}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <Badge key={item} variant="outline" className="text-sm py-1 px-3 border-primary/20">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
            {[["20+", "Tecnologias"], [`${getYearsStudying()}+`, "Anos estudando"], ["∞", "Aprendizado"]].map(([n, l]) => (
              <div key={l}>
                <div className="text-3xl font-bold gradient-text">{n}</div>
                <p className="text-sm text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
