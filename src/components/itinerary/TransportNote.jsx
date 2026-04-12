import { motion } from "framer-motion";
import { Train, AlertCircle } from "lucide-react";

export default function TransportNote({ notes }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-accent/40 border border-border rounded-xl p-5 md:p-6"
    >
      <div className="flex items-center gap-2 mb-3">
        <Train className="w-4 h-4 text-primary" />
        <h4 className="font-body text-xs tracking-[0.2em] uppercase font-medium text-foreground">
          Note Trasporti
        </h4>
      </div>
      <div className="space-y-2">
        {notes.map((note, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <AlertCircle className="w-3 h-3 text-muted-foreground mt-0.5 shrink-0" />
            <p className="font-body text-xs text-muted-foreground leading-relaxed">
              {note}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}