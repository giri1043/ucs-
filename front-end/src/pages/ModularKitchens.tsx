import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import acrylicKitchen from "@/assets/kitchen-acrylic.jpg";
import veneerKitchen from "@/assets/kitchen-veneer.jpg";
import decoFinish from "@/assets/decofinish.jpg";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ModularKitchens = () => {
  const navigate = useNavigate();

  const finishes = [
    {
      name: "Acrylic Finish",
      description: "High-gloss, reflective surface with excellent durability",
      image: acrylicKitchen,
      features: ["Scratch resistant", "Easy to clean", "Vibrant colors", "Modern look"],
    },
    {
      name: "Laminate Finish",
      description: "Cost-effective with wide variety of colors and patterns",
      image: heroKitchen,
      features: ["Budget-friendly", "Low maintenance", "Variety of designs", "Durable"],
    },
    {
      name: "Veneer Finish",
      description: "Natural wood appearance with premium aesthetic",
      image: veneerKitchen,
      features: ["Natural wood grain", "Premium feel", "Elegant look", "Long-lasting"],
    },
    {
      name: "Deco Finish",
      description: "Smooth, high-gloss painted surface for a luxurious look",
      image: decoFinish, // Replace with a deco finish image if available
      features: ["Seamless finish", "Rich color options", "Easy to clean", "Elegant shine"],
    }
  ];

  const features = [
    "Custom design tailored to your space",
    "Soft-close drawers and cabinets",
    "Premium hardware and fittings",
    "Modular and flexible layouts",
    "Water-resistant materials",
    "10-year warranty",
    "Professional installation",
    "After-sales support",
  ];

  const specifications = [
    { label: "Cabinet Material", value: "High-quality MDF/Plywood" },
    { label: "Shutter Thickness", value: "16-18mm" },
    { label: "Hardware", value: "Blum/Hettich/Hafele" },
    { label: "Countertop Options", value: "Granite, Quartz, Marble" },
    { label: "Warranty", value: "10 Years" },
    { label: "Installation Time", value: "20 Days" },
  ];

  const scrollToContact = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img src={heroKitchen} alt="Modular Kitchen" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              className="mb-8"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Button>

            <div className="max-w-3xl">
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                Premium Quality
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Modular Kitchens
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your kitchen into a beautiful, functional space with our premium modular solutions. Choose from multiple finishes and customize every detail.
              </p>
              <Button onClick={scrollToContact} size="lg" className="gradient-accent">
                Request Quote
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Our Modular Kitchens?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 bg-card p-4 rounded-xl shadow-sm">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Finishes Gallery */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Finishes</h2>
              <p className="text-lg text-muted-foreground">Choose from our premium range of finishes to match your style</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {finishes.map((finish, index) => (
                <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-glow transition-smooth">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={finish.image}
                      alt={finish.name}
                      className="w-full h-full object-cover hover:scale-105 transition-smooth"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{finish.name}</h3>
                    <p className="text-muted-foreground mb-4">{finish.description}</p>
                    <ul className="space-y-2">
                      {finish.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Specifications</h2>
            <div className="max-w-3xl mx-auto">
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {specifications.map((spec, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-4 border-b last:border-b-0"
                      >
                        <span className="font-semibold">{spec.label}</span>
                        <span className="text-muted-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Kitchen?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free consultation and personalized quote for your dream modular kitchen
            </p>
            <Button onClick={scrollToContact} size="lg" className="gradient-accent text-lg px-8">
              Get Free Consultation
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ModularKitchens;
