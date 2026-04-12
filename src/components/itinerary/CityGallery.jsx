import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Utensils } from "lucide-react";

function CityCarousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
      <div
        className="relative aspect-[4/3] select-none overflow-hidden sm:aspect-[16/9]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current].image}
            alt={slides[current].label}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 pointer-events-none"
          >
            <p className="font-display mb-1 text-sm font-semibold leading-tight text-white sm:text-base md:text-lg">
              {slides[current].label}
            </p>
            <p className="font-body max-w-xl text-[11px] leading-relaxed text-white/80 sm:text-xs md:text-sm">
              {slides[current].caption}
            </p>
          </motion.div>
        </AnimatePresence>
        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-1.5 text-white transition-colors hover:bg-black/65 sm:left-3 sm:p-2">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-1.5 text-white transition-colors hover:bg-black/65 sm:right-3 sm:p-2">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="flex gap-1.5 overflow-x-auto bg-card p-2 scrollbar-hide">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`relative shrink-0 rounded-lg overflow-hidden transition-all ${i === current ? "ring-2 ring-primary" : "opacity-60 hover:opacity-90"}`}
            style={{ width: 56, height: 40 }}
          >
            <img src={slide.image} alt={slide.label} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function FoodCard({ food }) {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-2xl overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-40 shrink-0">
          <img src={food.image} alt={food.dish} className="w-full h-36 sm:h-full object-cover" />
        </div>
        <div className="p-4 flex flex-col justify-center gap-1">
          <div className="flex items-center gap-2">
            <Utensils className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="font-body text-xs tracking-widest uppercase text-primary font-medium">Da mangiare qui</span>
          </div>
          <p className="font-display text-base font-semibold text-foreground">{food.dish}</p>
          <p className="font-body text-xs text-muted-foreground italic mb-1">{food.chinese}</p>
          <p className="font-body text-xs text-muted-foreground leading-relaxed">{food.tip}</p>
        </div>
      </div>
    </div>
  );
}

export default function CityGallery({ slides, food }) {
  return (
    <div className="mt-8 space-y-4">
      <CityCarousel slides={slides} />
      {food && <FoodCard food={food} />}
    </div>
  );
}
