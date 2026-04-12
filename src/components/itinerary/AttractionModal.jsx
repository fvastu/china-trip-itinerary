import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

export default function AttractionModal({ attraction, onClose }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const photos = attraction.photos || [];

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/80 backdrop-blur-sm md:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ type: "spring", damping: 28, stiffness: 300 }}
        className="bg-card w-full md:max-w-2xl md:rounded-2xl rounded-t-2xl overflow-hidden flex flex-col"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle bar mobile */}
        <div className="flex justify-center pt-3 pb-1 md:hidden">
          <div className="w-10 h-1 rounded-full bg-border" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
          <h3 className="font-display text-base md:text-lg font-semibold text-foreground leading-tight pr-4">
            {attraction.name}
          </h3>
          <button
            onClick={onClose}
            className="shrink-0 p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Photo carousel */}
        {photos.length > 0 && (
          <div
            className="relative aspect-video bg-muted overflow-hidden select-none shrink-0"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={photos[current].image}
                alt={photos[current].caption || attraction.name}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Caption overlay */}
            {photos[current].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-10 pointer-events-none">
                <p className="font-body text-xs text-white/80 italic leading-relaxed">
                  {photos[current].caption}
                </p>
              </div>
            )}

            {photos.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute top-2 right-2 bg-black/50 text-white font-body text-xs px-2 py-0.5 rounded-full">
                  {current + 1}/{photos.length}
                </div>
              </>
            )}
          </div>
        )}

        {/* History */}
        <div className="p-4 overflow-y-auto flex-1">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="font-body text-xs tracking-widest uppercase text-primary font-medium">
              Un po' di storia
            </span>
          </div>
          <p className="font-body text-sm text-foreground/80 leading-relaxed">
            {attraction.history}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}