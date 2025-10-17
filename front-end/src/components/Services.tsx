import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChefHat, Briefcase, Building2, Armchair, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: ChefHat,
      title: "Modular Kitchens",
      description: "Premium kitchen solutions with Acrylic, Laminate, Veneer, and Lacquer Glass finishes",
      features: ["Custom designs", "Premium hardware", "Soft-close mechanisms", "Warranty included"],
      link: "/modular-kitchens",
    },
    {
      icon: Briefcase,
      title: "Office Furniture",
      description: "Professional workstations, conference tables, and manager desks for modern offices",
      features: ["Ergonomic design", "Space optimization", "Cable management", "Modular flexibility"],
      link: "/office-furniture",
    },
    {
      icon: Building2,
      title: "Corporate Interiors",
      description: "Complete office solutions including modular cabins, partitions, and desking systems",
      features: ["Turnkey projects", "Quick installation", "Scalable solutions", "Professional aesthetics"],
      link: "/corporate-interiors",
    },
    {
      icon: Armchair,
      title: "Chairs & Seating",
      description: "Wide range of ergonomic chairs including plastic, cushioned, and premium options",
      features: ["Comfort focused", "Durable materials", "Style variety", "Affordable pricing"],
      link: "/chairs-seating",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Interior Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to completion, we offer comprehensive modular solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-smooth border-2 hover:border-primary/50"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => {
                    window.scrollTo(0, 0); // Scrolls to top
                    navigate(service.link);
                  }}
                  variant="ghost"
                  className="w-full mt-4 group-hover:text-primary"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
