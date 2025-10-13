import marcelaProfile from "@/assets/marcela-profile.png";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute -left-8 top-0 text-9xl font-playfair font-bold text-bronze opacity-5 select-none hidden md:block">
            M/G
          </div>
          
          <div className="relative z-10 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-8">
              ¿Quién soy?
            </h2>
            
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-sm border border-border">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="flex-shrink-0">
                  <img 
                    src={marcelaProfile} 
                    alt="Marcela García - Asistente Virtual" 
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-bronze/20"
                  />
                </div>
                
                <div className="flex-1">
                  <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-inter mb-4">
                    Soy Marcela García, asistente virtual especializada en marketing digital y apoyo administrativo.
                  </p>
                  <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-inter mb-4">
                    Ayudo a profesionales y pequeñas empresas a ahorrar tiempo, mejorar su presencia online y optimizar su día a día con estrategia y organización.
                  </p>
                  <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-inter">
                    Me gusta que cada proyecto refleje lo mejor de tu marca, sin complicaciones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
