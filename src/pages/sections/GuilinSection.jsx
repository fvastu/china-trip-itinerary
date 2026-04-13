import CityHeader from "../../components/itinerary/CityHeader";
import DayCard from "../../components/itinerary/DayCard";
import HotelCard from "../../components/itinerary/HotelCard";
import TransportNote from "../../components/itinerary/TransportNote";
import CityGallery from "../../components/itinerary/CityGallery";
import CityFoodGuide from "../../components/itinerary/CityFoodGuide";
import { cityFoodGuides } from "../../components/itinerary/cityFoodGuides";

const BASE = "/assets/images/";
const UNS = "/assets/images/";

const GALLERY = {
  slides: [
    { image: BASE + "couple-guilin.png", label: "Noi a Guilin", caption: "Con il drago sul fiume Li tra le montagne carsiche!" },
    { image: UNS + "photo-1536086058-51ab42a9ff76.jpg", label: "Montagne Carsiche & Fiume Li", caption: "Il paesaggio è sul retro della banconota da 20 yuan. Le torri carsiche impiegano 300 milioni di anni a formarsi — erosa verticalmente dall'acqua piovana leggermente acida." },
    { image: UNS + "photo-1593085512500-5d55148d6f0d.jpg", label: "Crociera sul Fiume Li", caption: "83 km tra specchi d'acqua e picchi. I cormorani addestrati usano un anello al collo che impedisce di inghiottire i pesci — tradizione millenaria." },
    { image: BASE + "li-river-landscape.jpg", label: "Yangshuo & Yulong River", caption: "Lo Yulong è più autentico del Li: zappe di bambù a mano, nessun motore. Yangshuo era un villaggio di pescatori fino agli anni '80." },
  ],
  food: {
    image: BASE + "guilin-rice-noodles.jpg",
    dish: "Guilin Rice Noodles",
    chinese: "桂林米粉",
    tip: "Brodo di ossa cotto 24 ore, spaghetti di riso, carne marinata, arachidi croccanti e chili oil. Ogni famiglia ha la propria ricetta del brodo. Si mangia a colazione, fermo in piedi al bancone. Cerca i posti con coda di locali fuori.",
  },
};

const A = {
  elephantHill: {
    name: "Elephant Trunk Hill 象鼻山",
    history: "Simbolo assoluto di Guilin, la collina ha la forma di un elefante che abbassa la proboscide a bere dal fiume Li — la somiglianza è sorprendentemente precisa. Si formò 360 milioni di anni fa ed è interamente composta da calcare marino. La leggenda vuole che fosse un elefante celeste sceso sulla terra durante una guerra divina: guarito dai contadini locali dopo una ferita, rimase a bere per l'eternità diventando parte del paesaggio. La grotta nell'arco si chiama 'Water Moon Cave' (水月洞): al chiaro di luna riflette una luna piena perfetta nell'acqua del fiume — una delle scene più fotografate di tutta la Cina. Vale la vista anche solo dall'esterno, ma l'ingresso è a pagamento.",
    photos: [{ image: UNS + "photo-1536086058-51ab42a9ff76.jpg", caption: "Elephant Trunk Hill — l'elefante che beve dal fiume Li" }],
  },
  pagode: {
    name: "Pagode del Sole e della Luna 日月双塔",
    history: "Le due pagode gemelle sul lago Rong (榕湖) sono tra le più fotografate di Guilin: la Pagoda del Sole (日塔) in bronzo dorato e la Pagoda della Luna (月塔) in vetro azzurro, collegate da un tunnel subacqueo. La Pagoda del Sole è l'unica in Cina costruita interamente in bronzo. Di notte si riflettono perfettamente nel lago creando un'immagine speculare che moltiplica la bellezza. Il lago Rong è circondato da banyan trees monumentali — alcuni con oltre 100 anni di età. La passeggiata notturna attorno ai due laghi (Rong e Shan) con le illuminazioni è il momento più bello della visita a Guilin.",
    photos: [{ image: UNS + "photo-1536086058-51ab42a9ff76.jpg", caption: "Le pagode del Sole e della Luna riflesse nel lago Rong" }],
  },
  liRiver: {
    name: "Fiume Li & Paesaggio Carsico 漓江",
    history: "Il Fiume Li scorre per 83 km tra Guilin e Yangshuo attraverso il paesaggio carsico più famoso al mondo — quello stampato sul retro della banconota cinese da 20 yuan. Le torri carsiche impiegano 300 milioni di anni a formarsi: il calcare marino emerso dalla Tetide (l'antico oceano) viene eroso dall'acqua piovana leggermente acida in modo verticale, creando picchi impossibili da replicare altrove. I pescatori con i cormorani sono una tradizione millenaria Zhuang: ogni cormorano ha un anello allentato al collo che gli impedisce di inghiottire i pesci più grandi. Il pescatore usa il bordo della barca per far risalire il pesce dalla gola dell'uccello.",
    photos: [{ image: UNS + "photo-1593085512500-5d55148d6f0d.jpg", caption: "La crociera sul Fiume Li tra i picchi carsici" }],
  },
  riceNoodles: {
    name: "Guilin Rice Noodles 桂林米粉",
    history: "I Guilin Rice Noodles (桂林米粉) sono il piatto identitario di Guilin — si dice che ogni guilinese mangi noodles di riso per colazione ogni singolo giorno della propria vita. Il brodo è la parte fondamentale: cuoce per 24+ ore con ossa di manzo, spezie (cannella, anice stellato, chiodi di garofano, liquirizia) e il segreto di ogni famiglia. I noodles di riso sono sottili, scivolosi e quasi trasparenti. Si personalizza al bancone con arachidi fritte, cipollotto, coriandolo, chili oil e carne marinata (manzo, maiale o pollo). Regola d'oro: segui la coda di locali. Nessun menu in inglese = locale autentico.",
    photos: [{ image: BASE + "guilin-rice-noodles.jpg", caption: "Guilin Rice Noodles con brodo cotto 24 ore" }],
  },
  yulong: {
    name: "Yulong River & Yangshuo 遇龙河",
    history: "Lo Yulong River ('fiume del drago incontrato') è il corso d'acqua più pittoresco della zona di Yangshuo: niente motori, niente tour di massa, solo zappe di bambù spinte a mano da pescatori locali. Le e-bike su pista dedicata sono il modo perfetto per esplorarlo: 12 km di ciclabile asfaltata lungo il fiume, completamente pianeggiante con vista sui karst. Yangshuo era un piccolo villaggio di pescatori Zhuang fino agli anni '80 — i primi backpacker occidentali lo scoprirono per caso lungo la rotta overland da Kunming a Hong Kong e ci rimasero mesi. Oggi è un mix di autenticità e comfort, con i migliori caffè e ristoranti dell'intera Guangxi.",
    photos: [{ image: BASE + "li-river-landscape.jpg", caption: "Lo Yulong River a Yangshuo — karst riflessi nell'acqua" }],
  },
  gongnong: {
    name: "Gongnong Bridge 工农桥 & Big Banyan Tree 大榕树",
    history: "Il Gongnong Bridge (工农桥, 'Ponte dei lavoratori e contadini') è un antico ponte in pietra a schiena d'asino sul fiume Yulong — il punto fotografico più iconico della zona. La luce del mattino illumina i karst specchiati nell'acqua ferma con bufali d'acqua sulle rive. Posizionati di lato al ponte (non sopra) per la foto perfetta. Il Big Banyan Tree (大榕树) a 3 km è un fico sacro millenario — 1.400 anni di età, circumferenza del tronco 7 metri, chioma che copre 100 m². È menzionato in una poesia Song del X sec. e considerato 'protettore del villaggio'. Le radici aeree scendono fino al suolo creando un labirinto naturale.",
    photos: [{ image: UNS + "photo-1593085512500-5d55148d6f0d.jpg", caption: "Il Gongnong Bridge riflesso nel fiume Yulong al mattino" }],
  },
};

export default function GuilinSection({ imgs = {} }) {
  return (
    <section id="guilin" className="scroll-mt-16">
      <CityHeader
        name="Guilin & Yangshuo"
        chinese="桂林 · 阳朔"
        dates="29 – 30 Aprile"
        image={imgs.guilinNight || imgs.guilin || ""}
        description="Paesaggi da cartolina: montagne carsiche, il fiume Li, e-bike lungo lo Yulong e la magia di Yangshuo."
      />
      <CityGallery slides={GALLERY.slides} food={GALLERY.food} />
      <CityFoodGuide
        subtitle="A Guilin e Yangshuo vale la pena mischiare il grande classico dei noodles con piatti di fiume, bevande locali e dolci freschi."
        items={cityFoodGuides.guilin}
      />
      <div className="mt-10 space-y-12">
        <HotelCard
          name="Xiangbishan Port House – City Core Hotel"
          chinese="象鼻山港舍City core漫步·城市中心酒店(桂林两江四湖店)"
          address="No. 28 Zhongshan Middle Road, Xiufeng District, Guilin · Tel: +86-773-2882288"
        />
        <TransportNote
          notes={[
            "29 aprile – Treno ZhangJiaJie Xi → Guilin ore 7:17, arrivo 14:27. Scendere alla SECONDA stazione, non quella North.",
            "30 aprile – Treno Guilin → Yangshuo ore 7:50, arrivo 8:14. Al ritorno conviene taxi (~20 min).",
            "30 aprile – Volo Guilin → Shanghai ore 20:25, arrivo 23:05.",
          ]}
        />
        <DayCard
          day="11"
          date="29 Aprile · Mercoledì"
          title="Guilin: Laghi, Pagode & Rice Noodles"
          items={[
            { time: "07:17", icon: "transport", title: "Treno da ZhangJiaJie Xi → Guilin", description: "Taxi presto per la stazione. Arrivo a Guilin intorno alle 14:27." },
            { time: "~15:00", icon: "place", title: "Elephant Trunk Hill 象鼻山", highlight: true,
              description: "Simbolo di Guilin — la collina che sembra un elefante che beve. Vale anche solo dall'esterno.",
              attraction: A.elephantHill },
            { icon: "place", title: "Rong Lake + Pagode del Sole e della Luna 日月双塔", highlight: true,
              description: "Pagode in bronzo e vetro riflesse nel lago. Di notte sono illuminatissime — il momento più bello.",
              attraction: A.pagode },
            { icon: "place", title: "Shan Lake + vicoli storici", description: "Passeggiata tranquilla tra i due laghi illuminati." },
            { time: "Cena", icon: "food", title: "Guilin Rice Noodles 🍜", highlight: true,
              description: "Il piatto identitario di Guilin. Brodo cotto 24 ore. Cerca il posto con più locali in coda.",
              attraction: A.riceNoodles },
            { icon: "place", title: "Passeggiata notturna intorno ai laghi", description: "I laghi illuminati di notte con le pagode gemelle riflesse sono magici." },
          ]}
        />
        <DayCard
          day="12"
          date="30 Aprile · Giovedì"
          title="Yangshuo in e-bike & Volo per Shanghai"
          items={[
            { time: "07:50", icon: "transport", title: "Treno Guilin → Yangshuo", description: "Primo treno. Arrivo 8:14. Taxi ~1 ora fino a Shuiedi Dock (Yulong River)." },
            { icon: "place", title: "Bamboo Raft su Yulong River 🛶", highlight: true,
              description: "Zappa di bambù spinta a mano. Prenotare tramite hotel o sul posto a Shuiedi Dock.",
              attraction: A.liRiver },
            { icon: "place", title: "E-bike giro Yulong River 🚲", highlight: true,
              description: "E-bike ~4–5€. 2 ore, 12 km su pista dedicata pianeggiante. Controlla la batteria prima di partire!",
              attraction: A.yulong },
            { icon: "place", title: "Gongnong Bridge (3 km) + Big Banyan Tree (6 km)", highlight: true,
              description: "Ponte rosso iconico con karst riflessi (foto di LATO, non sopra) + albero sacro di 1.400 anni.",
              attraction: A.gongnong },
            { icon: "place", title: "Yulong Bridge (9 km)", description: "Antico ponte ad arco, riflessi fiume. Spot da cartolina — picnic relax." },
            { time: "Max 14:30", icon: "transport", title: "Partenza da Yangshuo → rientro Guilin", description: "Taxi (~1 ora). Rientrare max 16:30–17:00 per i bagagli." },
            { time: "20:25", icon: "transport", title: "✈️ Volo Guilin → Shanghai", highlight: true, description: "Arrivo Shanghai Pudong alle 23:05." },
          ]}
        />
      </div>
    </section>
  );
}
