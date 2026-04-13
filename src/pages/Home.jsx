import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Utensils, FileText, MessageCircle } from "lucide-react";
import Navbar from "../components/itinerary/Navbar";
import Footer from "../components/itinerary/Footer";

const cities = [
  {
    slug: "pechino",
    name: "Pechino",
    chinese: "北京",
    dates: "19 – 21 Apr",
    image: "/assets/images/forbidden-city.jpg",
    tagline: "Città Proibita, Grande Muraglia, hutong e anatra laccata.",
    color: "#c0392b",
    order: 1,
  },
  {
    slug: "luoyang",
    name: "Luoyang",
    chinese: "洛阳",
    dates: "22 Apr",
    image: "/assets/images/longmen-grottoes.jpg",
    tagline: "100.000 statue buddhiste nelle grotte di Longmen.",
    color: "#e67e22",
    order: 2,
  },
  {
    slug: "xian",
    name: "Xi'An",
    chinese: "西安",
    dates: "22 – 24 Apr",
    image: "/assets/images/xian-city-wall.jpg",
    tagline: "Esercito di Terracotta, mura in bici e Quartiere Musulmano.",
    color: "#d35400",
    order: 3,
  },
  {
    slug: "chengdu",
    name: "Chengdu",
    chinese: "成都",
    dates: "24 – 26 Apr",
    image: "/assets/images/panda-research-base.jpg",
    tagline: "Panda, hotpot del Sichuan e teahouse al People's Park.",
    color: "#27ae60",
    order: 4,
  },
  {
    slug: "zhangjiajie",
    name: "Zhangjiajie",
    chinese: "张家界",
    dates: "26 – 29 Apr",
    image: "/assets/images/avatar-pillars.jpg",
    tagline: "Le montagne di Avatar, Tianmen e il villaggio di Furong.",
    color: "#2980b9",
    order: 5,
  },
  {
    slug: "guilin",
    name: "Guilin",
    chinese: "桂林",
    dates: "29 – 30 Apr",
    image: "/assets/images/guilin-landscape.jpg",
    tagline: "Montagne carsiche, crociera sul Fiume Li e Yangshuo.",
    color: "#8e44ad",
    order: 6,
  },
  {
    slug: "shanghai",
    name: "Shanghai",
    chinese: "上海",
    dates: "1 – 2 Mag",
    image: "/assets/images/shanghai-night.jpg",
    tagline: "The Bund di notte, Yuyuan Garden e xiaolongbao.",
    color: "#c0392b",
    order: 7,
  },
];

const quickLinks = [
  { to: "/mappa", icon: MapPin, label: "Mappa del Percorso", sub: "7 città · 14 giorni" },
  { to: "/cibo", icon: Utensils, label: "Guida al Cibo", sub: "Piatti da non perdere" },
  { to: "/frasi", icon: MessageCircle, label: "Frasi Utili", sub: "Con audio in cinese" },
  { to: "/note", icon: FileText, label: "Note Pratiche", sub: "App, trasporti, consigli" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[60svh] items-center justify-center overflow-hidden pt-14">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="relative z-10 text-center px-5 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">
              19 Aprile – 2 Maggio 2026
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-bold leading-none text-foreground mb-2">
              Cina
            </h1>
            <p className="font-display text-xl sm:text-2xl italic text-primary mb-6">中國</p>
            <div className="w-14 h-[2px] bg-primary mx-auto mb-6" />
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
              Da Pechino a Shanghai, attraverso antiche mura, montagne sospese nel cielo e sapori indimenticabili.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 md:px-6 pb-20">

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-2 gap-3 mb-16 sm:grid-cols-4"
        >
          {quickLinks.map(({ to, icon: Icon, label, sub }) => (
            <Link
              key={to}
              to={to}
              className="flex flex-col items-center gap-2 bg-card border border-border rounded-2xl p-4 hover:border-primary/40 hover:bg-primary/5 transition-all group text-center"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <span className="font-display text-[11px] font-semibold text-foreground leading-tight text-center">{label}</span>
              <span className="font-body text-[10px] text-muted-foreground hidden sm:block">{sub}</span>
            </Link>
          ))}
        </motion.div>

        {/* City cards */}
        <div className="mb-4">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">Tappe</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Il Percorso</h2>
          <div className="w-10 h-[2px] bg-primary mt-4 mb-10" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cities.map((city, i) => (
            <motion.div
              key={city.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
            >
              <Link
                to={`/${city.slug}`}
                className="group block bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div
                    className="absolute top-3 left-3 w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-bold border-2 border-white/80 shadow"
                    style={{ background: city.color }}
                  >
                    {city.order}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="font-display text-xl font-bold text-white leading-tight">{city.name}</p>
                        <p className="font-display text-sm italic text-white/70">{city.chinese}</p>
                      </div>
                      <span className="font-body text-[10px] text-white/60 bg-black/30 rounded-full px-2 py-0.5">{city.dates}</span>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 flex items-center justify-between gap-3">
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{city.tagline}</p>
                  <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
