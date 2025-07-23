import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  { name: "HTML", level: 98, color: "from-orange-500 to-red-500" },
  { name: "CSS", level: 97, color: "from-blue-500 to-blue-600" },
  { name: "C#", level: 90, color: "from-purple-500 to-purple-600" },
  { name: "JavaScript", level: 83, color: "from-yellow-500 to-orange-500" },
  { name: "MySQL", level: 80, color: "from-blue-600 to-blue-700" },
  { name: "SQL Server", level: 70, color: "from-red-600 to-red-700" },
  { name: "Flutter", level: 60, color: "from-cyan-400 to-blue-500" },
]

interface SkillBarProps {
  skill: typeof skills[0]
  index: number
  inView: boolean
}

function SkillBar({ skill, index, inView }: SkillBarProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0)

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level)
      }, index * 200)
      return () => clearTimeout(timer)
    }
  }, [inView, skill.level, index])

  return (
    <Card className="card-hover border-primary/10">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">{skill.name}</h3>
          <span className="text-2xl font-bold gradient-text">{skill.level}%</span>
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
            {skill.level >= 70 && skill.level < 90 && "Intermediário"}
            {skill.level < 70 && "Básico"}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

export function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

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
        <div className={`transition-all duration-1000 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
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
                  Embora tenha conhecimento em front-end, minha paixão está no desenvolvimento 
                  back-end. Adoro trabalhar com lógica de negócio, APIs, bancos de dados e 
                  arquitetura de sistemas.
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
  )
}