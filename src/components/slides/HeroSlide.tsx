import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-morocco.jpg";

interface SlideProps {
  direction: "next" | "prev";
}

const HeroSlide = ({ direction }: SlideProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Split view of blue Chefchaouen streets and modern Casablaba skyline"
          className="w-full h-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-5xl">
        <h1
          className={`font-playfair text-6xl md:text-8xl font-bold mb-6 transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Morocco
        </h1>
        <p
          className={`font-playfair text-3xl md:text-5xl text-primary mb-4 transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          Where Ancient Magic Meets Modern Dreams
        </p>
        <p
          className={`font-montserrat text-xl md:text-2xl text-muted-foreground transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          A Journey Through Africa's Most Captivating Country
        </p>

        {/* Animated decorative elements */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-32 h-32 opacity-20">
          <div className="w-full h-full border-4 border-accent rounded-full animate-pulse-glow" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
