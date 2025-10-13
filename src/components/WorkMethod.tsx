const WorkMethod = () => {
  return (
    <section id="method" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-8">
          Mi forma de trabajar
        </h2>
        
        <div className="bg-card p-8 md:p-12 rounded-2xl shadow-sm border border-border">
          <h3 className="text-2xl font-playfair font-semibold text-primary mb-6">
            Trabajo contigo, no para ti.
          </h3>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-inter mb-4">
            Mi enfoque es colaborativo, transparente y flexible.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-inter mb-4">
            Analizo tus necesidades, propongo soluciones realistas y ejecuto con método y creatividad.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-inter">
            Formo parte de <span className="font-semibold text-primary">VA Everywhere</span>, una comunidad de asistentes virtuales profesionales que respalda cada proyecto con experiencia y compromiso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkMethod;
