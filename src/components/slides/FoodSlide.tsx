import { useEffect, useState } from "react";
import { Coffee, UtensilsCrossed } from "lucide-react";
import teaImage from "@/assets/tea-ceremony.jpg";

interface SlideProps {
  direction: "next" | "prev";
}

const dishes = [
  { name: "Tagine", description: "Slow-cooked stew with aromatic spices" },
  { name: "Couscous", description: "Friday tradition with seven vegetables" },
  { name: "Pastilla", description: "Sweet & savory pigeon pie" },
  { name: "Harira", description: "Hearty soup to break Ramadan fast" },
];

const spices = ["Cumin", "Saffron", "Cinnamon", "Ginger", "Paprika", "Coriander"];

const FoodSlide = ({ direction }: SlideProps) => {
  const [visible, setVisible] = useState(false);
  const [teaPour, setTeaPour] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Split background */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Food */}
        <div className="relative bg-gradient-to-br from-secondary/30 to-accent/20" />
        
        {/* Right side - Tea */}
        <div className="relative">
          <img
            src={teaImage}
            alt="Traditional Moroccan mint tea ceremony with ornate teapot and pastries"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-background/80 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-8">
        <h2
          className={`font-playfair text-5xl md:text-6xl font-bold text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Culinary Journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Food Section */}
          <div
            className={`transition-all duration-1000 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <UtensilsCrossed className="w-10 h-10 text-secondary" />
              <h3 className="font-playfair text-3xl font-bold">
                Signature Dishes
              </h3>
            </div>

            <div className="space-y-4 mb-8">
              {dishes.map((dish, index) => (
                <div
                  key={index}
                  className="bg-card/70 backdrop-blur-sm border border-primary/20 rounded-xl p-4 hover-scale"
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <h4 className="font-playfair text-xl font-bold text-accent mb-1">
                    {dish.name}
                  </h4>
                  <p className="font-montserrat text-sm text-muted-foreground">
                    {dish.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Spice palette */}
            <div className="bg-gradient-to-r from-secondary/20 to-accent/20 backdrop-blur-sm border border-accent/30 rounded-xl p-4">
              <p className="font-montserrat text-sm font-semibold mb-2">
                Spice Palette:
              </p>
              <div className="flex flex-wrap gap-2">
                {spices.map((spice, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-card/70 border border-accent/30 rounded-full text-xs font-montserrat"
                  >
                    {spice}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tea Ceremony Section */}
          <div
            className={`transition-all duration-1000 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="w-10 h-10 text-accent" />
              <h3 className="font-playfair text-3xl font-bold">
                Tea Ceremony
              </h3>
            </div>

            <div className="bg-card/70 backdrop-blur-sm border border-primary/20 rounded-xl p-6 mb-6">
              <p className="font-montserrat text-lg mb-4">
                Moroccan mint tea is more than a beverage - it's a ritual of hospitality and friendship.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent font-bold">
                    1
                  </div>
                  <p className="font-montserrat text-sm">
                    Green tea with fresh mint leaves
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent font-bold">
                    2
                  </div>
                  <p className="font-montserrat text-sm">
                    Sugar added generously (traditional style)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent font-bold">
                    3
                  </div>
                  <p className="font-montserrat text-sm">
                    Poured from height for foam and aeration
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border-2 border-accent/40 rounded-xl p-4 text-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setTeaPour(!teaPour)}
            >
              <p className="font-playfair text-lg font-semibold">
                {teaPour ? "🫖 Pouring..." : "Click for virtual tea pour"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodSlide;
