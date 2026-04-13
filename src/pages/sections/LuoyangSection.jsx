import CityHeader from "../../components/itinerary/CityHeader";
import DayCard from "../../components/itinerary/DayCard";
import HotelCard from "../../components/itinerary/HotelCard";
import CityGallery from "../../components/itinerary/CityGallery";
import CityFoodGuide from "../../components/itinerary/CityFoodGuide";
import { cityFoodGuides } from "../../components/itinerary/cityFoodGuides";

const BASE = "/assets/images/";
const UNS = "/assets/images/";

const GALLERY = {
  slides: [
    { image: UNS + "photo-1535961652354-923cb08225a7.jpg", label: "Grotte di Longmen", caption: "100.000+ statue buddhiste in 2.345 grotte. Il Buddha principale è alto 17 metri e si dice abbia il volto dell'imperatrice Wu Zetian." },
    { image: UNS + "photo-1555990793-da11153b6c99.jpg", label: "Longmen lato ovest", caption: "Il lato ovest è il migliore: la luce del pomeriggio illumina i bassorilievi e si riflette sul fiume Yi." },
  ],
  food: {
    image: BASE + "longmen-water-banquet.jpg",
    dish: "Banchetto dell'Acqua",
    chinese: "水席",
    tip: "24 portate tutte liquide o in brodo, servite in sequenza continua. Nasce sotto la dinastia Tang per la corte di Wu Zetian. Il ristorante Zhen Bu Tong vicino alle grotte lo serve da generazioni.",
  },
};

const A = {
  longmen: {
    name: "Grotte di Longmen 龙门石窟",
    history: "Patrimonio UNESCO dal 2000, le grotte di Longmen contengono oltre 100.000 statue buddhiste scolpite nel calcare tra il V e l'VIII secolo d.C. Il nome 'Longmen' significa 'Porta del Drago' — la gola del fiume Yi con le due colline simmetriche assomiglia a un portale. La grotta di Fengxian, commissionata dall'imperatrice Wu Zetian nel 675, ospita il Buddha Vairocana alto 17 metri: gli storici credono che il volto sereno sia modellato sulla stessa Wu Zetian, unica donna imperatore della storia cinese. Consiglio pratico: visita SOLO il lato ovest (è il meglio). Il lato est è molto meno impressionante. Inizia da Binyang Middle Cave e finisci a Fengxian Temple.",
    photos: [
      { image: UNS + "photo-1535961652354-923cb08225a7.jpg", caption: "Vista panoramica sulle grotte lungo il fiume Yi" },
      { image: UNS + "photo-1555990793-da11153b6c99.jpg", caption: "Dettaglio delle sculture — ogni figura ha tratti unici" },
    ],
  },
  oldTown: {
    name: "Old Town di Luoyang 洛邑古城",
    history: "Luoyang fu la capitale di 13 dinastie cinesi per oltre 1.500 anni — inclusa la prima capitale della storia cinese, la Xia (2070 a.C.). La Lijingmen Gate (丽景门) è la porta ricostruita che simboleggia l'ingresso all'Old Town: l'originale risaliva alla Tang Dynasty. La Shizi Street ('Via della Croce') è il cuore autentico: bancarelle di street food, artigiani, vita locale a ritmo antico. Non c'è molto da visitare come 'attrazione', ma l'atmosfera di un pranzo al volo qui vale tantissimo. Ideale per assaggiare il tang cuo liji (maiale in agrodolce) e i panini di riso locali prima di ripartire.",
    photos: [{ image: UNS + "photo-1535961652354-923cb08225a7.jpg", caption: "La Lijingmen Gate — porta storica dell'Old Town" }],
  },
  banchetto: {
    name: "Banchetto dell'Acqua 水席 – Zhen Bu Tong",
    history: "Il Banchetto dell'Acqua (水席, shuǐxí) è il piatto più famoso di Luoyang: 24 portate tutte a base di brodo, zuppe o salse — servite in successione continua 'come una corrente d'acqua', da cui il nome. Nacque durante la dinastia Tang (618–907 d.C.) per la corte dell'imperatrice Wu Zetian, che aveva gusti raffinati e amava i sapori agrodolci. Il ristorante Zhen Bu Tong (真不同, 'veramente unico') esiste da generazioni vicino alle grotte di Longmen ed è il posto più autentico per assaggiarlo. Il piatto di punta è la zuppa di peonia (牡丹燕菜), presentata con una peonia commestibile in cima.",
    photos: [{ image: BASE + "longmen-water-banquet.jpg", caption: "Il banchetto dell'acqua — 24 portate tutte in brodo" }],
  },
};

export default function LuoyangSection({ imgs = {} }) {
  return (
    <section id="luoyang" className="scroll-mt-16">
      <CityHeader
        name="Luoyang"
        chinese="洛阳"
        dates="21 sera – 22 Aprile"
        image={imgs.longmen || ""}
        description="L'antica capitale dalle mille grotte: i capolavori buddhisti di Longmen e il fascino autentico della Old Town."
      />
      <CityGallery slides={GALLERY.slides} food={GALLERY.food} />
      <CityFoodGuide
        subtitle="A Luoyang conviene puntare su cucina storica Tang, zuppe eleganti e qualche snack regionale meno famoso ma molto locale."
        items={cityFoodGuides.luoyang}
      />
      <div className="mt-10 space-y-12">
        <HotelCard
          name="Lavande Hotel (Luoyi Ancient City)"
          chinese="麗枫酒店(洛阳洛邑古城丽景门十字街店)"
          address="No. 169, Jiudu East Road, Laocheng District, Luoyang City"
        />
        <DayCard
          day="04"
          date="22 Aprile · Mercoledì"
          title="Grotte di Longmen & Old Town"
          items={[
            { time: "08:00–10:30", icon: "place", title: "Grotte di Longmen 龙门石窟", highlight: true,
              description: "~20 min di auto a sud. Solo lato ovest. Biglietti ~10€ (trip.com o sul posto). Percorso pedonale unico con cartelli in inglese.",
              attraction: A.longmen },
            { icon: "place", title: "Da vedere: Binyang Middle Cave + Fengxian Temple",
              description: "La testa del Buddha di Fengxian è il pezzo forte. 1–2 grotte minori a scelta." },
            { time: "Pomeriggio", icon: "place", title: "Old Town – Lijingmen Gate + Shizi Street", highlight: true,
              description: "Porta storica, bancarelle, snack locali. Il cuore autentico di Luoyang.",
              attraction: A.oldTown },
            { time: "Pranzo", icon: "food", title: "Banchetto dell'Acqua – Zhen Bu Tong 水席", highlight: true,
              description: "24 portate in brodo, piatto iconico di Luoyang. Il ristorante più autentico vicino alle grotte.",
              attraction: A.banchetto },
            { time: "15:30–16:00", icon: "transport", title: "Treno alta velocità → Xi'An", highlight: true,
              description: "Arrivo a Xi'An entro le 19:00. Hotel vicino South Gate." },
          ]}
        />
      </div>
    </section>
  );
}
