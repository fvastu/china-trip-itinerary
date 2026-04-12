import { motion } from "framer-motion";
import { Smartphone, CreditCard, Train, Wifi, AlertTriangle, UtensilsCrossed, ShieldCheck, DollarSign } from "lucide-react";

const categories = [
  {
    icon: Smartphone,
    title: "App Essenziali",
    color: "text-blue-500",
    bg: "bg-blue-50",
    items: [
      "Didi — taxi (alternativa cinese a Uber, fondamentale)",
      "WeChat — pagamenti, mappe, comunicare con ristoranti",
      "Alipay — pagamenti ovunque (ricaricabile con carta estera)",
      "Maps.me — mappe offline per navigare senza VPN",
      "Google Translate — modalità fotocamera per menu",
    ],
  },
  {
    icon: Wifi,
    title: "Connettività & VPN",
    color: "text-purple-500",
    bg: "bg-purple-50",
    items: [
      "VPN: scaricare PRIMA di partire (ExpressVPN / NordVPN)",
      "SIM: acquistare SIM cinese (China Unicom) in aeroporto",
      "In alternativa: SIM estera con roaming o eSIM (es. Airalo)",
      "WhatsApp funziona solo con VPN attiva",
      "Google Maps non funziona — usare Baidu Maps o Maps.me",
    ],
  },
  {
    icon: DollarSign,
    title: "Soldi & Pagamenti",
    color: "text-green-500",
    bg: "bg-green-50",
    items: [
      "Portare contanti Yuan (CNY) per mercati e street food",
      "Alipay / WeChat Pay accettati quasi ovunque",
      "Collegare carta Visa/Mastercard a Alipay (internazionale)",
      "Prelevare: cercare Bank of China o ICBC",
      "1 EUR ≈ 7.5–8 CNY (verificare cambio attuale)",
    ],
  },
  {
    icon: Train,
    title: "Trasporti",
    color: "text-orange-500",
    bg: "bg-orange-50",
    items: [
      "Treni HSR (高铁): prenotare su trip.com con passaporto",
      "Metro: usare carta di credito contactless o biglietto cartaceo",
      "Didi: app da scaricare, aggiungere carta estera o contanti",
      "Taxi: far scrivere dall'hotel la destinazione in cinese",
      "Bus aeroporto: sempre meglio della metro nelle ore di punta",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Cibo & Ristoranti",
    color: "text-red-500",
    bg: "bg-red-50",
    items: [
      "Pechino: Anatra laccata, Jianbing (crepes), Zhajiangmian",
      "Xi'An: Roujiamo, Biang Biang noodles, Liangpi",
      "Chengdu: Hotpot, Mapo tofu, Dan Dan noodles 🌶️",
      "Shanghai: Xiaolongbao, Shengjian bao, Hairy crab",
      "Allergie: far scrivere dall'hotel in cinese eventuali allergie",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Consigli Pratici",
    color: "text-teal-500",
    bg: "bg-teal-50",
    items: [
      "Passaporto: portarlo sempre con sé (hotel, musei, treni)",
      "Foto: controllare dove è vietato fotografare (musei, militare)",
      "Mance: non sono usali in Cina, non obbligatorie",
      "Orari: molti siti chiudono il lunedì — verificare",
      "Golden Week (1 Mag): folla enorme, prenotare tutto in anticipo",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Attenzione",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    items: [
      "VPN: illegale in teoria, usata da tutti i turisti in pratica",
      "Acqua del rubinetto: NON potabile — comprare bottiglie",
      "Farmaci: portare scorte, difficile trovare prodotti europei",
      "Scam: diffidare di 'studenti' che offrono tour del tè",
      "Polveri sottili: tenere d'occhio l'indice AQI delle città",
    ],
  },
  {
    icon: CreditCard,
    title: "Biglietti da Prenotare",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    items: [
      "✅ Città Proibita: prenotazione online obbligatoria",
      "✅ Esercito di Terracotta: già presi via trip.com",
      "⚠️ Treni HSR: prenotare su trip.com con passaporto",
      "ℹ️ Mutianyu: biglietti sul posto (funivia + toboggan)",
      "ℹ️ Longmen, Tianmen, Pagoda: acquistabili all'ingresso",
    ],
  },
];

export default function PracticalNotes() {
  return (
    <section className="py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-14"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Prima di Partire</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Note Pratiche</h2>
        <div className="w-12 h-[2px] bg-primary mx-auto mt-6" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
              className="bg-card border border-border rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 rounded-lg ${cat.bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-4 h-4 ${cat.color}`} />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">{cat.title}</h3>
              </div>
              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-muted-foreground/40 mt-1 text-xs">•</span>
                    <span className="font-body text-xs text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}