import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "HTML", level: 98, color: "from-orange-500 to-orange-600" },
  { name: "CSS", level: 95, color: "from-blue-500 to-blue-600" },
  { name: "JavaScript", level: 78, color: "from-yellow-400 to-yellow-500" },
  { name: "C#", level: 70, color: "from-purple-600 to-purple-700" },
  { name: "Node.js", level: 45, color: "from-green-600 to-green-700" },
  { name: "React", level: 60, color: "from-cyan-400 to-cyan-500" },
  { name: "TypeScript", level: 55, color: "from-blue-600 to-indigo-600" },
  { name: "Python", level: 30, color: "from-blue-700 to-yellow-500" },
  { name: "PHP", level: 20, color: "from-indigo-400 to-indigo-500" },
  { name: "Git", level: 60, color: "from-red-500 to-red-600" },
  { name: "Github", level: 90, color: "from-gray-600 to-gray-400" },
  { name: "MongoDB", level: 20, color: "from-emerald-500 to-emerald-600" },
  { name: "MySQL", level: 75, color: "from-sky-600 to-blue-700" },
  { name: "SQL Server", level: 65, color: "from-red-700 to-red-800" },
  { name: "Flutter", level: 30, color: "from-blue-400 to-cyan-400" },
];

interface SkillBarProps {
  skill: (typeof skills)[0];
  index: number;
  inView: boolean;
}

function SkillBar({ skill, index, inView }: SkillBarProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [inView, skill.level, index]);

  return (
    <Card className="card-hover border-primary/10">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">{skill.name}</h3>
          <span className="text-2xl font-bold gradient-text">
            {skill.level}%
          </span>
        </div>

        <div className="skill-bar">
          <div
            className={`skill-progress bg-gradient-to-r ${skill.color}`}
            style={{
              width: `${animatedLevel}%`,
              transitionDelay: `${index * 200}ms`,
            }}
          />
        </div>

        {/* Level indicator */}
        <div className="mt-2 text-right">
          <span className="text-sm text-muted-foreground">
            {skill.level >= 90 && "Avançado"}
            {skill.level >= 60 && skill.level < 90 && "Intermediário"}
            {skill.level < 60 && "Básico"}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gradient-subtle relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div
          className={`transition-all duration-1000 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Habilidades</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tecnologias que domino e meu nível de experiência em cada uma
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                index={index}
                inView={inView}
              />
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="card-hover border-primary/20 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="gradient-text">Foco em Back-end</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Embora tenha conhecimento em front-end, minha paixão está no
                  desenvolvimento back-end. Adoro trabalhar com lógica de
                  negócio, APIs, bancos de dados e arquitetura de sistemas.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-white">7+</span>
                    </div>
                    <h4 className="font-semibold">Tecnologias</h4>
                    <p className="text-sm text-muted-foreground">Dominadas</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-white">2+</span>
                    </div>
                    <h4 className="font-semibold">Anos</h4>
                    <p className="text-sm text-muted-foreground">Estudando</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-white">∞</span>
                    </div>
                    <h4 className="font-semibold">Aprendizado</h4>
                    <p className="text-sm text-muted-foreground">Contínuo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
