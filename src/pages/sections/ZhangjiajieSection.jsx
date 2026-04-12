const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import CityHeader from "../../components/itinerary/CityHeader";
import DayCard from "../../components/itinerary/DayCard";
import HotelCard from "../../components/itinerary/HotelCard";
import TransportNote from "../../components/itinerary/TransportNote";
import CityGallery from "../../components/itinerary/CityGallery";

const BASE = "/assets/images/";
const UNS = "/assets/images/";

const GALLERY = {
  slides: [
    { image: UNS + "photo-1558618047-3c8c76ca7d13.jpg", label: "Pilastri Avatar · Yuanjiajie", caption: "Le colonne si sono formate 380 milioni di anni fa. James Cameron venne qui nel 2008 — la montagna più alta fu rinominata 'Avatar Hallelujah Mountain' nel 2010." },
    { image: UNS + "photo-1600716051809-e997ca4a2d9f.jpg", label: "Zhangjiajie nella nebbia", caption: "La nebbia mattutina è parte dell'esperienza: le colonne emergono dalle nuvole come isole fluttuanti. Portati un k-way leggero." },
    { image: BASE + "tianmen-cave.jpg", label: "Tianmen Cave – Porta del Paradiso", caption: "131.5 m di altezza, 57 m di larghezza — il più grande arco naturale della Cina. I 999 gradini del 'Sentiero del Paradiso' sono quasi verticali." },
    { image: BASE + "furong-ancient-town.jpg", label: "Furong Ancient Town", caption: "Le case Tujia su palafitte (diaojiaolou) sono costruite su travi a sbalzo sulla roccia — zero fondamenta nel vuoto. Il villaggio esiste da 2.000 anni." },
  ],
  food: {
    image: BASE + "tujia-smoked-tofu.jpg",
    dish: "Tofu Affumicato Tujia",
    chinese: "土家烟熏豆腐",
    tip: "Il tofu viene affumicato per giorni su legno di cedro, poi grigliato su carbone e servito con salsa di peperoncino secco. Trova i chioschi nei mercati notturni di Wulingyuan per 2–3 yuan a spiedino.",
  },
};

const A = {
  bailong: {
    name: "Bailong Elevator 百龙天梯 — L'ascensore nella roccia",
    history: "Il Bailong Elevator (百龙天梯, 'Ascensore del Drago Bianco') è l'ascensore esterno più alto e pesante al mondo: 326 metri di altezza, completamente incassato nella parete verticale di una colonna di quarzite. Costruito tra il 1999 e il 2002 con 18 mesi di lavori su pareti verticali, porta 46 persone in cima in soli 2 minuti. A lungo criticato come 'cicatrice nella natura' dal governo cinese, fu quasi demolito — poi mantenuto perché riduce il carico sui sentieri naturali. Vista dalla cabina: le colonne di Zhangjiajie che emergono dalla nebbia a 330 metri di quota.",
    photos: [{ image: UNS + "photo-1558618047-3c8c76ca7d13.jpg", caption: "Le colonne di Yuanjiajie viste dall'alto — montagne di Avatar" }],
  },
  avatar: {
    name: "Yuanjiajie · Avatar Mountains 袁家界",
    history: "Le colonne di quarzite si sono formate circa 380 milioni di anni fa da una pianura marina sollevata dalla pressione tettonica. L'erosione differenziale dell'acqua piovana — leggermente acida — ha creato oltre 3.000 pilastri, alcuni alti 800 metri. James Cameron visitò Zhangjiajie nel 2008 per l'ispirazione visiva di Avatar. La Southern Sky Column (南天一柱) fu ufficialmente rinominata 'Avatar Hallelujah Mountain' dal governo cinese nel 2010 dopo l'uscita del film. Il parco è Patrimonio UNESCO dal 1992, primo parco forestale nazionale della Cina. First Bridge Under Heaven (天下第一桥) è un ponte naturale di roccia a 357 metri d'altezza — passarci sopra è un'emozione unica.",
    photos: [
      { image: UNS + "photo-1558618047-3c8c76ca7d13.jpg", caption: "I pilastri di Yuanjiajie — le montagne originali di Avatar" },
      { image: UNS + "photo-1600716051809-e997ca4a2d9f.jpg", caption: "Le colonne nella nebbia mattutina — effetto isole fluttuanti" },
    ],
  },
  tianziMountain: {
    name: "Tianzi Mountain 天子山",
    history: "Il nome 'Tianzi' (天子, 'Figlio del Cielo') viene da Xiang Dakun, un leader della minoranza etnica Tujia che si ribellò alla dinastia Ming nel XV sec. e si autoproclamò Figlio del Cielo — fu sconfitto ma la montagna porta ancora il suo nome. L'Helong Park (贺龙公园) in cima ospita la statua bronzea del generale He Long in posa iconica. La Fairy Maid Peak (仙女峰) e l'Emperor Writing Brush Peak (御笔峰) sono i due pinnacoli più fotografati — specialmente quando la nebbia li avvolge. La funivia di discesa è la più efficiente per non tornare sui propri passi.",
    photos: [{ image: UNS + "photo-1600716051809-e997ca4a2d9f.jpg", caption: "Tianzi Mountain con i suoi pinnacoli nella foschia" }],
  },
  goldenWhip: {
    name: "Golden Whip Stream 金鞭溪",
    history: "Torrente lungo 7.5 km che scorre pianeggiante tra le colonne del parco — uno dei sentieri naturalistici più belli della Cina. Il nome viene da 'Golden Whip Rock' (金鞭岩), una colonna alta 350 metri con forma simile a una frusta imperiale dorata. Lungo il percorso vivono macachi cinesi (Macaca thibetana) abbastanza abituati ai visitatori da avvicinarsi spontaneamente. Il sentiero è ombreggiato da foresta subtropicale — temperatura sempre piacevole anche d'estate. Il trenino interno è consigliato per il ritorno: ti riporta all'ingresso in 20 minuti senza dover rifare il percorso a piedi.",
    photos: [{ image: UNS + "photo-1558618047-3c8c76ca7d13.jpg", caption: "Il Golden Whip Stream tra i pilastri del parco" }],
  },
  fuoco: {
    name: "Rituale del Fuoco Tujia 土家篝火晚会 – 72 Torri",
    history: "Le 72 Torri (七十二奇楼) è un villaggio tradizionale della minoranza etnica Tujia — una delle 56 etnie ufficialmente riconosciute in Cina. I Tujia abitano le montagne del Hunan da oltre 2.000 anni con una cultura distinta: lingua propria, architettura su palafitte, danze rituali e una speciale cerimonia del fuoco usata tradizionalmente per allontanare gli spiriti maligni e celebrare i raccolti. Lo spettacolo serale (19:30, ~60 min) include danze tradizionali, musica di tamburi e cerchi di fuoco attorno al falò centrale. Si può cenare nel villaggio con piatti Tujia durante lo spettacolo.",
    photos: [{ image: BASE + "furong-ancient-town.jpg", caption: "Le 72 Torri al tramonto — villaggio tradizionale Tujia" }],
  },
  tianmen: {
    name: "Tianmen Cave · Porta del Paradiso 天门洞",
    history: "Tianmen Cave (天门洞, 'Porta del Cielo') è il più grande arco naturale della Cina: 131.5 m di altezza, 57 m di larghezza, 60 m di profondità. Si formò intorno al 263 d.C. per il collasso naturale di una grotta carsica — l'evento fu considerato un presagio così importante che cambiò il nome dell'intera contea in 'Tianmen' (Porta del Cielo). I 999 gradini (tianmen shan tian ti) sono quasi verticali — il numero 9 simboleggia l'eternità nella cultura cinese. La funivia (7.5 km) è la più lunga al mondo. PRO TIP FONDAMENTALE: fai PRIMA la West Line (skywalk incluso), poi scendi alla Porta. Sopra c'è meno gente al mattino — sotto le scale sono gestibili anche più tardi.",
    photos: [{ image: BASE + "tianmen-cave.jpg", caption: "Tianmen Cave — il grande arco naturale con i 999 gradini" }],
  },
  skywalk: {
    name: "Tianmen Glass Skywalk 天门山玻璃栈道",
    history: "La passerella in vetro (玻璃栈道) è incassata nella parete verticale della montagna a 1.400 metri di quota, con 1.6 km di percorso. Il fondo è in pannelli di vetro temperato da 6 cm — si cammina letteralmente nel vuoto con vista sulle foreste 600 metri sotto. Inaugurata nel 2011, fu una delle prime passerelle in vetro della Cina e aprì la strada a decine di imitatori. L'accesso è incluso nel biglietto della West Line. Non è obbligatorio ma fortemente consigliato — i guanti di cotone sono forniti per proteggere il vetro. Non adatta a chi soffre di vertigini.",
    photos: [{ image: BASE + "tianmen-cave.jpg", caption: "La passerella in vetro a 1.400 m — camminare nel vuoto" }],
  },
  furong: {
    name: "Furong Ancient Town 芙蓉镇",
    history: "Villaggio della minoranza etnica Tujia esistente da oltre 2.000 anni, costruito interamente su palafitte (diaojiaolou, 吊脚楼) agganciate alla roccia senza fondamenta nel vuoto. La tecnica costruttiva Tujia è unica: le travi vengono inserite nelle fessure della roccia e i piani superiori sporgono nel vuoto fino a 3 metri. Il villaggio divenne famoso in tutta la Cina grazie al film omonimo del regista Xie Jin (1986) — uno dei capolavori del cinema cinese. La cascata di Furong (芙蓉瀑布), alta 60 metri, attraversa il centro abitato creando un paesaggio unico. Assaggia i rice tofu (米豆腐) locali: tofu di riso servito con salsa piccante Tujia.",
    photos: [{ image: BASE + "furong-ancient-town.jpg", caption: "Le palafitte Tujia di Furong con la cascata alle spalle" }],
  },
};

export default function ZhangjiajieSection({ imgs = {} }) {
  return (
    <section id="zhangjiajie" className="scroll-mt-16">
      <CityHeader
        name="Zhangjiajie"
        chinese="张家界"
        dates="26 sera – 29 Aprile"
        image={imgs.zhangjiajie || ""}
        description="Le montagne sospese di Avatar, la Porta del Paradiso e il villaggio incantato di Furong."
      />
      <CityGallery slides={GALLERY.slides} food={GALLERY.food} />
      <div className="mt-10 space-y-12">
        <HotelCard
          name="Sky Retreat Hotel 嘉宁酒店"
          chinese="天门奥莱广场南门口美食街店"
          address="24th Floor, Building 3, Tianmen Central Plaza, Jiefang North Road, Yongding District, Zhangjiajie"
        />
        <TransportNote
          notes={["28 aprile – Zhangjiajie ↔ Furong: Andata prima delle 15:00, rientro entro le 19:00."]}
        />
        <DayCard
          day="08"
          date="26 Aprile · Sera"
          title="Arrivo a Zhangjiajie"
          items={[
            { icon: "transport", title: "Arrivo + taxi → hotel", description: "~15 minuti. Hotel al 24° piano con vista sulle montagne." },
            { icon: "food", title: "Cena: Nanmenkou", description: "Mercato street food vicino all'hotel — piatti Tujia e street food huanese." },
          ]}
        />
        <DayCard
          day="09"
          date="27 Aprile · Lunedì"
          title="Montagne di Avatar 🏔️"
          items={[
            { time: "10:00", icon: "transport", title: "Ingresso porta Est + bus → Bailong Elevator", highlight: true,
              description: "L'ascensore esterno più alto del mondo: 326 m incassato nella roccia, salita in 2 minuti.",
              attraction: A.bailong },
            { time: "10:30–12:00", icon: "place", title: "Yuanjiajie – Avatar Mountains 袁家界", highlight: true,
              description: "Avatar Hallelujah Mountain, First Bridge Under Heaven (357 m d'altezza!), Back Garden.",
              attraction: A.avatar },
            { time: "12:00–13:00", icon: "place", title: "Yangjiajie (funivia panoramica)", description: "Bus verso Yangjiajie. Funivia su e giù per il panorama dalla cabina — poi bus per Tianzi Mountain." },
            { time: "Pranzo veloce", icon: "food", title: "Pranzo all'interno del parco", description: "Ristoranti self-service all'interno. Prezzi nella norma per parco turistico." },
            { time: "13:30–14:45", icon: "place", title: "Tianzi Mountain 天子山", highlight: true,
              description: "Helong Park, Fairy Maid Peak, Emperor Writing Brush Peak.",
              attraction: A.tianziMountain },
            { time: "14:45–15:15", icon: "transport", title: "Funivia Tianzi (discesa)" },
            { time: "15:30–17:30", icon: "place", title: "Golden Whip Stream 金鞭溪", highlight: true,
              description: "Sentiero pianeggiante lungo il torrente tra le colonne. Macachi lungo il percorso. Trenino per il ritorno (CONSIGLIATO).",
              attraction: A.goldenWhip },
            { time: "18:15", icon: "transport", title: "Taxi → 72 Torri Wulingyuan" },
            { time: "19:30", icon: "place", title: "🔥 Rituale del Fuoco Tujia", highlight: true,
              description: "Spettacolo tradizionale in piazza Bonfire. Ingresso 120 Yuan. Si cena nel villaggio durante lo spettacolo.",
              attraction: A.fuoco },
          ]}
        />
        <DayCard
          day="10"
          date="28 Aprile · Martedì"
          title="Porta del Paradiso & Furong"
          items={[
            { time: "07:30", icon: "transport", title: "Taxi → Tianmen Mountain Cableway Station", description: "~15 min. Mettersi in coda prima dell'apertura (8:00). La funivia è la più lunga del mondo (7.5 km)." },
            { time: "09:00–11:00", icon: "place", title: "⚠️ PRIMA: West Line + Glass Skywalk", highlight: true,
              description: "Fai PRIMA la West Line (meno gente al mattino). Skywalk in vetro a 1.400 m: cammina nel vuoto sulla parete verticale.",
              attraction: A.skywalk },
            { time: "11:30–13:00", icon: "place", title: "Tianmen Cave 天门洞 – Porta del Paradiso", highlight: true,
              description: "Bus interno + scale mobili → 999 gradini → l'arco naturale più grande della Cina (131.5 m di altezza).",
              attraction: A.tianmen },
            { time: "13:30", icon: "transport", title: "Taxi → stazione ZhangJiaJie Xi (West)", description: "~10 min." },
            { time: "Pomeriggio", icon: "place", title: "Alta velocità → Furongzhen 芙蓉镇", highlight: true,
              description: "23 min di treno. ~3 ore di visita: cascata → strada Tujia → palafitte → passerella fiume. ~4 treni/h per il ritorno. Andata prima delle 15:00.",
              attraction: A.furong },
          ]}
        />
      </div>
    </section>
  );
}
