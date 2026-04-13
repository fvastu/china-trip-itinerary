import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Utensils } from "lucide-react";

const BASE = "/assets/images/";
const UNS = "/assets/images/";

const cities = [
  {
    name: "Pechino",
    chinese: "北京",
    emoji: "🏯",
    food: {
      image: BASE + "peking-duck.jpg",
      dish: "Anatra alla Pechinese",
      chinese: "北京烤鸭",
      tip: "La pelle viene laccata con sciroppo di malto e appesa ad asciugare per ore prima della cottura nel forno a legna. Si mangia avvolta in sottili crepes con cipollotto e salsa hoisin. Da Siji Minfu si arriva spesso in 2 ore di coda — lascia il nome e aspetta al bar accanto.",
    },
    slides: [
      {
        image: BASE + "summer-palace.jpg",
        label: "Palazzo d'Estate",
        caption: "Tre quarti del parco è il Lago Kunming scavato artificialmente su ordine dell'imperatore. Distrutto dai britannici nel 1860, fu ricostruito dall'imperatrice Cixi usando fondi destinati alla marina militare.",
      },
      {
        image: BASE + "great-wall-mutianyu.jpg",
        label: "Grande Muraglia · Mutianyu",
        caption: "La sezione più panoramica ha 22 torri di guardia. Curiosità: non è visibile dallo spazio a occhio nudo — la leggenda fu smentita dal primo astronauta cinese Yang Liwei nel 2003.",
      },
      {
        image: UNS + "photo-1584646098378-0b84fa2c0f87.jpg",
        label: "Città Proibita",
        caption: "980 edifici, ~9.000 stanze, 500 anni di storia imperiale. Solo l'imperatore poteva entrare senza permesso. Ogni tetto è decorato con un numero di figure mitologiche che dipende dal rango dell'edificio — il massimo è 10 solo sul Gate of Supreme Harmony.",
      },
      {
        image: BASE + "temple-of-heaven.jpg",
        label: "Tempio del Cielo",
        caption: "L'Echo Wall è costruita con tale precisione geometrica che un sussurro lungo la parete è udibile dall'altro lato. Gli imperatori usavano questa proprietà per comunicazioni riservate durante le cerimonie.",
      },
      {
        image: BASE + "beijing-hutong.jpg",
        label: "Hutong di Nanluoguxiang",
        caption: "La parola 'hutong' deriva dal mongolo 'hottog' (pozzo d'acqua): i vicoli si formavano intorno ai punti d'acqua. Negli anni '90 ne vennero demoliti migliaia per modernizzare la città — oggi sono bene protetto.",
      },
    ],
  },
  {
    name: "Luoyang",
    chinese: "洛阳",
    emoji: "🪨",
    food: {
      image: BASE + "longmen-water-banquet.jpg",
      dish: "Banchetto dell'Acqua",
      chinese: "水席",
      tip: "24 portate tutte liquide o in brodo, servite in sequenza continua come una corrente d'acqua. Nasce sotto la dinastia Tang per la corte dell'imperatrice Wu Zetian (unica donna imperatore della storia cinese). Il ristorante Zhen Bu Tong vicino alle grotte lo serve da generazioni.",
    },
    slides: [
      {
        image: UNS + "photo-1535961652354-923cb08225a7.jpg",
        label: "Grotte di Longmen",
        caption: "Scavate dal 493 d.C. lungo le rive del fiume Yi: 100.000+ statue buddhiste in 2.345 grotte. Il Buddha principale alto 17 metri ha un volto modellato — si dice — sulle sembianze dell'imperatrice Wu Zetian stessa.",
      },
      {
        image: UNS + "photo-1555990793-da11153b6c99.jpg",
        label: "Longmen al tramonto",
        caption: "L'ora migliore è il tardo pomeriggio quando la luce radente illumina i bassorilievi e si riflette sul fiume. L'ingresso costa di più ma evita la ressa del mattino — e le foto sono impagabili.",
      },
    ],
  },
  {
    name: "Xi'An",
    chinese: "西安",
    emoji: "⚔️",
    food: {
      image: BASE + "roujiamo.jpg",
      dish: "Roujiamo",
      chinese: "肉夹馍",
      tip: "L'hamburger più antico del mondo, nato sotto la Dinastia Qin (221 a.C.). Il segreto è la carne brasata per ore in un brodo di 20+ spezie — ogni chiosco ha la sua formula segreta. Al Quartiere Musulmano prova anche la versione con agnello (羊肉夹馍). Mangialo camminando, caldo di forno.",
    },
    slides: [
      {
        image: UNS + "photo-1591456983933-0c8a347f13a0.jpg",
        label: "Esercito di Terracotta · Fossa 1",
        caption: "Scoperto per caso nel 1974 da contadini che scavavano un pozzo. Ogni soldato ha tratti del viso unici — gli storici ipotizzano che fossero ritratti di soldati reali. La fossa 3 è il 'quartier generale': pochi soldati ma alta carica simbolica.",
      },
      {
        image: UNS + "photo-1547981609-4b6bfe67ca0b.jpg",
        label: "Esercito di Terracotta · dettaglio",
        caption: "Originariamente tutte le statue erano dipinte con colori vivaci — rosso, verde, viola. Il colore svanisce in pochi minuti a contatto con l'aria. I ricercatori hanno smesso di scavare apposta, aspettando una tecnologia che preservi i pigmenti.",
      },
      {
        image: UNS + "photo-1558618666-fcd25c85cd64.jpg",
        label: "Mura Antiche",
        caption: "In cima alle mura sono larghe 15 metri — abbastanza per due carri affiancati. In bici ci vogliono circa 90 minuti per il giro completo di 13,74 km. La mattina presto trovi anziani che fanno tai chi sui bastioni.",
      },
      {
        image: BASE + "xian-muslim-quarter.jpg",
        label: "Grande Moschea",
        caption: "Fondata nel 742 d.C., è cinese nell'architettura ma islamica nell'anima. Il Quartiere Musulmano Hui esiste da 1.300 anni. Il Beiyuanmen Market di notte è uno degli street food più intensi di tutta la Cina.",
      },
      {
        image: BASE + "dayan-pagoda.jpg",
        label: "Dayan Pagoda",
        caption: "Costruita per il monaco Xuanzang che aveva camminato fino all'India e ritorno (17 anni) per riportare testi buddhisti. La sua storia ispirò 'Il Viaggio in Occidente' con Sun Wukong — il classico cinese più tradotto al mondo.",
      },
    ],
  },
  {
    name: "Chengdu",
    chinese: "成都",
    emoji: "🐼",
    food: {
      image: BASE + "sichuan-hotpot.jpg",
      dish: "Hotpot Sichuan",
      chinese: "四川火锅",
      tip: "Il pepe del Sichuan (huajiao) crea un intorpidimento sulla lingua chiamato 'mala' (麻辣). Ordina il pot diviso: metà brodo rosso infernale, metà bianco neutro. Obbligatorio: cervella di anatra, foglie di crisantemo, sangue di anatra cotto. Non è per deboli di stomaco — ed è la cosa migliore che mangerai in viaggio.",
    },
    slides: [
      {
        image: UNS + "photo-1564349683136-77e08dba1ef7.jpg",
        label: "Panda Research Base",
        caption: "I panda sono più attivi nelle prime ore del mattino — arriva all'apertura (7:30). Dopo le 10 dormono quasi sempre. Fondata nel 1987 con 6 panda, oggi ne alleva oltre 50. Ogni cucciolo nato vale milioni nella diplomazia cinese.",
      },
      {
        image: UNS + "photo-1531386151447-fd76ad50012f.jpg",
        label: "Cuccioli di panda",
        caption: "I panda nascono ciechi, rosa e grandi come un topo (150 g). Diventano il robusto animale che conosciamo in 6–8 settimane. La madre li tiene in braccio quasi sempre per i primi mesi — non li posa mai a terra.",
      },
      {
        image: BASE + "peoples-park.jpg",
        label: "People's Park & Teahouse",
        caption: "La Heming Teahouse apre alle 8 di mattina ed è frequentata da anziani che ci passano mezza giornata. I barbieri ambulanti offrono la 'pulizia delle orecchie' (采耳) con strumenti di bambù — un'esperienza strana e rilassante che non trovi altrove.",
      },
    ],
  },
  {
    name: "Zhangjiajie",
    chinese: "张家界",
    emoji: "🌫️",
    food: {
      image: BASE + "tujia-smoked-tofu.jpg",
      dish: "Tofu Affumicato Tujia",
      chinese: "土家烟熏豆腐",
      tip: "Il tofu Tujia viene affumicato per giorni su legno di cedro, poi grigliato su carbone e servito su spiedini con salsa di peperoncino secco. Trovi i chioschi nei mercati notturni di Wulingyuan per 2–3 yuan a spiedino. Mangialo accompagnato dal vino di riso locale (米酒, mijiu) — dolciastro e basso grado alcolico.",
    },
    slides: [
      {
        image: UNS + "photo-1558618047-3c8c76ca7d13.jpg",
        label: "Pilastri Avatar · Yuanjiajie",
        caption: "Le colonne si sono formate 380 milioni di anni fa come pianura marina, poi erosa in 3.000 torri. James Cameron venne qui nel 2008 e rimase colpito — la montagna più alta fu rinominata ufficialmente 'Avatar Hallelujah Mountain' nel 2010.",
      },
      {
        image: UNS + "photo-1600716051809-e997ca4a2d9f.jpg",
        label: "Zhangjiajie nella nebbia",
        caption: "La nebbia mattutina è parte dell'esperienza: le colonne che emergono dalle nuvole sembrano isole fluttuanti. Portati un k-way leggero — anche d'estate le nebbie sono frequenti e rendono i sentieri scivolosi.",
      },
      {
        image: BASE + "tianmen-cave.jpg",
        label: "Tianmen Cave",
        caption: "131,5 m di altezza, 57 m di larghezza — il più grande arco naturale della Cina. Si formò nel 263 d.C. I 999 gradini del 'Sentiero del Paradiso' sono quasi verticali: alcuni tocchi a terra con le mani. La funivia (7,5 km) è la più lunga del mondo.",
      },
      {
        image: BASE + "furong-ancient-town.jpg",
        label: "Furong Ancient Town",
        caption: "Le case Tujia su palafitte (diaojiaolou) sono costruite su travi a sbalzo sulla roccia — zero fondamenta nel vuoto. Il villaggio esiste da 2.000 anni e il film omonimo del 1986 lo fece conoscere alla Cina intera.",
      },
    ],
  },
  {
    name: "Guilin & Yangshuo",
    chinese: "桂林 · 阳朔",
    emoji: "⛵",
    food: {
      image: BASE + "guilin-rice-noodles.jpg",
      dish: "Guilin Rice Noodles",
      chinese: "桂林米粉",
      tip: "Brodo di ossa cotto 24 ore, spaghetti di riso, carne marinata, arachidi croccanti e chili oil. Ogni famiglia ha la propria ricetta del brodo — si mangia a colazione, fermo in piedi al bancone di un chiosco senza menu in inglese. Cerca i posti con coda di locali fuori — non sbagliare mai.",
    },
    slides: [
      {
        image: UNS + "photo-1536086058-51ab42a9ff76.jpg",
        label: "Montagne Carsiche & Fiume Li",
        caption: "Il paesaggio è sul retro della banconota da 20 yuan. Le torri carsiche impiegano 300 milioni di anni a formarsi — il calcare marino viene eroso dall'acqua piovana leggermente acida in modo verticale, creando queste forme uniche al mondo.",
      },
      {
        image: UNS + "photo-1593085512500-5d55148d6f0d.jpg",
        label: "Crociera sul Fiume Li",
        caption: "83 km da Guilin a Yangshuo tra specchi d'acqua e picchi. La mattina presto il fiume è avvolto da banchi di nebbia bassa — la vista più iconica della Cina meridionale. I cormorani addestrati alla pesca usano un anello al collo che impedisce di inghiottire i pesci.",
      },
      {
        image: BASE + "li-river-landscape.jpg",
        label: "Yangshuo & Yulong River",
        caption: "Lo Yulong è più autentico del Li: zappe di bambù spinte a mano, nessun motore. Yangshuo era un villaggio di pescatori fino agli anni '80 — i primi stranieri arrivavano dalla rotta overland Kunming–Hong Kong e lo scoprirono per caso.",
      },
    ],
  },
  {
    name: "Shanghai",
    chinese: "上海",
    emoji: "🌆",
    food: {
      image: BASE + "xiaolongbao.jpg",
      dish: "Xiaolongbao",
      chinese: "小笼包",
      tip: "Dentro ogni involucro c'è carne e un cubo di gelatina di brodo che si scioglie con il calore. La tecnica corretta: mordi un piccolo foro sul lato, aspetta 10 secondi per far uscire il vapore, bevi il brodo, poi mangia il resto. Da Jia Jia Tang Bao i migliori: arrivan freschi ogni 20 minuti, la fila inizia alle 10 di mattina.",
    },
    slides: [
      {
        image: UNS + "photo-1474181487882-5abf3f0ba6c2.jpg",
        label: "The Bund di notte",
        caption: "52 edifici coloniali europei (banche, consolati, hotel) di fronte alla skyline futuristica di Pudong. Pudong era terra agricola nel 1990 — in 30 anni è diventata la terza skyline più alta del mondo dopo Dubai e Hong Kong.",
      },
      {
        image: UNS + "photo-1545893835-abaa50cbe628.jpg",
        label: "Skyline di Pudong",
        caption: "La Shanghai Tower (632 m, seconda al mondo) ha una forma a spirale che riduce del 24% la forza del vento sulle facciate. Il World Financial Center accanto ha il famoso 'buco' trapezoidale in cima — originariamente progettato come cerchio, fu cambiato per non sembrare il sole nascente giapponese.",
      },
      {
        image: BASE + "yuyuan-garden.jpg",
        label: "Yuyuan Garden",
        caption: "Il ponte a 9 gomiti sul laghetto è costruito così per ragioni apotropaiche: si credeva che i demoni potessero muoversi solo in linea retta, e i bruschi cambi di direzione li disorientassero. Costruito nel 1559 come dono per i genitori anziani.",
      },
      {
        image: BASE + "french-concession.jpg",
        label: "French Concession",
        caption: "Sotto controllo francese dal 1849 al 1943. Qui il giovane Mao Zedong fondò il Partito Comunista nel 1921, in un appartamento anonimo di Xintiandi. Wukang Road coi suoi platani e le ville liberty è la strada più fotografata di Shanghai.",
      },
    ],
  },
];

function CityCarousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
      <div
        className="relative aspect-[4/3] select-none overflow-hidden sm:aspect-[16/9]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current].image}
            alt={slides[current].label}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

        {/* Label + caption */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 pointer-events-none"
          >
            <p className="font-display mb-1 text-sm font-semibold leading-tight text-white sm:text-lg md:text-xl">
              {slides[current].label}
            </p>
            <p className="font-body max-w-xl text-[11px] leading-relaxed text-white/80 sm:text-xs md:text-sm">
              {slides[current].caption}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-1.5 text-white transition-colors hover:bg-black/65 sm:left-3 sm:p-2"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-1.5 text-white transition-colors hover:bg-black/65 sm:right-3 sm:p-2"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-1.5 p-2 bg-card overflow-x-auto scrollbar-hide">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`relative shrink-0 rounded-lg overflow-hidden transition-all ${
              i === current ? "ring-2 ring-primary" : "opacity-60 hover:opacity-90"
            }`}
            style={{ width: 56, height: 40 }}
          >
            <img src={slide.image} alt={slide.label} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function FoodCard({ food }) {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-2xl overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-40 shrink-0">
          <img src={food.image} alt={food.dish} className="w-full h-36 sm:h-full object-cover" />
        </div>
        <div className="p-4 flex flex-col justify-center gap-1">
          <div className="flex items-center gap-2">
            <Utensils className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="font-body text-xs tracking-widest uppercase text-primary font-medium">Da mangiare qui</span>
          </div>
          <p className="font-display text-base font-semibold text-foreground">{food.dish}</p>
          <p className="font-body text-xs text-muted-foreground italic mb-1">{food.chinese}</p>
          <p className="font-body text-xs text-muted-foreground leading-relaxed">{food.tip}</p>
        </div>
      </div>
    </div>
  );
}

export default function StopsGallery() {
  const [activeCity, setActiveCity] = useState(0);
  const city = cities[activeCity];

  return (
    <section className="py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Le Tappe</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Cosa ti aspetta</h2>
        <div className="w-12 h-[2px] bg-primary mx-auto mt-6" />
      </motion.div>

      {/* City tab strip */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-8 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center scrollbar-hide">
        {cities.map((c, i) => (
          <button
            key={i}
            onClick={() => setActiveCity(i)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-body whitespace-nowrap transition-all shrink-0 ${
              activeCity === i
                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                : "bg-card text-muted-foreground border-border hover:border-primary/50"
            }`}
          >
            <span>{c.emoji}</span>
            <span>{c.name}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCity}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="space-y-5"
        >
          {/* City title */}
          <div className="flex items-baseline gap-3">
            <h3 className="font-display text-2xl font-bold text-foreground">{city.name}</h3>
            <span className="font-display text-base text-muted-foreground italic">{city.chinese}</span>
          </div>

          {/* Big carousel */}
          <CityCarousel slides={city.slides} />

          {/* Food card */}
          <FoodCard food={city.food} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
