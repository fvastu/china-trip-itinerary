import CityHeader from "../../components/itinerary/CityHeader";
import DayCard from "../../components/itinerary/DayCard";
import HotelCard from "../../components/itinerary/HotelCard";
import TransportNote from "../../components/itinerary/TransportNote";
import CityGallery from "../../components/itinerary/CityGallery";

const BASE = "/assets/images/";
const UNS = "/assets/images/";

const GALLERY = {
  slides: [
    { image: UNS + "photo-1474181487882-5abf3f0ba6c2.jpg", label: "The Bund di notte", caption: "52 edifici coloniali europei di fronte alla skyline futuristica di Pudong. Pudong era terra agricola nel 1990 — in 30 anni è diventata la terza skyline più alta al mondo." },
    { image: UNS + "photo-1545893835-abaa50cbe628.jpg", label: "Skyline di Pudong", caption: "La Shanghai Tower (632 m) ha una forma a spirale che riduce del 24% la forza del vento. Il buco trapezoidale del World Financial Center fu cambiato dal cerchio originale per non sembrare il sole nascente giapponese." },
    { image: UNS + "photo-1570839170498-5a57acac0ab1.jpg", label: "Yuyuan Garden", caption: "Il ponte a 9 gomiti è costruito così perché si credeva i demoni si muovessero solo in linea retta. Costruito nel 1559 come dono per i genitori anziani." },
    { image: UNS + "photo-1570839170498-5a57acac0ab1.jpg", label: "French Concession", caption: "Sotto controllo francese dal 1849 al 1943. Qui il giovane Mao fondò il Partito Comunista nel 1921 in un appartamento anonimo di Xintiandi." },
  ],
  food: {
    image: BASE + "xiaolongbao.jpg",
    dish: "Xiaolongbao",
    chinese: "小笼包",
    tip: "Dentro ogni involucro c'è carne e un cubo di gelatina di brodo che si scioglie con il calore. Tecnica: mordi un piccolo foro, aspetta 10 sec per il vapore, bevi il brodo, poi mangia il resto. Da Jia Jia Tang Bao i migliori — freschi ogni 20 minuti, fila dalle 10 di mattina.",
  },
};

const A = {
  swfc: {
    name: "Shanghai World Financial Center – Piano 100 环球金融中心",
    history: "Il World Financial Center (492 m, 101 piani) ospita al piano 100 il 'Skywalk 100': una passerella in vetro a 474 metri di quota con vista a 360° su tutta Shanghai. L'edificio è famoso per il buco trapezoidale in cima — originariamente progettato circolare, fu modificato dal governo cinese perché assomigliava al sole nascente giapponese (simbolo militarista). Costruito tra il 1997 e il 2008, è circondato dalla Jin Mao Tower e dalla Shanghai Tower (la più alta d'Asia). I biglietti si acquistano quasi certamente solo sul posto — arriva presto per evitare code.",
    photos: [{ image: UNS + "photo-1545893835-abaa50cbe628.jpg", caption: "Il World Financial Center con il buco trapezoidale — il piano 100 è in cima" }],
  },
  bund: {
    name: "The Bund 外滩",
    history: "Il Bund è il lungofiume coloniale di Shanghai: 1.5 km di 52 edifici in stile Art Déco, neoclassico e gotico costruiti tra il 1860 e il 1940 da britannici, francesi, americani e altri. Era il cuore finanziario dell'Asia — le banche più potenti del mondo avevano qui la propria sede. Di fronte c'è Pudong: nel 1990 era solo campagna e pesca, oggi è la terza skyline più alta al mondo. La vista notturna dal Bund è uno dei contrasti più iconici del pianeta: 100 anni di architettura coloniale vs 30 anni di sviluppo record. Il rock Bund (la parte meno turistica a nord) è più tranquillo e altrettanto bello.",
    photos: [
      { image: UNS + "photo-1474181487882-5abf3f0ba6c2.jpg", caption: "The Bund di notte — 52 edifici coloniali di fronte a Pudong" },
      { image: UNS + "photo-1545893835-abaa50cbe628.jpg", caption: "La skyline di Pudong — da campagna a terza skyline del mondo in 30 anni" },
    ],
  },
  yuyuan: {
    name: "Yuyuan Garden 豫园",
    history: "Costruito tra il 1559 e il 1577 dal funzionario Ming Pan Yunduan come dono per i suoi genitori anziani — 18 anni di lavori per 2 ettari di giardino classico cinese. Il principio organizzativo è quello del 'giardino come paesaggio in miniatura': laghi, padiglioni, rocce artificiali (tai hu stones), corridoi coperti e muri a drago. Il ponte a 9 gomiti è costruito ad angoli bruschi perché si credeva i demoni si muovessero solo in linea retta — la svolta li disorientava. Adiacente c'è il City God Temple (城隍庙) del 1403, centro spirituale dell'Old Town. Tutto il distretto attorno è uno dei mercati di street food più densi di Shanghai.",
    photos: [{ image: UNS + "photo-1570839170498-5a57acac0ab1.jpg", caption: "Il ponte a 9 gomiti e il padiglione sul lago dello Yuyuan" }],
  },
  jiaJia: {
    name: "Jia Jia Tang Bao 佳家汤包",
    history: "Considerato da molti shanghaiani il miglior posto in assoluto per gli xiaolongbao (小笼包, ravioli al vapore con brodo interno). Il segreto è la semplicità: solo carne di maiale e brodo di ossa, nessun condimento aggiuntivo che distragga. I ravioli vengono fatti a mano ogni 20 minuti — quando finisce il lotto si aspetta il successivo, la fila di locali inizia alle 10 di mattina. Tecnica di consumo obbligatoria: metti il raviolo nel cucchiaio di ceramica, mordi un angolino, aspetta 10 secondi che il vapore si raffreddi, succhia il brodo, poi mangia il resto. Mai mordere direttamente — il brodo a 80°C ti scotta la gola.",
    photos: [{ image: BASE + "xiaolongbao.jpg", caption: "Xiaolongbao freschi — fatti a mano ogni 20 minuti" }],
  },
  frenchConcession: {
    name: "French Concession & Wukang Road 法租界",
    history: "La Concessione Francese era sotto controllo francese dal 1849 al 1943, quando fu restituita alla Cina durante la Seconda Guerra Mondiale. Era la zona più elegante di Shanghai coloniale — ville, café, negozi di lusso, il Lyceum Theatre. I platani che allineano le strade furono importati dalla Francia per evocare Parigi. Wukang Road (武康路), con la sua curvatura elegante e le ville Liberty, è la via più fotografata di Shanghai. Xintiandi (新天地) fu ristrutturato negli anni 2000 mantenendo i shikumen (石库门, case con portoni di pietra) originali — nel numero 76 di Xingye Road, Mao Zedong e 12 delegati fondarono il PCC nel luglio 1921.",
    photos: [{ image: UNS + "photo-1570839170498-5a57acac0ab1.jpg", caption: "Wukang Road — villa Normandie e i platani francesi" }],
  },
  tianzifang: {
    name: "Tianzifang 田子坊",
    history: "Tianzifang è un labirinto di vicoli (longtang, 弄堂) nel cuore della ex Concessione Francese, trasformati a partire dal 2000 in un distretto creativo con gallerie d'arte, boutique di design, bar e ateliers. I vicoli shikumen originali degli anni '30 sono stati preservati — le case in mattone grigio con portoni in pietra sono il simbolo dell'architettura residenziale shanghaiana. Niente in comune con i centri commerciali: qui le botteghe sono a misura d'uomo, in spazi di 20 m², gestite da artigiani e designer indipendenti. È l'opposto del lusso di Taikoo Li — autenticità creativa in piccoli spazi.",
    photos: [{ image: UNS + "photo-1570839170498-5a57acac0ab1.jpg", caption: "I vicoli di Tianzifang — il quartiere creativo della French Concession" }],
  },
  thousandTrees: {
    name: "1000 Trees 千树",
    history: "Inaugurato nel 2021, è l'edificio più discusso della nuova Shanghai. Progettato dall'architetto britannico Thomas Heatherwick (lo stesso di Vessel a New York e del recupero del Power Plant di Google a San Jose), ospita 1.000 alberi e piante su terrazze scaglionate che ricordano una collina artificiale sul fiume Suzhou. Ogni albero cresce da una colonna-vaso: da lontano l'edificio sembra un bosco galleggiante sull'acqua. Heatherwick ha dichiarato che il progetto nasce dall'idea di 'restituire spazio verde alla città in verticale'. Perfetto per il tramonto: i livelli superiori sono accessibili al pubblico come passeggiata-parco.",
    photos: [{ image: UNS + "photo-1545893835-abaa50cbe628.jpg", caption: "1000 Trees sul fiume Suzhou — un bosco verticale in città" }],
  },
  jingAn: {
    name: "Jing'an Temple 静安寺",
    history: "Il Tempio di Jing'an (静安寺, 'Tempio della Tranquillità Serena') fu fondato nel III sec. d.C. sul fiume Suzhou, poi spostato nell'attuale posizione nel 1216. È uno dei templi buddisti più importanti di Shanghai e uno dei più frequentati: oltre 500.000 visitatori l'anno. La sua caratteristica più sorprendente è il contrasto: circondato da grattacieli e centro commerciale luxury, con i suoi tetti dorati e le strutture in bronzo massiccio. Il tempio è stato completamente ristrutturato in oro e rame nel 2010 — il costo fu di 400 milioni di yuan. Entrare subito alle 7:30 per trovarlo tranquillo, prima che arrivi il flusso dei turisti.",
    photos: [{ image: UNS + "photo-1474181487882-5abf3f0ba6c2.jpg", caption: "Il Jing'an Temple circondato dai grattacieli moderni" }],
  },
  m50: {
    name: "M50 Art District 莫干山路50号",
    history: "M50 è un distretto artistico nel complesso di fabbriche tessili degli anni '30 lungo il Suzhou Creek, a Moganshan Road. Negli anni '90 i capannoni abbandonati furono occupati da artisti e gallerie che ne fecero il centro dell'arte contemporanea shanghaiana — simile al 798 di Pechino ma più autentico e meno commerciale. Oggi ospita oltre 100 gallerie e studi d'artista: arte contemporanea cinese, fotografia, installazioni, street art sui muri esterni. La street art sulle pareti esterne degli edifici vale già da sola la visita. L'ingresso è libero — le gallerie singole sono gratuite o con piccolo biglietto.",
    photos: [{ image: UNS + "photo-1570839170498-5a57acac0ab1.jpg", caption: "M50 Art District — ex fabbriche trasformate in gallerie d'arte" }],
  },
};

export default function ShanghaiSection({ imgs = {} }) {
  return (
    <section id="shanghai" className="scroll-mt-16">
      <CityHeader
        name="Shanghai"
        chinese="上海"
        dates="1 – 2 Maggio"
        image={imgs.shanghai || ""}
        description="La metropoli del futuro: skyline futuristici, la French Concession, lo Yuyuan Garden e xiaolongbao perfetti."
      />
      <CityGallery slides={GALLERY.slides} food={GALLERY.food} />
      <div className="mt-10 space-y-12">
        <HotelCard
          name="Tianhua Hotel (People's Square)"
          chinese=""
          address="No. 159 Huanghe Road, Huangpu District, Shanghai – Ristrutturato 2025"
        />
        <TransportNote
          notes={["⚠️ Per l'aeroporto: metro linea 2 (evitare taxi — giorni di festa nazionale, autostrade bloccate). Ultima corsa 22:30. ~1 ora di viaggio."]}
        />
        <DayCard
          day="0"
          date="30 Aprile · Notte – Arrivo"
          title="Arrivo da Guilin"
          items={[
            { icon: "transport", title: "Pudong Airport → taxi → hotel", description: "45–60 min di taxi. Arrivo previsto ~23:05. L'hotel è su Huanghe Road — praticamente nel centro storico." },
            { time: "Cena (se ancora aperto)", icon: "food", title: "Wei Xiang Zhai oppure Jia Jia Tang Bao", description: "In alternativa: Huanghe Road Night Food Street è praticamente fuori dall'hotel — una delle strade di cibo notturno più famose di Shanghai." },
          ]}
        />
        <DayCard
          day="13"
          date="1 Maggio · Venerdì"
          title="Skyline & Centro Storico (molta folla)"
          items={[
            { time: "08:30", icon: "place", title: "Shanghai World Financial Center – Piano 100", highlight: true,
              description: "Vista a 360° su tutta Shanghai da 474 m. Biglietti quasi certamente solo sul posto — arrivare presto.",
              attraction: A.swfc },
            { time: "10:00", icon: "transport", title: "Lujiazui → metro L2 → The Bund", description: "Vista diurna del lungofiume — già bella di giorno, spettacolare di notte." },
            { icon: "place", title: "The Bund 外滩", highlight: true,
              description: "52 edifici coloniali di fronte alla skyline moderna di Pudong. Passeggia verso nord per il Rock Bund, meno affollato.",
              attraction: A.bund },
            { time: "12:00", icon: "food", title: "Pranzo: Jia Jia Tang Bao 佳家汤包", highlight: true,
              description: "Il miglior posto per xiaolongbao a Shanghai secondo i locali. Fila inevitabile — ne vale la pena.",
              attraction: A.jiaJia },
            { time: "13:30", icon: "place", title: "Yuyuan Garden + City God Temple + Old Town", highlight: true,
              description: "1.5–2 ore. Molto affollato il 1° maggio — pazienza, vale assolutamente.",
              attraction: A.yuyuan },
            { time: "17:30", icon: "place", title: "Nanjing Road", description: "La via dello shopping più famosa di Shanghai — 5 km pedonali dal Bund verso People's Square." },
            { time: "19:30", icon: "place", title: "The Bund di notte 🌃", highlight: true,
              description: "I grattacieli di Pudong illuminati riflessi nel fiume. Il momento più iconico del viaggio — non mancare.",
              attraction: A.bund },
            { time: "Cena", icon: "food", title: "Wei Xiang Zhai oppure Lai Lai Xiao Long Bao", description: "Wei Xiang Zhai è famoso per i noodles al sesamo (麻酱面). Lai Lai è backup affidabile per xiaolongbao." },
          ]}
        />
        <DayCard
          day="14"
          date="2 Maggio · Sabato"
          title="Quartieri & Atmosfere Locali"
          items={[
            { time: "08:30", icon: "place", title: "Jing'an Temple 静安寺", highlight: true,
              description: "Tempio buddista del III sec. circondato da grattacieli — uno dei contrasti più surreali di Shanghai.",
              attraction: A.jingAn },
            { time: "09:15", icon: "place", title: "Jing'an Kerry Centre", description: "Caffè in zona — la Jing'an ha i migliori specialty coffee di Shanghai." },
            { time: "10:00", icon: "transport", title: "Taxi → French Concession" },
            { time: "10:15", icon: "place", title: "Wukang Road & Sinan Mansions", highlight: true,
              description: "Viali alberati con platani francesi e ville Liberty. La via più fotografata di Shanghai.",
              attraction: A.frenchConcession },
            { time: "11:45", icon: "place", title: "M50 Art District 莫干山路50号", highlight: true,
              description: "Ex fabbriche degli anni '30 trasformate in gallerie. Ingresso libero. Street art esterna imperdibile.",
              attraction: A.m50 },
            { time: "13:00", icon: "food", title: "Pranzo: Shang Hai Da Hu Chun 大壶春", description: "Specialità di Shanghai: shengjian bao (小笼包fritti in padella), croccanti sotto e morbidi sopra. Locale storico dal 1932." },
            { time: "14:30", icon: "place", title: "Tianzifang 田子坊", highlight: true,
              description: "Labirinto di vicoli creativi con gallerie e boutique. Architettura shikumen degli anni '30.",
              attraction: A.tianzifang },
            { time: "16:00", icon: "place", title: "1000 Trees 千树", highlight: true,
              description: "Il bosco verticale di Heatherwick sul fiume Suzhou. Terrazza panoramica accessibile al pubblico. Perfetto al tramonto.",
              attraction: A.thousandTrees },
            { time: "17:30", icon: "place", title: "Xintiandi", description: "Shikumen restaurati con ristoranti e bar eleganti. Qui Mao fondò il PCC nel 1921." },
            { time: "Cena", icon: "food", title: "Cena a Xintiandi", description: "Renheguan per cibo tradizionale shanghaianese, oppure Sufuli Crab Noodles per i famosi noodles al granchio." },
          ]}
        />
      </div>
    </section>
  );
}
