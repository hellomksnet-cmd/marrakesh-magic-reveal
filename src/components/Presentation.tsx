import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSlide from "./slides/HeroSlide";
import StatsSlide from "./slides/StatsSlide";
import TimelineSlide from "./slides/TimelineSlide";
import ArchitectureSlide from "./slides/ArchitectureSlide";
import CitiesSlide from "./slides/CitiesSlide";
import GeographySlide from "./slides/GeographySlide";
import CultureSlide from "./slides/CultureSlide";
import FoodSlide from "./slides/FoodSlide";
import ModernMoroccoSlide from "./slides/ModernMoroccoSlide";
import StudentLifeSlide from "./slides/StudentLifeSlide";
import PlanningSlide from "./slides/PlanningSlide";
import CallToActionSlide from "./slides/CallToActionSlide";
import ProgressBar from "./navigation/ProgressBar";
import SlideIndicators from "./navigation/SlideIndicators";

const slides = [
  HeroSlide,
  StatsSlide,
  TimelineSlide,
  ArchitectureSlide,
  CitiesSlide,
  GeographySlide,
  CultureSlide,
  FoodSlide,
  ModernMoroccoSlide,
  StudentLifeSlide,
  PlanningSlide,
  CallToActionSlide,
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const totalSlides = slides.length;

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setDirection(index > currentSlide ? "next" : "prev");
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setDirection("next");
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection("prev");
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Slide Content */}
      <div className="w-full h-full">
        <CurrentSlideComponent direction={direction} />
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-card/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:border-primary disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-primary/20 font-montserrat text-sm">
          {currentSlide + 1} / {totalSlides}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="bg-card/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:border-primary disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <SlideIndicators
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        onSlideClick={goToSlide}
      />

      {/* Progress Bar */}
      <ProgressBar progress={(currentSlide / (totalSlides - 1)) * 100} />

      {/* Instructions */}
      {currentSlide === 0 && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 text-center animate-fade-in">
          <p className="text-sm text-muted-foreground font-montserrat">
            Use arrow keys or click to navigate
          </p>
        </div>
      )}
    </div>
  );
};

export default Presentation;
