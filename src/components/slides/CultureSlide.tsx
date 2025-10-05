import { useEffect, useState } from "react";
import { Music, Heart, Palette, Calendar } from "lucide-react";

interface SlideProps {
  direction: "next" | "prev";
}

const experiences = [
  {
    title: "Moroccan Wedding",
    icon: Heart,
    description: "3-day celebration with traditional ceremonies, henna, music, and feast",
    color: "from-secondary to-accent",
  },
  {
    title: "Gnawa Music",
    icon: Music,
    description: "Spiritual music tradition with hypnotic rhythms and colorful performances",
    color: "from-primary to-accent",
  },
  {
    title: "Berber Crafts",
    icon: Palette,
    description: "Hand-woven carpets, pottery, and jewelry passed through generations",
    color: "from-accent to-primary",
  },
  {
    title: "Festival Calendar",
    icon: Calendar,
    description: "Year-round celebrations from rose festivals to world music events",
    color: "from-primary to-secondary",
  },
];

const CultureSlide = ({ direction }: SlideProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden pattern-moroccan">
      <div className="relative z-10 w-full max-w-6xl px-8">
        <h2
          className={`font-playfair text-5xl md:text-6xl font-bold text-center mb-4 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Cultural Experiences
        </h2>
        <p
          className={`text-center font-montserrat text-xl text-muted-foreground mb-16 transition-all duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Immerse yourself in living traditions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className={`group relative bg-card/60 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8 overflow-hidden cursor-pointer transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <Icon className="w-16 h-16 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  
                  <h3 className="font-playfair text-3xl font-bold mb-3">
                    {exp.title}
                  </h3>
                  
                  <p className="font-montserrat text-lg text-muted-foreground">
                    {exp.description}
                  </p>
                </div>

                {/* Decorative corner element */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

        {/* Fun fact callout */}
        <div
          className={`bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-sm border-2 border-accent/40 rounded-xl p-6 text-center transition-all duration-1000 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="font-playfair text-2xl font-semibold mb-2">
            💚 Fun Fact
          </p>
          <p className="font-montserrat text-lg">
            In Moroccan Arabic, saying <span className="text-accent font-bold">"my liver"</span> is a term of endearment - 
            because the liver is considered the seat of emotions!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CultureSlide;
