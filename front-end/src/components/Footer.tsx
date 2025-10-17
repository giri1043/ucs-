const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">UCS</span> MODULARS
            </h3>
            <p className="text-background/80 leading-relaxed">
              Transforming spaces with premium modular solutions. 20+ years of excellence in Chennai.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-background/80 hover:text-primary transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-primary transition-smooth">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-background/80 hover:text-primary transition-smooth">
                  Process
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-background/80 hover:text-primary transition-smooth">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#modular-kitchens">Modular Kitchens</a></li>
              <li><a href="#office-furniture">Office Furniture</a></li>
              <li><a href="#corporate-interiors">Corporate Interiors</a></li>
              <li><a href="#chairs-seating">Chairs & Seating</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/80">
          <p>&copy; {new Date().getFullYear()} UCS Modulars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
