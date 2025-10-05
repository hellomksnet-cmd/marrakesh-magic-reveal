import { useEffect, useState } from "react";
import { Heart, Book, Building2, Waves } from "lucide-react";
import marrakechImage from "@/assets/marrakech.jpg";
import fezImage from "@/assets/fez.jpg";
import casablancaImage from "@/assets/casablanca.jpg";
import chefchaouenImage from "@/assets/chefchaouen.jpg";

interface SlideProps {
  direction: "next" | "prev";
}

const cities = [
  {
    name: "Marrakech",
    vibe: "Electric & Exotic",
    color: "from-secondary to-accent",
    icon: Heart,
    highlights: ["Jemaa el-Fnaa Square", "Majorelle Garden", "Souk Shopping"],
    image: marrakechImage,
  },
  {
    name: "Fez",
    vibe: "Medieval & Mystical",
    color: "from-accent to-primary",
    icon: Book,
    highlights: ["World's Oldest University", "Tanneries", "Labyrinth Medina"],
    image: fezImage,
  },
  {
    name: "Casablanca",
    vibe: "Modern & Cosmopolitan",
    color: "from-primary to-secondary",
    icon: Building2,
    highlights: ["Hassan II Mosque", "Art Deco Architecture", "Beach Clubs"],
    image: casablancaImage,
  },
  {
    name: "Chefchaouen",
    vibe: "Dreamy & Peaceful",
    color: "from-primary via-accent to-primary",
    icon: Waves,
    highlights: ["Blue Streets", "Mountain Views", "Artisan Crafts"],
    image: chefchaouenImage,
  },
];

const CitiesSlide = ({ direction }: SlideProps) => {
  const [visible, setVisible] = useState(false);
  const [expandedCity, setExpandedCity] = useState<number | null>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden pattern-moroccan">
      <div className="relative z-10 w-full max-w-7xl px-8">
        <h2
          className={`font-playfair text-5xl md:text-6xl font-bold text-center mb-4 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Four Legendary Cities
        </h2>
        <p
          className={`text-center font-montserrat text-xl text-muted-foreground mb-12 transition-all duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Each with its own unique personality
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => {
            const Icon = city.icon;
            const isExpanded = expandedCity === index;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden border-2 rounded-2xl p-6 cursor-pointer transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${
                  isExpanded
                    ? "border-accent shadow-2xl shadow-accent/30 scale-105"
                    : "border-primary/20 hover:border-accent/50 hover:scale-105"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() =>
                  setExpandedCity(isExpanded ? null : index)
                }
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={city.image}
                    alt={`${city.name} cityscape`}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80" />
                </div>

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${city.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity`}
                />

                <div className="relative z-10">
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  
                  <h3 className="font-playfair text-3xl font-bold mb-2">
                    {city.name}
                  </h3>
                  
                  <p className="font-montserrat text-accent font-semibold mb-4">
                    {city.vibe}
                  </p>

                  <div className="space-y-2">
                    {city.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm font-montserrat"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-accent/30 animate-fade-in">
                      <p className="text-xs font-montserrat text-muted-foreground italic">
                        Click to explore more...
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CitiesSlide;
