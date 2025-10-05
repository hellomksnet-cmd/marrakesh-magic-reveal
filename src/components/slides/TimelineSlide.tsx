import { useEffect, useState } from "react";
import { Crown } from "lucide-react";

interface SlideProps {
  direction: "next" | "prev";
}

const dynasties = [
  { name: "Idrisid", year: 788, achievement: "Founded Fez, established Islamic Morocco" },
  { name: "Almoravid", year: 1040, achievement: "Built Marrakech, united North Africa" },
  { name: "Almohad", year: 1121, achievement: "Golden age of architecture & science" },
  { name: "Marinid", year: 1244, achievement: "Centers of learning, madrasas" },
  { name: "Saadi", year: 1549, achievement: "Defeated Portuguese, cultural renaissance" },
  { name: "Alaouite", year: 1631, achievement: "Current dynasty, modern Morocco" },
];

const TimelineSlide = ({ direction }: SlideProps) => {
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
          1,200 Years of Royal Dynasties
        </h2>
        <p
          className={`text-center font-montserrat text-xl text-muted-foreground mb-16 transition-all duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          A continuous thread of culture and tradition
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-16 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary hidden md:block" />

          {/* Dynasty cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {dynasties.map((dynasty, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex justify-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-accent border-4 border-background shadow-lg" />
                </div>

                {/* Card */}
                <div
                  className={`bg-card/70 backdrop-blur-sm border-2 rounded-xl p-4 hover-scale cursor-pointer transition-all ${
                    hoveredIndex === index
                      ? "border-accent shadow-xl shadow-accent/20 -translate-y-2"
                      : "border-primary/20"
                  }`}
                >
                  <Crown className="w-8 h-8 text-accent mb-2" />
                  <h3 className="font-playfair text-2xl font-bold mb-1">
                    {dynasty.year}
                  </h3>
                  <p className="font-montserrat font-semibold text-primary mb-2">
                    {dynasty.name}
                  </p>
                  <p
                    className={`font-montserrat text-sm text-muted-foreground transition-all ${
                      hoveredIndex === index ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {dynasty.achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSlide;
