import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WorkMethod from "@/components/WorkMethod";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="font-inter">
      <Hero />
      <About />
      <Services />
      <WorkMethod />
      <Contact />
      
      <footer className="bg-foreground text-background py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-inter text-sm opacity-80">
            © 2025 Marcela García AV. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
