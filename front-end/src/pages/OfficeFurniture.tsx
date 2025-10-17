import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import officeImage from "@/assets/office-workspace.jpg";
import workstationImage from "@/assets/office-workstation.jpg";
import executiveImage from "@/assets/office-executive.jpg";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OfficeFurniture = () => {
  const navigate = useNavigate();

  const products = [
    {
      name: "Workstations",
      description: "Modular workstations designed for productivity and collaboration",
      image: workstationImage,
      features: ["Modular design", "Cable management", "Privacy panels", "Storage options"],
    },
    {
      name: "Executive Desks",
      description: "Premium executive furniture for leadership and management",
      image: executiveImage,
      features: ["Premium materials", "Large workspace", "Built-in storage", "Elegant design"],
    },
    {
      name: "Conference Tables",
      description: "Professional meeting tables for productive discussions",
      image: officeImage,
      features: ["Various sizes", "Cable ports", "Modern aesthetics", "Durable finish"],
    },
  ];

  const features = [
    "Ergonomic design principles",
    "Space-efficient layouts",
    "Premium quality materials",
    "Cable management systems",
    "Modular and scalable",
    "Quick installation",
    "Custom color options",
    "5-year warranty",
  ];

  const specifications = [
    { label: "Material", value: "Engineered Wood/Metal Frame" },
    { label: "Warranty", value: "5 Years" },
    { label: "Customization", value: "Available" },
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
            <img src={officeImage} alt="Office Furniture" className="w-full h-full object-cover" />
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
                Professional Grade
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Office Furniture
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Create productive and inspiring workspaces with our comprehensive range of office furniture solutions. From workstations to executive suites.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
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

        {/* Products Gallery */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product Range</h2>
              <p className="text-lg text-muted-foreground">Professional furniture solutions for every office need</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-glow transition-smooth">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-smooth"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Upgrade Your Office Space</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us for custom office furniture solutions tailored to your business needs
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

export default OfficeFurniture;
