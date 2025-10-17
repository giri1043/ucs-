import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import corporateImage from "@/assets/corporate-cabin.jpg";
import officeImage from "@/assets/office-workspace.jpg";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CorporateInteriors = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      name: "Modular Cabins",
      description: "Private office cabins with glass partitions and modern finishes",
      features: ["Soundproof design", "Glass partitions", "Custom layouts", "Quick installation"],
    },
    {
      name: "Partition Systems",
      description: "Flexible partition solutions for space optimization",
      features: ["Modular design", "Easy reconfiguration", "Various materials", "Cost-effective"],
    },
    {
      name: "Reception Areas",
      description: "Impressive reception desks and waiting areas",
      features: ["Brand integration", "Modern aesthetics", "Durable materials", "Custom branding"],
    },
    {
      name: "Desking Systems",
      description: "Comprehensive desking solutions for open offices",
      features: ["Space optimization", "Cable management", "Collaborative design", "Scalable"],
    },
  ];

  const features = [
    "Turnkey interior solutions",
    "3D design visualization",
    "Project management",
    "On-time delivery",
    "Quality materials",
    "Professional installation",
    "Post-installation support",
    "Cost-effective solutions",
  ];

  const specifications = [
    { label: "Project Type", value: "Complete Office Interiors" },
    { label: "Materials", value: "Glass, Metal, Wood, Fabric" },
    { label: "Design Process", value: "3D Visualization Included" },
    { label: "Installation", value: "Professional Team" },
    { label: "Timeline", value: "Based on Project Size" },
    { label: "Warranty", value: "3-5 Years" },
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
            <img src={corporateImage} alt="Corporate Interiors" className="w-full h-full object-cover" />
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
                Turnkey Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Corporate Interiors
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Complete corporate interior solutions from design to execution. Transform your office into a professional, functional, and inspiring workspace.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Our Services?</h2>
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

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
              <p className="text-lg text-muted-foreground">Comprehensive interior solutions for modern corporate spaces</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((solution, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-glow transition-smooth">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{solution.name}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
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

        {/* Image Showcase */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <img src={corporateImage} alt="Corporate cabin" className="w-full h-[400px] object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-elegant">
                <img src={officeImage} alt="Office workspace" className="w-full h-[400px] object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Project Details</h2>
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
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Office?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a comprehensive interior solution tailored to your corporate needs
            </p>
            <Button onClick={scrollToContact} size="lg" className="gradient-accent text-lg px-8">
              Schedule Consultation
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CorporateInteriors;
