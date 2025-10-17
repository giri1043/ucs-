import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import chairsImage from "@/assets/chairs-collection.jpg";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Chairs = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Ergonomic Chairs",
      description: "Health-focused seating with adjustable features",
      features: ["Lumbar support", "Adjustable armrests", "Breathable mesh", "Height adjustment"],
      price: "Starting from ₹8,000",
    },
    {
      name: "Executive Chairs",
      description: "Premium leather chairs for executives",
      features: ["Leather upholstery", "High back design", "Premium cushioning", "Elegant finish"],
      price: "Starting from ₹15,000",
    },
    {
      name: "Task Chairs",
      description: "Versatile chairs for everyday office use",
      features: ["Durable construction", "Swivel base", "Easy mobility", "Affordable"],
      price: "Starting from ₹5,000",
    },
    {
      name: "Visitor Chairs",
      description: "Comfortable seating for guests and meetings",
      features: ["Stackable design", "Easy to clean", "Multiple colors", "Space-saving"],
      price: "Starting from ₹3,500",
    },
  ];

  const features = [
    "Ergonomic design certified",
    "Durable materials",
    "Easy maintenance",
    "Multiple color options",
    "Comfortable cushioning",
    "Warranty included",
    "Bulk order discounts",
    "Quick delivery",
  ];

  const specifications = [
    { label: "Material Options", value: "Mesh, Fabric, Leather, Plastic" },
    { label: "Weight Capacity", value: "Up to 120 kg" },
    { label: "Adjustable Features", value: "Height, Armrest, Lumbar" },
    { label: "Base Type", value: "Nylon/Metal with Casters" },
    { label: "Warranty", value: "2-5 Years" },
    { label: "Customization", value: "Color and Material Options" },
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
            <img src={chairsImage} alt="Office Chairs" className="w-full h-full object-cover" />
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
                Comfort & Style
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Office Chairs & Seating
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover our extensive range of ergonomic and stylish office chairs. From executive leather chairs to task seating, we have the perfect solution for every workspace.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Chair Features</h2>
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

        {/* Categories Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Chair Categories</h2>
              <p className="text-lg text-muted-foreground">Find the perfect seating solution for your needs</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-glow transition-smooth">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{category.description}</p>
                    <ul className="space-y-2 mb-4">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t">
                      <p className="text-sm font-semibold text-primary">{category.price}</p>
                    </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Seating Solutions?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us for bulk orders and customized seating solutions for your office
            </p>
            <Button onClick={scrollToContact} size="lg" className="gradient-accent text-lg px-8">
              Get Bulk Quote
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Chairs;
