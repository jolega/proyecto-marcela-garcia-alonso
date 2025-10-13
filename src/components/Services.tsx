import { Instagram, Palette, FolderKanban, Lightbulb, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Instagram,
    title: "Creación de contenido y redes sociales",
    description: "Construyo presencia digital con contenido coherente, estético y con propósito."
  },
  {
    icon: Palette,
    title: "Diseño visual y materiales de comunicación",
    description: "Refuerzo tu marca con piezas gráficas profesionales y consistentes."
  },
  {
    icon: FolderKanban,
    title: "Apoyo administrativo integral",
    description: "Te ayudo a gestionar tareas, agendas y procesos para liberar tu tiempo."
  },
  {
    icon: Lightbulb,
    title: "Estrategias digitales personalizadas",
    description: "Creamos juntos un plan flexible para alcanzar tus objetivos online."
  },
  {
    icon: Bot,
    title: "Automatización e inteligencia artificial",
    description: "Implemento herramientas que simplifican tu negocio y multiplican tu productividad."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-beige-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            ¿Qué puedo hacer por ti?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border group"
            >
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-lg font-inter font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
