import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, Utensils, Train, Ticket, AlertCircle, Camera } from "lucide-react";
import AttractionModal from "./AttractionModal";

const iconMap = {
  time: Clock,
  place: MapPin,
  food: Utensils,
  transport: Train,
  ticket: Ticket,
  tip: AlertCircle,
};

export default function DayCard({ day, date, title, items }) {
  const [openAttraction, setOpenAttraction] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Day header */}
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-display text-4xl md:text-5xl font-bold text-primary/20">
          {day}
        </span>
        <div>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
            {date}
          </p>
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
            {title}
          </h3>
        </div>
      </div>

      {/* Timeline items */}
      <div className="ml-1 border-l-2 border-border pl-4 md:pl-8 space-y-4">
        {items.map((item, idx) => {
          const Icon = iconMap[item.icon] || MapPin;
          return (
            <div
              key={idx}
              className={`relative pb-2 ${
                item.highlight
                  ? "bg-accent/50 -ml-4 md:-ml-8 pl-4 md:pl-8 pr-3 py-3 rounded-r-lg border-l-2 border-primary"
                  : ""
              }`}
            >
              {/* Dot on timeline */}
              <div
                className={`absolute top-1 w-2.5 h-2.5 rounded-full border-2 ${
                  item.highlight
                    ? "bg-primary border-primary -left-[calc(1rem+7px)] md:-left-[calc(2rem+7px)]"
                    : "bg-background border-muted-foreground/30 -left-[calc(1rem+5px)] md:-left-[calc(2rem+5px)]"
                }`}
              />

              {item.time && (
                <p className="font-body text-xs font-medium text-primary mb-1">
                  {item.time}
                </p>
              )}
              <div className="flex items-start gap-2">
                <Icon className="w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-body text-sm font-medium text-foreground">
                    {item.title}
                  </p>
                  {item.description && (
                    <p className="font-body text-xs text-muted-foreground mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  {item.attraction && (
                    <button
                      onClick={() => setOpenAttraction(item.attraction)}
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-body font-medium text-primary hover:text-primary/70 transition-colors bg-primary/10 hover:bg-primary/15 px-2.5 py-1 rounded-full"
                    >
                      <Camera className="w-3 h-3" />
                      Storia & Foto
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {openAttraction && (
          <AttractionModal
            attraction={openAttraction}
            onClose={() => setOpenAttraction(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}