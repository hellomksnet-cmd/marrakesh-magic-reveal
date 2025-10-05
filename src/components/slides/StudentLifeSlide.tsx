import { useEffect, useState } from "react";
import { DollarSign, Compass, Camera, Shield } from "lucide-react";

interface SlideProps {
  direction: "next" | "prev";
}

const StudentLifeSlide = ({ direction }: SlideProps) => {
  const [visible, setVisible] = useState(false);
  const [budget, setBudget] = useState(1000);

  useEffect(() => {
    setVisible(true);
  }, []);

  const experiences = Math.floor(budget / 50);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden pattern-moroccan">
      <div className="relative z-10 w-full max-w-6xl px-8">
        <h2
          className={`font-playfair text-5xl md:text-6xl font-bold text-center mb-4 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Student Life in Morocco
        </h2>
        <p
          className={`text-center font-montserrat text-xl text-muted-foreground mb-12 transition-all duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Adventure on any budget
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Budget section */}
          <div
            className={`bg-card/70 backdrop-blur-sm border-2 border-accent/30 rounded-2xl p-8 transition-all duration-700 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-10 h-10 text-accent" />
              <h3 className="font-playfair text-3xl font-bold">
                Your Budget
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="font-montserrat text-sm text-muted-foreground mb-2 block">
                  Monthly budget: ${budget}
                </label>
                <input
                  type="range"
                  min="500"
                  max="3000"
                  step="100"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2 bg-muted/30 rounded-lg appearance-none cursor-pointer accent-accent"
                />
              </div>

              <div className="bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-sm border border-accent/30 rounded-xl p-6">
                <p className="font-montserrat text-2xl font-bold text-accent mb-2">
                  ~{experiences} experiences
                </p>
                <p className="font-montserrat text-sm text-muted-foreground">
                  You can afford per month
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between font-montserrat text-sm">
                  <span>Accommodation</span>
                  <span className="text-accent font-semibold">$300-600/mo</span>
                </div>
                <div className="flex justify-between font-montserrat text-sm">
                  <span>Meals</span>
                  <span className="text-accent font-semibold">$5-15/meal</span>
                </div>
                <div className="flex justify-between font-montserrat text-sm">
                  <span>Transportation</span>
                  <span className="text-accent font-semibold">$30-50/mo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Activities section */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            {[
              {
                icon: Compass,
                title: "Adventure Activities",
                items: ["Surf lessons", "Desert camping", "Mountain trekking"],
              },
              {
                icon: Camera,
                title: "Instagram Spots",
                items: ["Blue streets of Chefchaouen", "Sahara sunrise", "Medina rooftops"],
              },
              {
                icon: Shield,
                title: "Safety & Support",
                items: ["Low crime rate", "Friendly locals", "Tourist-friendly infrastructure"],
              },
            ].map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="bg-card/70 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 hover-scale"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                    <h4 className="font-playfair text-xl font-bold">
                      {section.title}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {section.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 font-montserrat text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLifeSlide;
