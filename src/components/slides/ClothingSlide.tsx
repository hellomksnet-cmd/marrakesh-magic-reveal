import { useEffect, useState } from "react";
import { Shirt, Sparkles, Users, ShoppingBag } from "lucide-react";
import clothingImage from "@/assets/traditional-clothing.jpg";

interface SlideProps {
  direction: "next" | "prev";
}

const garments = [
  {
    name: "Djellaba",
    icon: Shirt,
    description: "Traditional loose-fitting robe with hood, worn by both men and women",
    occasions: "Daily wear, special occasions",
    colors: "Various colors, often earth tones or vibrant hues",
  },
  {
    name: "Kaftan",
    icon: Sparkles,
    description: "Elegant long dress with intricate embroidery and beading",
    occasions: "Weddings, celebrations, formal events",
    colors: "Gold, silver, jewel tones with ornate details",
  },
  {
    name: "Takchita",
    icon: Users,
    description: "Two-piece formal dress, the ultimate in Moroccan elegance",
    occasions: "Weddings, royal events, grand celebrations",
    colors: "Rich fabrics with elaborate embellishments",
  },
  {
    name: "Babouche",
    icon: ShoppingBag,
    description: "Traditional leather slippers, pointed and often embroidered",
    occasions: "Indoor and outdoor wear",
    colors: "Natural leather, dyed colors, decorative patterns",
  },
];

const ClothingSlide = ({ direction }: SlideProps) => {
  const [visible, setVisible] = useState(false);
  const [selectedGarment, setSelectedGarment] = useState(0);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={clothingImage}
          alt="Traditional Moroccan clothing and textiles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-8">
        <h2
          className={`font-playfair text-5xl md:text-6xl font-bold text-center mb-4 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Traditional Attire
        </h2>
        <p
          className={`text-center font-montserrat text-2xl text-accent mb-16 transition-all duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Centuries of craftsmanship and elegance
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {garments.map((garment, index) => {
            const Icon = garment.icon;
            const isSelected = selectedGarment === index;

            return (
              <div
                key={index}
                className={`group relative bg-card/70 backdrop-blur-sm border-2 rounded-2xl p-8 cursor-pointer transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${
                  isSelected
                    ? "border-accent shadow-2xl shadow-accent/30 scale-105"
                    : "border-primary/20 hover:border-accent/50 hover:scale-105"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => setSelectedGarment(index)}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex-shrink-0">
                    <Icon className="w-10 h-10 text-accent" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-playfair text-3xl font-bold mb-3">
                      {garment.name}
                    </h3>
                    
                    <p className="font-montserrat text-base text-muted-foreground mb-4">
                      {garment.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-accent font-semibold text-sm font-montserrat">
                          Worn for:
                        </span>
                        <span className="text-sm font-montserrat text-muted-foreground">
                          {garment.occasions}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-accent font-semibold text-sm font-montserrat">
                          Typically:
                        </span>
                        <span className="text-sm font-montserrat text-muted-foreground">
                          {garment.colors}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

        {/* Info box */}
        <div
          className={`bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border-2 border-accent/40 rounded-xl p-8 text-center transition-all duration-1000 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
          <p className="font-playfair text-2xl font-semibold mb-3">
            A Living Tradition
          </p>
          <p className="font-montserrat text-lg text-muted-foreground max-w-3xl mx-auto">
            Moroccan clothing reflects centuries of cultural exchange between Arab, Berber, and Andalusian influences. 
            Each piece is a work of art, often hand-embroidered and passed down through generations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClothingSlide;
