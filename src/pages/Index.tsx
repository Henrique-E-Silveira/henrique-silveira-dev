import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Contact />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
