import { motion } from "framer-motion";
import { BedDouble, MapPin } from "lucide-react";

export default function HotelCard({ name, chinese, address }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-card border border-border rounded-xl p-4 md:p-5"
    >
      <div className="flex items-center gap-2 mb-2">
        <BedDouble className="w-4 h-4 text-primary" />
        <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">
          Alloggio
        </span>
      </div>
      <p className="font-display text-sm font-semibold text-foreground">{name}</p>
      {chinese && (
        <p className="font-body text-xs text-muted-foreground mt-0.5">{chinese}</p>
      )}
      <div className="flex items-start gap-1.5 mt-2">
        <MapPin className="w-3 h-3 text-muted-foreground mt-0.5 shrink-0" />
        <p className="font-body text-xs text-muted-foreground leading-relaxed">{address}</p>
      </div>
    </motion.div>
  );
}