const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { motion } from "framer-motion";

const foods = [
  {
    city: "Pechino",
    emoji: "🦆",
    dish: "Anatra alla Pechinese",
    where: "Siji Minfu – 32 Dengshikou W St",
    tip: "Arriva entro le 18, lascia il nome e fai un giro. Coda fino a 2 ore.",
    image: "/assets/images/peking-duck.jpg",
  },
  {
    city: "Xi'An",
    emoji: "🫓",
    dish: "Roujiamo & Biang Biang",
    where: "Quartiere Musulmano – Beiyuanmen St",
    tip: "Il roujiamo è il panino cinese: carne stufata in un pane croccante. I noodles larghi sono un must.",
    image: "/assets/images/roujiamo.jpg",
  },
  {
    city: "Chengdu",
    emoji: "🌶️",
    dish: "Hotpot del Sichuan",
    where: "Shu Daxia / Da Miao",
    tip: "Il brodo rosso è molto piccante. Chiedi il doppio brodo (metà piccante, metà chiaro) se non sei abituato.",
    image: "/assets/images/sichuan-hotpot.jpg",
  },
  {
    city: "Shanghai",
    emoji: "🥟",
    dish: "Xiaolongbao",
    where: "Jia Jia Tang Bao / Din Tai Fung",
    tip: "Metti prima il raviolo nel cucchiaio, mordi un angolino e succhia il brodo caldo. Non mordere subito o ti scotti.",
    image: "/assets/images/xiaolongbao.jpg",
  },
];

export default function FoodHighlights() {
  return (
    <section className="py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">A Tavola</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Da non perdere</h2>
        <div className="w-12 h-[2px] bg-primary mx-auto mt-6" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {foods.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card border border-border rounded-2xl overflow-hidden"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img src={f.image} alt={f.dish} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{f.emoji}</span>
                <span className="font-body text-xs tracking-wider uppercase text-muted-foreground">{f.city}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">{f.dish}</h3>
              <p className="font-body text-xs text-primary mb-2">📍 {f.where}</p>
              <p className="font-body text-xs text-muted-foreground leading-relaxed italic">💡 {f.tip}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
