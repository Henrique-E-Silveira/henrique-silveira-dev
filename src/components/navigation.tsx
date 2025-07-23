import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { name: "Início", href: "#home" },
  { name: "Contato", href: "#contact" },
  { name: "Sobre", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Projetos", href: "#projects" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1))
        const currentSection = sections.find(section => {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            return rect.top <= 80 && rect.bottom >= 80
          }
          return false
        })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-custom section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold gradient-text">
              HE
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`nav-link px-3 py-2 text-sm font-medium ${
                    activeSection === item.href.slice(1)
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-effect rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left rounded-md transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-primary bg-accent/20"
                      : "text-foreground hover:text-primary hover:bg-accent/10"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}