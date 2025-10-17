import { MessageSquare, Pencil, Cog, CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Consultation",
      description: "We begin by understanding your vision, space requirements, and budget to create a tailored solution.",
      number: "01",
    },
    {
      icon: Pencil,
      title: "Design",
      description: "Our experts create detailed 3D visuals and space planning to help you visualize the final result.",
      number: "02",
    },
    {
      icon: Cog,
      title: "Production",
      description: "In-house manufacturing with quality materials ensures precision and consistency in every piece.",
      number: "03",
    },
    {
      icon: CheckCircle,
      title: "Execution",
      description: "Professional on-site installation and finishing touches to bring your dream space to life.",
      number: "04",
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Vision to Reality
          </h2>
          <p className="text-lg text-muted-foreground">
            A streamlined process that ensures quality, transparency, and timely delivery at every stage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-card shadow-elegant flex items-center justify-center group hover:shadow-glow transition-smooth">
                  <div className="relative">
                    <step.icon className="text-primary" size={32} />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full gradient-accent text-white text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
