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
    { image: BASE + "couple-xian.png", label: "Noi a Xi'an", caption: "Tra i fiori di ciliegio al Tempio del Cielo!" },
    { image: UNS + "photo-1591456983933-0c8a347f13a0.jpg", label: "Esercito di Terracotta · Fossa 1", caption: "Scoperto nel 1974 da contadini che scavavano un pozzo. Ogni soldato ha tratti del viso unici. Originariamente tutti dipinti a colori vivaci." },
    { image: UNS + "photo-1547981609-4b6bfe67ca0b.jpg", label: "Guerrieri di Terracotta · dettaglio", caption: "I ricercatori hanno smesso di scavare apposta, aspettando tecnologia che preservi i pigmenti. La fossa 3 è il 'quartier generale'." },
    { image: UNS + "photo-1558618666-fcd25c85cd64.jpg", label: "Mura Antiche di Xi'an", caption: "In cima alle mura sono larghe 15 metri — abbastanza per due carri affiancati. In bici ~90 minuti per il giro completo di 13.74 km." },
    { image: BASE + "xian-muslim-quarter.jpg", label: "Grande Moschea", caption: "Fondata nel 742 d.C., è cinese nell'architettura ma islamica nell'anima. Il Quartiere Musulmano Hui esiste da 1.300 anni." },
    { image: BASE + "dayan-pagoda.jpg", label: "Dayan Pagoda", caption: "Costruita per il monaco Xuanzang che camminò fino all'India (17 anni). La sua storia ispirò 'Il Viaggio in Occidente' con Sun Wukong." },
  ],
  food: {
    image: BASE + "roujiamo.jpg",
    dish: "Roujiamo",
    chinese: "肉夹馍",
    tip: "L'hamburger più antico del mondo, nato sotto la Dinastia Qin (221 a.C.). Carne brasata per ore in un brodo di 20+ spezie, in un pane croccante cotto al momento. Prova la versione con agnello (羊肉夹馍). Mangialo camminando, caldo di forno.",
  },
};

const A = {
  terracotta: {
    name: "Esercito di Terracotta 兵马俑",
    history: "Scoperto per caso nel marzo 1974 da un contadino che scavava un pozzo per l'irrigazione. L'imperatore Qin Shi Huang (247–210 a.C.) — il primo imperatore della Cina unificata — lo fece costruire per essere protetto nell'aldilà da un esercito eterno. Circa 8.000 soldati, 130 carri e 670 cavalli a grandezza naturale, ognuno con tratti del viso diversi (probabilmente modellati su soldati reali). Originariamente tutti dipinti con pigmenti vivaci (rosso, verde, blu, nero) — ma il colore svanisce in pochi minuti a contatto con l'ossigeno. Per questo motivo i ricercatori hanno fermato deliberatamente gli scavi in attesa di una tecnologia che conservi i pigmenti. La Fossa 1 è la più grande (230 m per 62 m). La Fossa 3 è il 'quartier generale' con i comandanti più importanti.",
    photos: [
      { image: UNS + "photo-1591456983933-0c8a347f13a0.jpg", caption: "Fossa 1 — oltre 6.000 guerrieri schierati in formazione di battaglia" },
      { image: UNS + "photo-1547981609-4b6bfe67ca0b.jpg", caption: "Dettaglio — ogni volto è unico, modellato su soldati reali" },
    ],
  },
  mosque: {
    name: "Grande Moschea di Xi'an 清真大寺",
    history: "Fondata nel 742 d.C. durante la dinastia Tang, è una delle più antiche moschee della Cina e la più grande con 12.000 m² di superficie. L'architettura è interamente cinese — padiglioni, cortili, tetti curvi, calligrafia — ma la funzione è islamica. È la prova vivente della Via della Seta: i mercanti arabi e persiani che arrivavano a Xi'an (allora Chang'an, capolinea della Via della Seta) portarono l'Islam nel VII secolo, e i loro discendenti — la comunità Hui — vivono ancora nel quartiere attorno alla moschea. Oggi 60.000 cinesi musulmani abitano la zona. Biglietto ~3€ — vale assolutamente la pena entrare nei cortili.",
    photos: [{ image: BASE + "xian-muslim-quarter.jpg", caption: "La Grande Moschea — architettura cinese, spirito islamico" }],
  },
  muslimQuarter: {
    name: "Quartiere Musulmano 回民街 & Beiyuanmen Street",
    history: "Il Quartiere Musulmano di Xi'an esiste da 1.300 anni, quando i mercanti della Via della Seta si stabilirono permanentemente nella capitale Tang. Beiyuanmen Street è il viale principale: 500 metri di bancarelle, forni di strada, venditori di spiedini e negozi di souvenir. Il cibo è halal per definizione — niente maiale, solo manzo, agnello e pollo. Da non perdere: roujiamo (肉夹馍) appena sfornato, biang biang mian (noodles larghi come cinture), yangrou paomo (pane sbriciolato nel brodo di agnello). Huajue Lane è il vicolo parallelo più tranquillo e autentico — meno turisti, più vita vera.",
    photos: [{ image: BASE + "xian-muslim-quarter.jpg", caption: "Le bancarelle del Quartiere Musulmano al tramonto" }],
  },
  dayanPagoda: {
    name: "Grande Pagoda dell'Oca Selvatica 大雁塔",
    history: "Costruita nel 652 d.C. per conservare i testi buddhisti riportati dall'India dal monaco Xuanzang dopo un viaggio epico di 17 anni a piedi (629–645). Xuanzang attraversò deserti, montagne e regni ostili per raggiungere l'India e tornare con 657 testi sacri che poi tradusse in cinese in 19 anni. La sua storia ispirò il romanzo 'Viaggio in Occidente' (西游记) con la scimmia Sun Wukong — il libro di narrativa cinese più tradotto al mondo. La pagoda originale aveva 9 piani; oggi ne rimangono 7. Lo spettacolo delle fontane musicali in North Square è gratuito e spettacolare la sera — orario indicato in loco.",
    photos: [{ image: BASE + "dayan-pagoda.jpg", caption: "La Dayan Pagoda — costruita per conservare i testi di Xuanzang" }],
  },
  cityWall: {
    name: "Mura di Xi'an 西安城墙",
    history: "Le mura di Xi'an sono tra le meglio conservate al mondo: lunghe 13.74 km, alte 12 metri, spesse 15–18 metri in cima. Costruite nella forma attuale durante la dinastia Ming (XIV sec.) su fondamenta più antiche, incorporano la logica militare dell'epoca: torrette ogni 120 metri (la distanza massima di tiro con l'arco), fossato esterno e 4 porte cardinali con doppio ingresso. In cima ci passavano due carri affiancati — oggi ci si noleggia una bici e si pedala in senso orario per il giro completo in ~90 minuti. Xi'an è famosa per la calligrafia tradizionale — visita la Shuyuanmen Street vicino alla porta sud per vedere gli artigiani al lavoro.",
    photos: [{ image: UNS + "photo-1558618666-fcd25c85cd64.jpg", caption: "Le mura di Xi'an al mattino — una delle cinte murarie più belle d'Asia" }],
  },
  roujiamo: {
    name: "Roujiamo & Street Food Xi'an – Tajia Lazhi Roujiamo",
    history: "Il roujiamo (肉夹馍) è spesso chiamato 'l'hamburger più antico del mondo': il panino piatto (mo) esiste dalla Dinastia Zhou (1046 a.C.) e la carne brasata (rou) dalla Qin (221 a.C.). Il segreto è la carne di manzo o agnello stufata per ore in un brodo con oltre 20 spezie tra cui cannella, anice stellato, pepe del Sichuan e chiodi di garofano. Si serve sminuzzata in un pane croccante appena sfornato. Tajia Lazhi Roujiamo è uno dei posti più rinomati del quartiere. Il biang biang mian (BiangBiang面) ha il carattere cinese più complesso in assoluto — impossibile da scrivere a mano senza pratica. I noodles sono larghi come una cintura e conditi con aglio, aceto, soia e pepe.",
    photos: [{ image: BASE + "roujiamo.jpg", caption: "Roujiamo appena sfornato — il panino più antico del mondo" }],
  },
  drumBellTower: {
    name: "Drum Tower & Bell Tower 鼓楼·钟楼",
    history: "Le due torri sono il cuore simbolico di Xi'an. Il Drum Tower (鼓楼), costruito nel 1380 sotto la dinastia Ming, ospitava 24 tamburi che scandivano le ore della giornata — oggi ne è rimasto uno, esposto all'interno. La Bell Tower (钟楼), costruita nel 1384, è la più grande e meglio conservata della Cina: la campana di bronzo pesava 5 tonnellate e il suo suono arrivava fino alle mura della città. Le due torri segnano il centro esatto della Xi'an antica, all'incrocio delle quattro strade cardinali. Di sera sono illuminate con migliaia di luci dorate — uno dei momenti più suggestivi della città. Drum Tower segna anche l'ingresso al Quartiere Musulmano.",
    photos: [{ image: BASE + "xian-muslim-quarter.jpg", caption: "Il Drum Tower illuminato all'ingresso del Quartiere Musulmano" }],
  },
  xiyangMarket: {
    name: "Xiyang Market 西羊市 & Defu Lane 德福巷",
    history: "Xiyang Market (西羊市, 'mercato delle pecore dell'ovest') è la versione meno turistica e più autentica del Quartiere Musulmano: qui mangiano i locali, non i turisti. I prezzi sono più bassi, le porzioni più generose e l'atmosfera più genuina di Beiyuanmen Street. Si trova in un vicolo parallelo, facilmente raggiungibile a piedi. Defu Lane (德福巷) è invece la via delle caffetterie e dei bar artigianali di Xi'an — un contrasto interessante con il cibo di strada: locali con design moderno, specialty coffee e atmosfera più rilassata. Le due zone sono complementari e vicine tra loro.",
    photos: [{ image: BASE + "xian-muslim-quarter.jpg", caption: "Xiyang Market — la versione locale e autentica del quartiere" }],
  },
  tangShow: {
    name: "Spettacolo Dinastia Tang 唐乐舞",
    history: "Lo spettacolo della Dinastia Tang (唐乐舞, 'musica e danze della Tang') è una ricostruzione delle arti performative della dinastia Tang (618–907 d.C.), considerata l'età d'oro della cultura cinese. Xi'an (allora Chang'an) era la capitale più cosmopolita del mondo con oltre 1 milione di abitanti — mercanti, diplomatici e artisti da Persia, India, Giappone e Bisanzio si incrociavano nelle sue strade. Lo spettacolo include danze di corte imperiale con costumi originali ricostruiti, musica eseguita con strumenti antichi (pipa, erhu, guzheng) e coreografie che rappresentano scene di banchetti imperiali e cerimonie rituali. È uno degli spettacoli culturali più apprezzati di tutta la Cina.",
    photos: [{ image: BASE + "dayan-pagoda.jpg", caption: "La Dayan Pagoda — simbolo della cultura Tang che ispira lo spettacolo" }],
  },
  fontane: {
    name: "Spettacolo Fontane Musicali 大雁塔北广场音乐喷泉",
    history: "La North Square della Dayan Pagoda ospita le fontane musicali più grandi dell'Asia: 3.000 ugelli sincronizzati su una superficie di 20.000 m². Lo spettacolo serale (circa 19:30, durata 20 min) è completamente gratuito — l'orario esatto viene indicato con pannelli in loco. La piazza fu costruita nel 2006 come parte della valorizzazione del distretto culturale della Dayan Pagoda. Il contrasto tra l'antica pagoda Tang del VII sec. e le fontane modernissime illuminate a LED è uno dei momenti visivamente più sorprendenti di Xi'an.",
    photos: [{ image: BASE + "dayan-pagoda.jpg", caption: "La North Square con le fontane illuminate di fronte alla Dayan Pagoda" }],
  },
};

export default function XianSection({ imgs = {} }) {
  return (
    <section id="xian" className="scroll-mt-16">
      <CityHeader
        name="Xi'An"
        chinese="西安"
        dates="22 sera – 24 Aprile"
        image={imgs.xianWall || ""}
        description="L'Esercito di Terracotta, le mura antiche in bicicletta, la Grande Moschea e la Dayan Pagoda."
      />
      <CityGallery slides={GALLERY.slides} food={GALLERY.food} />
      <CityFoodGuide
        subtitle="Xi'an è perfetta per alternare piatti robusti della Via della Seta e street food halal nei vicoli del quartiere musulmano."
        items={cityFoodGuides.xian}
      />
      <div className="mt-10 space-y-12">
        <HotelCard
          name="Xingbo Hotel (Bell Tower · Yongningmen)"
          chinese="星泊酒店（西安钟楼地铁站永宁门店）"
          address="Zona South Gate (Yongningmen), Xi'an"
        />
        <DayCard
          day="04"
          date="22 Aprile · Sera"
          title="Quartiere Musulmano & Torri"
          items={[
            { time: "Sera", icon: "transport", title: "Arrivo da Luoyang + taxi → Great Mosque", description: "Arrivo a Xi'an Nord alle 17:42. Hotel ~2.5 km. Conviene taxi direttamente alla moschea." },
            { icon: "place", title: "Great Mosque of Xi'an 清真大寺", highlight: true,
              description: "Una delle più antiche moschee della Cina. Chiude alle 20. Biglietto ~3€. Vale entrare nei cortili.",
              attraction: A.mosque },
            { icon: "place", title: "Huajue Lane → Beiyuanmen Street", highlight: true,
              description: "Vicolo autentico poi via principale del Quartiere Musulmano: bancarelle, forni di strada, street food halal.",
              attraction: A.muslimQuarter },
            { icon: "place", title: "Drum Tower & Bell Tower 鼓楼·钟楼", description: "Suggestive al tramonto e illuminate di sera. Il Drum Tower del 1384 aveva 24 tamburi che scandivano le ore — oggi ne è rimasto uno.",
              attraction: A.drumBellTower },
            { icon: "place", title: "Xiyang Market + Defu Lane", description: "Xiyang Market: meno turistico, ideale per cibo autentico. Defu Lane: famosa per caffetterie.",
              attraction: A.xiyangMarket },
            { time: "Cena", icon: "food", title: "Cena nel Quartiere — Street Food Tour", highlight: true,
              description: "Roujiamo: TAJIA LAZHI ROUJIAMO · Biang Biang Mian: ZHENGZONG KUDAI MIAN · Pane nel brodo di montone: YONG SHENG ZHAI · Fu Tea (tè tipico): ZONG QING SHAN · Liang Pi (noodles freddi): ZHU XUAN MIN DAMI MIANPI · Bing Feng (bevanda tipica di Xi'an) · Bar: SHIGUANG KAFEI · Dolce: Guihua Gao (torte con osmanto) · Piatto halal: Luxhi Liangfen (pane con salse a brodo): LAO HEJIA LUHZI.",
              attraction: A.roujiamo },
            { icon: "tip", title: "Dormire presto!", description: "Sveglia molto presto il giorno dopo per il Terracotta Army." },
          ]}
        />
        <DayCard
          day="05"
          date="23 Aprile · Giovedì"
          title="Esercito di Terracotta & Dayan Pagoda"
          items={[
            { time: "07:00–07:30", icon: "transport", title: "Partenza per Terracotta Army", description: "~1 ora. Apre 8:30, arrivare mezz'ora prima. Entrare da North Gate. Biglietti 15€/120 CNY già presi." },
            { time: "09:30–12:00", icon: "place", title: "Visita Museo dei Guerrieri 兵马俑", highlight: true,
              description: "Audioguida obbligatoria. Tre fosse con migliaia di guerrieri a grandezza naturale. Prenditi tutto il tempo — è unico al mondo.",
              attraction: A.terracotta },
            { time: "12:00–14:00", icon: "food", title: "Rientro e pranzo zona Dayan Pagoda", description: "Tanti ristoranti locali attorno al parco — zona comoda per un pranzo tranquillo." },
            { time: "14:00–18:00", icon: "place", title: "Dayan Pagoda e Parco 大雁塔", highlight: true,
              description: "¥50 ingresso tempio + parco. ¥30 extra per salire sulla pagoda. Biglietti al momento (giovedì, media stagione). Ci rilassiamo, c'è tutto il tempo.",
              attraction: A.dayanPagoda },
            { time: "17:30", icon: "place", title: "Spettacolo Dinastia Tang", highlight: true,
              description: "Preso da GetYourGuide. Arrivare alle 17:30. Punto di incontro indicato sull'app GetYourGuide.",
              attraction: A.tangShow },
            { time: "~19:30", icon: "place", title: "Spettacolo Fontane Musicali", highlight: true,
              description: "North Square. Gratuito, ~20 min. Orario indicato in loco (dovrebbe esserci alle 19:30). C'è personale a cui chiedere.",
              attraction: A.fontane },
            { time: "Cena", icon: "food", title: "Qin Yu Rou Jia Mo o Zi Wu Lu Zhang Ji Rou Jia Mo", description: "Zi Wu Lu Zhang Ji consigliato per posizione rispetto all'hotel. ~3.5 km, taxi per rientro." },
            { icon: "transport", title: "Taxi rientro hotel (~3.5 km)" },
          ]}
        />
        <DayCard
          day="06"
          date="24 Aprile · Venerdì"
          title="Mura in Bici & Partenza per Chengdu"
          items={[
            { time: "08:00", icon: "food", title: "Colazione al mercato locale", description: "Xiao Nan Men Bian Min Zao Shi (apre alle 6, chiude alle 9) — mercato locale con colazione tradizionale. Bar consigliato: WANFENG COFFEE." },
            { time: "09:00–10:30", icon: "place", title: "City Wall Cycling 🚴", highlight: true,
              description: "Noleggio bici da South Gate (~6.80€ mura + bici). 9 stazioni ufficiali. Contanti/Alipay/passaporto. 13.74 km in senso orario.",
              attraction: A.cityWall },
            { time: "10:30–11:30", icon: "place", title: "Shuyuanmen Cultural Street", description: "Xi'an è famosa per la calligrafia tradizionale. Artigiani, pennelli, carta di riso — ottimo posto per souvenir autentici." },
            { time: "12:00", icon: "food", title: "Pranzo: Ai Hua Ku Dai Mian Guan 爱骅裤带面馆", description: "Specialità della casa: noodles larghi come cinture (裤带面, kùdai miàn) con salsa piccante. Locale di quartiere frequentato da locali." },
            { time: "13:00", icon: "transport", title: "Recupero bagagli + avviamento stazione" },
            { time: "15:24", icon: "transport", title: "Treno Xi'an North → Chengdu East", highlight: true, description: "Arrivo a Chengdu Est alle 19:00. Alta velocità ~3.5 ore." },
          ]}
        />
      </div>
    </section>
  );
}
