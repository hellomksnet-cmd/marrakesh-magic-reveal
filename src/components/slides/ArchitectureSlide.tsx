import { useEffect, useState } from "react";
import architectureImage from "@/assets/architecture.jpg";

interface SlideProps {
  direction: "next" | "prev";
}

const sites = [
  "Medina of Fez",
  "Ksar of Ait-Ben-Haddou",
  "Historic City of Meknes",
  "Archaeological Site of Volubilis",
  "Medina of Tétouan",
  "Medina of Essaouira",
  "Portuguese City of Mazagan",
  "Medina of Marrakech",
  "Rabat, Modern Capital",
];

const ArchitectureSlide = ({ direction }: SlideProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={architectureImage}
          alt="Magnificent Moroccan zellige tilework and ornate architectural details"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-8">
        <h2
          className={`font-playfair text-5xl md:text-6xl font-bold text-center mb-4 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Architectural Masterpieces
        </h2>
        <p
          className={`text-center font-montserrat text-2xl text-accent mb-12 transition-all duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          9 UNESCO World Heritage Sites
        </p>

        {/* Grid of sites */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {sites.map((site, index) => (
            <div
              key={index}
              className={`group bg-card/60 backdrop-blur-sm border border-primary/20 rounded-xl p-6 text-center hover-scale cursor-pointer transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <p className="font-montserrat font-semibold group-hover:text-accent transition-colors">
                {site}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight box */}
        <div
          className={`bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-accent/30 rounded-xl p-8 text-center transition-all duration-1000 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="font-playfair text-2xl font-semibold text-accent mb-2">
            Zellige Tilework
          </p>
          <p className="font-montserrat text-lg text-muted-foreground">
            Intricate geometric patterns that have mesmerized visitors for centuries
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureSlide;
