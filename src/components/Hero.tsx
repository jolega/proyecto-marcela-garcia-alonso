import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      {/* Fondo elegante con textura */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-beige-light to-accent">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--bronze)) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, hsl(var(--bronze-light)) 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
        <div className="mb-8 inline-block">
          <div className="text-6xl md:text-7xl lg:text-8xl font-playfair font-bold text-primary opacity-10 select-none">
            M/G
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-foreground mb-6 leading-tight">
          Marcela García AV
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-12 font-inter font-light max-w-3xl mx-auto leading-relaxed">
          Marketing Digital y Asistencia Virtual para negocios que quieren crecer con estrategia y orden.
        </p>
        
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Quiero mejorar mi negocio
        </Button>
      </div>
    </section>
  );
};

export default Hero;
