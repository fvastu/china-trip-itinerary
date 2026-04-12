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
      <div className="relative h-[42vh] min-h-[320px] overflow-hidden rounded-2xl sm:h-[50vh] md:h-[60vh]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-12">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-white/60 mb-3">
            {dates}
          </p>
          <h2 className="font-display mb-1 text-3xl font-bold text-white sm:text-4xl md:text-6xl">
            {name}
          </h2>
          {chinese && (
            <p className="font-display text-lg italic text-white/70 sm:text-xl md:text-2xl">
              {chinese}
            </p>
          )}
          {description && (
            <p className="font-body mt-3 max-w-lg text-xs leading-relaxed text-white/70 sm:mt-4 sm:text-sm">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
