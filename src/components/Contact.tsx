import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Por ahora, simularemos el envío
    // TODO: Implementar envío real con Lovable Cloud
    toast({
      title: "¡Mensaje enviado!",
      description: "Me pondré en contacto contigo pronto.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola Marcela, vi tu web y quiero más información sobre tus servicios.");
    window.open(`https://wa.me/34667894213?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-beige-light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Hablemos
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 font-inter max-w-3xl mx-auto leading-relaxed">
            ¿Te gustaría delegar tareas, mejorar tu estrategia digital o simplemente ganar tiempo?
          </p>
          <p className="text-lg md:text-xl text-foreground/80 font-inter max-w-3xl mx-auto leading-relaxed mt-2">
            Estoy aquí para ayudarte a hacerlo realidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 animate-fade-in-up">
          <div className="space-y-6">
            {/* Botón de WhatsApp destacado */}
            <Button
              type="button"
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-inter font-medium py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Habla conmigo por WhatsApp
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-beige-light px-4 text-muted-foreground font-inter">o escríbeme aquí</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-border font-inter"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border font-inter"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background border-border font-inter resize-none"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium py-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Enviar mensaje
              </Button>
            </form>

            <p className="text-sm text-center text-muted-foreground font-inter mt-4">
              ¿Prefieres hablar directamente? <button onClick={handleWhatsApp} className="text-primary hover:underline font-medium">Conversemos por WhatsApp</button>
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-foreground mb-1">Email</h3>
                  <a 
                    href="mailto:marcelagarciaav@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors font-inter"
                  >
                    marcelagarciaav@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-foreground mb-1">Teléfono</h3>
                  <a 
                    href="tel:667894213" 
                    className="text-muted-foreground hover:text-primary transition-colors font-inter"
                  >
                    + 34 667 894 213
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-foreground mb-1">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/marcelagarciaalonso" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors font-inter break-all"
                  >
                    linkedin.com/in/marcelagarciaalonso
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
