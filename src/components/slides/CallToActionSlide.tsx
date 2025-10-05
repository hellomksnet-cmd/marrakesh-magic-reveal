import { useEffect, useState } from "react";
import { Globe, BookOpen, Instagram, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-morocco.jpg";

interface SlideProps {
  direction: "next" | "prev";
}

const resources = [
  { icon: Globe, label: "Visit Morocco", link: "#" },
  { icon: BookOpen, label: "Travel Guide", link: "#" },
  { icon: Instagram, label: "@VisitMorocco", link: "#" },
  { icon: Mail, label: "Contact Us", link: "#" },
];

const CallToActionSlide = ({ direction }: SlideProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful Morocco landscape"
          className="w-full h-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl">
        <h2
          className={`font-playfair text-6xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Your Journey Awaits
        </h2>

        <p
          className={`font-montserrat text-2xl md:text-3xl text-accent mb-8 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          Don't just dream about Morocco—experience it
        </p>

        <p
          className={`font-montserrat text-lg text-muted-foreground mb-12 transition-all duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          From ancient medinas to modern innovation, from desert dunes to ocean waves
        </p>

        {/* CTA Button */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary via-accent to-secondary hover:shadow-2xl hover:shadow-accent/50 text-white font-montserrat text-xl px-12 py-6 h-auto hover:scale-110 transition-all duration-300 animate-pulse-glow"
          >
            Start Your Journey
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Resources Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <a
                key={index}
                href={resource.link}
                className="bg-card/70 backdrop-blur-sm border-2 border-primary/20 hover:border-accent rounded-xl p-6 hover-scale cursor-pointer group"
              >
                <Icon className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-montserrat text-sm font-semibold">
                  {resource.label}
                </p>
              </a>
            );
          })}
        </div>

        {/* Quote */}
        <div
          className={`bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border-2 border-accent/40 rounded-xl p-8 transition-all duration-1000 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <p className="font-playfair text-2xl italic text-accent mb-3">
            "في الحركة بركة"
          </p>
          <p className="font-montserrat text-lg">
            "There is blessing in movement"
          </p>
          <p className="font-montserrat text-sm text-muted-foreground mt-2">
            — Moroccan Proverb
          </p>
        </div>

        {/* Final message */}
        <p
          className={`mt-12 font-montserrat text-sm text-muted-foreground transition-all duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1400ms" }}
        >
          Press ESC to restart • Share this presentation with friends
        </p>
      </div>
    </div>
  );
};

export default CallToActionSlide;
