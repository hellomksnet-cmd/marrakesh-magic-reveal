import { useEffect, useState } from "react";
import { Users, Building, Sun, Flag } from "lucide-react";
import jemaaImage from "@/assets/jemaa-square.jpg";

interface SlideProps {
  direction: "next" | "prev";
}

const stats = [
  { value: 12, suffix: "M+", label: "Visitors Annually", icon: Users },
  { value: 9, suffix: "", label: "UNESCO World Heritage Sites", icon: Building },
  { value: 300, suffix: "+", label: "Days of Sunshine", icon: Sun },
  { value: 1777, suffix: "", label: "First to Recognize USA", icon: Flag },
];

const StatsSlide = ({ direction }: SlideProps) => {
  const [visible, setVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    setVisible(true);
    
    // Animate counters
    const timers = stats.map((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let currentStep = 0;

      return setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.min(
              Math.round(increment * currentStep),
              stat.value
            );
            return newCounters;
          });
        }
      }, duration / steps);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden pattern-moroccan">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={jemaaImage}
          alt="Bustling Jemaa el-Fnaa square in Marrakech at golden hour"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-8">
        <h2
          className={`font-playfair text-5xl md:text-6xl font-bold text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Morocco by the Numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-8 text-center hover-scale transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <div className="font-playfair text-5xl font-bold text-primary mb-2 counter-animate">
                  {counters[index]}
                  {stat.suffix}
                </div>
                <p className="font-montserrat text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        <p
          className={`text-center mt-12 font-montserrat text-xl text-muted-foreground transition-all duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          A land where history meets hospitality
        </p>
      </div>
    </div>
  );
};

export default StatsSlide;
