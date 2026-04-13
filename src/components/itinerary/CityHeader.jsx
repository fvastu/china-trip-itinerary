import { motion } from "framer-motion";

export default function CityHeader({ name, chinese, dates, image, description }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative overflow-hidden rounded-2xl" style={{ height: "min(50vw, 380px)", minHeight: "220px" }}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-10">
          <p className="font-body text-[11px] tracking-[0.25em] uppercase text-white/60 mb-1.5">
            {dates}
          </p>
          <h2 className="font-display text-3xl font-bold text-white md:text-5xl leading-tight">
            {name}
          </h2>
          {chinese && (
            <p className="font-display text-base italic text-white/60 mt-0.5 md:text-xl">
              {chinese}
            </p>
          )}
          {description && (
            <p className="font-body mt-2 max-w-lg text-xs leading-relaxed text-white/70">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
