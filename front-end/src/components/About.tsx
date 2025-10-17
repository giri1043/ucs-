import { CheckCircle2 } from "lucide-react";

const About = () => {
  const features = [
    "20+ years of industry expertise",
    "100+ completed projects",
    "Quality materials & premium finishes",
    "Timely delivery & installation",
    "Custom design solutions",
    "State-of-the-art manufacturing",
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Crafting Exceptional Spaces Since 2000
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              UCS Modulars is a Chennai-based interior & modular furniture company specializing in modular kitchens, office workstations, and modern furniture solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over two decades of expertise, we deliver innovative, functional, and aesthetic interiors for homes and businesses across Chennai and beyond.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-card p-8 rounded-2xl shadow-elegant hover:shadow-glow transition-smooth">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Design Options</div>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-elegant hover:shadow-glow transition-smooth">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-card p-8 rounded-2xl shadow-elegant hover:shadow-glow transition-smooth">
                <div className="text-4xl font-bold text-primary mb-2">10 Year</div>
                <div className="text-muted-foreground">Warranty</div>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-elegant hover:shadow-glow transition-smooth">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
