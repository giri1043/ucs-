import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-kitchen.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern modular kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm animate-fade-in">
            20+ Years of Excellence
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up animation-delay-100">
            We Shape Your{" "}
            <span className="text-gray-900 animate-pulse">
              Dreams
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-slide-up animation-delay-200">
            Premium modular kitchens, office furniture, and corporate interiors crafted with precision and passion in Chennai.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-300">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="gradient-accent text-lg px-8 py-6 shadow-elegant hover:shadow-glow transition-smooth animate-pulse"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 animate-slide-right" size={20} />
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2"
            >
              Explore Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">20+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
