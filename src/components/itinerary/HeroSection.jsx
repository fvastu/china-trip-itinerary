import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            19 Aprile – 2 Maggio 2026
          </p>
          <h1 className="font-display mb-4 text-4xl font-bold leading-[0.9] text-foreground sm:text-5xl md:text-7xl lg:text-8xl">
            Cina
          </h1>
          <p className="font-display mb-2 text-xl italic text-primary sm:text-2xl md:text-3xl">
            中國
          </p>
          <div className="w-16 h-[2px] bg-primary mx-auto my-8" />
          <p className="font-body mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Da Pechino a Shanghai, attraverso antiche mura, montagne sospese nel cielo e sapori indimenticabili.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 sm:mt-16"
        >
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 font-body text-[11px] uppercase tracking-[0.22em] text-muted-foreground md:gap-6 md:text-xs">
            {["Pechino", "Luoyang", "Xi'An", "Chengdu", "Zhangjiajie", "Guilin", "Shanghai"].map((city, i) => (
              <span key={city} className="flex items-center gap-2 md:gap-6">
                <a href={`#${city.toLowerCase().replace("'", "")}`} className="hover:text-primary transition-colors cursor-pointer">
                  {city}
                </a>
                {i < 6 && <span className="hidden text-border md:inline">·</span>}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
