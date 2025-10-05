import { useEffect, useState } from "react";
import { Zap, Film, Sun, TrendingUp } from "lucide-react";

interface SlideProps {
  direction: "next" | "prev";
}

const innovations = [
  {
    title: "Tech Hub",
    icon: Zap,
    stats: ["Growing startup ecosystem", "5G infrastructure", "Digital innovation centers"],
    progress: 75,
  },
  {
    title: "Film Industry",
    icon: Film,
    stats: ["Game of Thrones", "Gladiator", "Mission Impossible"],
    progress: 90,
  },
  {
    title: "Renewable Energy",
    icon: Sun,
    stats: ["World's largest solar farm", "52% renewable by 2030", "Green energy leader"],
    progress: 52,
  },
  {
    title: "Economic Growth",
    icon: TrendingUp,
    stats: ["Tourism boom", "Infrastructure investment", "Regional powerhouse"],
    progress: 68,
  },
];

const ModernMoroccoSlide = ({ direction }: SlideProps) => {
  const [visible, setVisible] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState(innovations.map(() => 0));

  useEffect(() => {
    setVisible(true);

    // Animate progress bars
    const timer = setTimeout(() => {
      setAnimatedProgress(innovations.map((inn) => inn.progress));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden pattern-moroccan">
      <div className="relative z-10 w-full max-w-6xl px-8">
        <h2
          className={`font-playfair text-5xl md:text-6xl font-bold text-center mb-4 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Modern Morocco
        </h2>
        <p
          className={`text-center font-montserrat text-2xl text-accent mb-16 transition-all duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Innovation meets tradition
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {innovations.map((innovation, index) => {
            const Icon = innovation.icon;
            return (
              <div
                key={index}
                className={`bg-card/70 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8 hover-scale transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent/20 rounded-xl">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold">
                    {innovation.title}
                  </h3>
                </div>

                <div className="space-y-2 mb-6">
                  {innovation.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 font-montserrat text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {stat}
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-montserrat">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-accent font-bold">
                      {animatedProgress[index]}%
                    </span>
                  </div>
                  <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-1500 ease-out"
                      style={{
                        width: `${animatedProgress[index]}%`,
                        transitionDelay: `${index * 200}ms`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight box */}
        <div
          className={`mt-12 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border-2 border-accent/40 rounded-xl p-8 text-center transition-all duration-1000 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="font-playfair text-2xl font-semibold mb-2">
            A country looking forward
          </p>
          <p className="font-montserrat text-lg text-muted-foreground">
            While preserving its rich heritage, Morocco embraces innovation and sustainable growth
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModernMoroccoSlide;
