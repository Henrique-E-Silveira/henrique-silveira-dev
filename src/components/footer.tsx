import { Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border/50 relative">
      <div className="container-custom section-padding">
        <div className="py-12">
          {/* Back to top button */}
          <div className="flex justify-center mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </div>

          {/* Main content */}
          <div className="text-center space-y-6">
            {/* Logo */}
            <div className="flex justify-center">
              <span className="text-3xl font-bold gradient-text">HE</span>
            </div>

            {/* Quote */}
            <blockquote className="text-lg italic text-muted-foreground max-w-md mx-auto">
              "O código é poesia em movimento, transformando ideias em realidade digital."
            </blockquote>

            {/* Copyright */}
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} Henrique Eduardo da Silveira</span>
              <span>•</span>
              <span className="flex items-center">
                Feito com <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" /> e muito código
              </span>
            </div>

            {/* Availability status */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full border border-green-500/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Disponível para estágio</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}