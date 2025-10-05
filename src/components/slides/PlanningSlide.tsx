import { useEffect, useState } from "react";
import { MapPin, Calendar, Backpack, Volume2 } from "lucide-react";

interface SlideProps {
  direction: "next" | "prev";
}

const seasons = [
  { name: "Spring", months: "Mar-May", perfect: "Flowers bloom, perfect weather", color: "from-green-400/20 to-accent/20" },
  { name: "Summer", months: "Jun-Aug", perfect: "Beach season, festivals", color: "from-accent/20 to-secondary/20" },
  { name: "Fall", months: "Sep-Nov", perfect: "Harvest time, ideal temps", color: "from-secondary/20 to-primary/20" },
  { name: "Winter", months: "Dec-Feb", perfect: "Ski season, fewer crowds", color: "from-primary/20 to-accent/20" },
];

const phrases = [
  { arabic: "السلام عليكم", english: "As-salamu alaykum", meaning: "Peace be upon you (hello)" },
  { arabic: "شكرا", english: "Shukran", meaning: "Thank you" },
  { arabic: "بسلامة", english: "Bslama", meaning: "Goodbye" },
];

const itinerary = [
  "Days 1-3: Marrakech & Atlas Mountains",
  "Days 4-6: Sahara Desert experience",
  "Days 7-9: Fez medina & cultural sites",
  "Days 10-12: Chefchaouen & coast",
  "Days 13-14: Casablanca & departure",
];

const PlanningSlide = ({ direction }: SlideProps) => {
  const [visible, setVisible] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(0);

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
          Plan Your Journey
        </h2>
        <p
          className={`text-center font-montserrat text-xl text-muted-foreground mb-12 transition-all duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Everything you need to know
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="space-y-6">
            {/* Seasons */}
            <div
              className={`bg-card/70 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-accent" />
                <h3 className="font-playfair text-2xl font-bold">
                  Best Time to Visit
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {seasons.map((season, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSeason(index)}
                    className={`bg-gradient-to-br ${season.color} border-2 rounded-xl p-4 text-left transition-all ${
                      selectedSeason === index
                        ? "border-accent scale-105"
                        : "border-transparent hover:scale-105"
                    }`}
                  >
                    <p className="font-playfair text-xl font-bold mb-1">
                      {season.name}
                    </p>
                    <p className="font-montserrat text-xs text-accent font-semibold mb-2">
                      {season.months}
                    </p>
                    <p className="font-montserrat text-xs text-muted-foreground">
                      {season.perfect}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick phrases */}
            <div
              className={`bg-card/70 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Volume2 className="w-8 h-8 text-accent" />
                <h3 className="font-playfair text-2xl font-bold">
                  Essential Phrases
                </h3>
              </div>

              <div className="space-y-4">
                {phrases.map((phrase, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 hover-scale cursor-pointer"
                  >
                    <p className="font-playfair text-2xl text-accent mb-1">
                      {phrase.arabic}
                    </p>
                    <p className="font-montserrat text-sm font-semibold mb-1">
                      {phrase.english}
                    </p>
                    <p className="font-montserrat text-xs text-muted-foreground">
                      {phrase.meaning}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Itinerary */}
            <div
              className={`bg-card/70 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-accent" />
                <h3 className="font-playfair text-2xl font-bold">
                  2-Week Itinerary
                </h3>
              </div>

              <div className="space-y-3">
                {itinerary.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gradient-to-r from-primary/5 to-transparent rounded-lg hover-scale"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent font-bold font-montserrat text-sm">
                      {index + 1}
                    </div>
                    <p className="font-montserrat text-sm pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Packing list */}
            <div
              className={`bg-card/70 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Backpack className="w-8 h-8 text-accent" />
                <h3 className="font-playfair text-2xl font-bold">
                  Packing Essentials
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm font-montserrat">
                {[
                  "Comfortable shoes",
                  "Sun protection",
                  "Modest clothing",
                  "Power adapter",
                  "Camera",
                  "Reusable water bottle",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanningSlide;
