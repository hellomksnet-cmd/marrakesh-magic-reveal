interface SlideIndicatorsProps {
  totalSlides: number;
  currentSlide: number;
  onSlideClick: (index: number) => void;
}

const SlideIndicators = ({
  totalSlides,
  currentSlide,
  onSlideClick,
}: SlideIndicatorsProps) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideClick(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index === currentSlide
              ? "bg-accent scale-150 shadow-lg shadow-accent/50"
              : "bg-muted/50 hover:bg-muted"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default SlideIndicators;
