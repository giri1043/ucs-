import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoSvg from "@/assets/logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img src={logoSvg} alt="UCS Modulars Logo" className="h-12 w-auto animate-fade-in" />
            <div className="text-2xl font-bold animate-fade-in">
              <span className="text-primary">UCS</span>
              <span className="text-foreground"> MODULARS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Portfolio
            </button>
            <Button onClick={() => scrollToSection("contact")} className="gradient-accent">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth"
            >
              Portfolio
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full gradient-accent">
              Get Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
