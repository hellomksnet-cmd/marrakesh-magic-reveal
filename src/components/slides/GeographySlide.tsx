import { useEffect, useState } from "react";
import { Mountain, Waves, Sun, Trees } from "lucide-react";
import saharaImage from "@/assets/sahara-desert.jpg";
import atlasImage from "@/assets/atlas-mountains.jpg";

interface SlideProps {
  direction: "next" | "prev";
}

const regions = [
  {
    name: "Sahara Desert",
    icon: Sun,
    activities: ["Camel Trekking", "Stargazing", "Sand Surfing"],
    description: "Endless golden dunes under infinite skies",
  },
  {
    name: "Atlas Mountains",
    icon: Mountain,
    activities: ["Hiking", "Skiing", "Berber Villages"],
    description: "Snow-capped peaks and traditional mountain life",
  },
  {
    name: "Atlantic Coast",
    icon: Waves,
    activities: ["Surfing", "Beach Life", "Fresh Seafood"],
    description: "Perfect waves and coastal charm",
  },
  {
    name: "Todra Gorge",
    icon: Trees,
    activities: ["Rock Climbing", "Photography", "Oasis Walks"],
    description: "Dramatic canyons and hidden oases",
  },
];

const GeographySlide = ({ direction }: SlideProps) => {
  const [visible, setVisible] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(0);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0">
        <img
          src={selectedRegion === 0 ? saharaImage : atlasImage}
          alt="Moroccan landscape"
          className="w-full h-full object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/60" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-8">
        <h2
          className={`font-playfair text-5xl md:text-6xl font-bold text-center mb-4 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Geographic Diversity
        </h2>
        <p
          className={`text-center font-montserrat text-2xl text-accent mb-12 transition-all duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Ski in the morning, surf in the afternoon
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, index) => {
            const Icon = region.icon;
            const isSelected = selectedRegion === index;

            return (
              <div
                key={index}
                className={`bg-card/70 backdrop-blur-sm border-2 rounded-2xl p-6 cursor-pointer transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${
                  isSelected
                    ? "border-accent shadow-2xl shadow-accent/30 scale-105"
                    : "border-primary/20 hover:border-accent/50 hover:scale-105"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedRegion(index)}
              >
                <Icon className="w-12 h-12 text-accent mb-4" />
                
                <h3 className="font-playfair text-2xl font-bold mb-2">
                  {region.name}
                </h3>
                
                <p className="font-montserrat text-sm text-muted-foreground mb-4 italic">
                  {region.description}
                </p>

                <div className="space-y-2">
                  {region.activities.map((activity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm font-montserrat"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-12 text-center bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-accent/30 rounded-xl p-6 transition-all duration-1000 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="font-playfair text-xl font-semibold">
            From snow-covered peaks to sun-soaked beaches - all in one country
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeographySlide;
