import officeImage from "@/assets/office-workspace.jpg";

const Portfolio = () => {
  const clients = [
    "SRM University",
    "Rane BHEL",
    "Baashyaam",
    "Velammal Bodhi Campus",
    "Guardian",
    "CRSE",
    "Cyble",
    "Casagrand Madras Regency Hotel",
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-muted-foreground">
            We've had the privilege of transforming spaces for prestigious clients across Chennai
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-smooth">
            <img
              src={officeImage}
              alt="Modern office workspace"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Corporate Excellence</h3>
              <p className="text-white/90">Modern office solutions delivered with precision</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Our Esteemed Clients</h3>
            <div className="grid grid-cols-2 gap-4">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-sm hover:shadow-elegant transition-smooth border-2 border-transparent hover:border-primary/30"
                >
                  <p className="font-semibold text-foreground">{client}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Our commitment to quality and innovation has made us the preferred choice for educational institutions, corporate offices, and hospitality projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
