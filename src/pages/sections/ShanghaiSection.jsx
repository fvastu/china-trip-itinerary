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
    { image: BASE + "couple-shanghai.png", label: "Noi a Shanghai", caption: "Danza del leone e fuochi d'artificio sullo skyline di Shanghai!" },
    { image: UNS + "photo-1474181487882-5abf3f0ba6c2.jpg", label: "The Bund di notte", caption: "52 edifici coloniali europei di fronte alla skyline futuristica di Pudong. Pudong era terra agricola nel 1990 — in 30 anni è diventata la terza skyline più alta al mondo." },
    { image: UNS + "photo-1545893835-abaa50cbe628.jpg", label: "Skyline di Pudong", caption: "La Shanghai Tower (632 m) ha una forma a spirale che riduce del 24% la forza del vento. Il buco trapezoidale del World Financial Center fu cambiato dal cerchio originale per non sembrare il sole nascente giapponese." },
    { image: BASE + "yuyuan-garden.jpg", label: "Yuyuan Garden", caption: "Il ponte a 9 gomiti è costruito così perché si credeva i demoni si muovessero solo in linea retta. Costruito nel 1559 come dono per i genitori anziani." },
    { image: BASE + "french-concession.jpg", label: "French Concession", caption: "Sotto controllo francese dal 1849 al 1943. Qui il giovane Mao fondò il Partito Comunista nel 1921 in un appartamento anonimo di Xintiandi." },
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
    photos: [{ image: BASE + "yuyuan-garden.jpg", caption: "Il ponte a 9 gomiti e il padiglione sul lago dello Yuyuan" }],
  },
  jiaJia: {
    name: "Jia Jia Tang Bao 佳家汤包",
    history: "Considerato da molti shanghaiani il miglior posto in assoluto per gli xiaolongbao (小笼包, ravioli al vapore con brodo interno). Il segreto è la semplicità: solo carne di maiale e brodo di ossa, nessun condimento aggiuntivo che distragga. I ravioli vengono fatti a mano ogni 20 minuti — quando finisce il lotto si aspetta il successivo, la fila di locali inizia alle 10 di mattina. Tecnica di consumo obbligatoria: metti il raviolo nel cucchiaio di ceramica, mordi un angolino, aspetta 10 secondi che il vapore si raffreddi, succhia il brodo, poi mangia il resto. Mai mordere direttamente — il brodo a 80°C ti scotta la gola.",
    photos: [{ image: BASE + "xiaolongbao.jpg", caption: "Xiaolongbao freschi — fatti a mano ogni 20 minuti" }],
  },
  frenchConcession: {
    name: "French Concession & Wukang Road 法租界",
    history: "La Concessione Francese era sotto controllo francese dal 1849 al 1943, quando fu restituita alla Cina durante la Seconda Guerra Mondiale. Era la zona più elegante di Shanghai coloniale — ville, café, negozi di lusso, il Lyceum Theatre. I platani che allineano le strade furono importati dalla Francia per evocare Parigi. Wukang Road (武康路), con la sua curvatura elegante e le ville Liberty, è la via più fotografata di Shanghai. Xintiandi (新天地) fu ristrutturato negli anni 2000 mantenendo i shikumen (石库门, case con portoni di pietra) originali — nel numero 76 di Xingye Road, Mao Zedong e 12 delegati fondarono il PCC nel luglio 1921.",
    photos: [{ image: BASE + "french-concession.jpg", caption: "Wukang Road — villa Normandie e i platani francesi" }],
  },
  tianzifang: {
    name: "Tianzifang 田子坊",
    history: "Tianzifang è un labirinto di vicoli (longtang, 弄堂) nel cuore della ex Concessione Francese, trasformati a partire dal 2000 in un distretto creativo con gallerie d'arte, boutique di design, bar e ateliers. I vicoli shikumen originali degli anni '30 sono stati preservati — le case in mattone grigio con portoni in pietra sono il simbolo dell'architettura residenziale shanghaiana. Niente in comune con i centri commerciali: qui le botteghe sono a misura d'uomo, in spazi di 20 m², gestite da artigiani e designer indipendenti. È l'opposto del lusso di Taikoo Li — autenticità creativa in piccoli spazi.",
    photos: [{ image: BASE + "french-concession.jpg", caption: "I vicoli di Tianzifang — il quartiere creativo della French Concession" }],
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
  deMarzo: {
    name: "13 De Marzo · Anfu Road 安福路322号",
    history: "13 De Marzo è un brand di moda cinese fondato nel 2019, diventato famoso per i suoi negozi-caffetteria a tema orsacchiotto che sono tra i più instagrammati di Shanghai. Il flagship di Anfu Road 322 è un concept store dove moda, arte e gastronomia si fondono: cornetti giganti, drink creativi e un'estetica cozy che mescola il lusso europeo con il kawaii asiatico. Anfu Road (安福路) stessa è una delle vie più affascinanti della French Concession: 900 metri di platani, boutique indipendenti, caffetterie di specialty coffee e gallerie d'arte nascoste. Negli ultimi anni è diventata la via preferita dai giovani creativi di Shanghai — meno turistica di Wukang Road ma altrettanto fotogenica.",
    photos: [{ image: BASE + "french-concession.jpg", caption: "Anfu Road nella French Concession — platani e caffetterie di design" }],
  },
  nudake: {
    name: "Nudake Haus Cafe",
    history: "Nudake è un brand di pasticceria artistica cinese che ha rivoluzionato il concetto di bakery in Cina. Il flagship 'Haus Nowhere' di Shanghai è famoso per i suoi cornetti giganti esposti come opere d'arte in vetrine minimaliste e per gli interni che mescolano brutalismo industriale e design scandinavo. I dolci non sono solo buoni — sono progettati per essere fotografati: forme geometriche impossibili, colori naturali e texture contrastanti. Il brand è nato a Shenzhen nel 2020 e si è espanso rapidamente nelle città tier-1 cinesi. È rappresentativo della nuova generazione di brand F&B cinesi che competono con l'estetica europea mantenendo un'identità locale.",
    photos: [{ image: BASE + "french-concession.jpg", caption: "Il design minimalista di Nudake Haus — dolci come opere d'arte" }],
  },
  nanjingRoad: {
    name: "Nanjing Road 南京路步行街",
    history: "Nanjing Road (南京路) è la via commerciale più famosa di Shanghai e una delle più trafficate al mondo: 5.5 km dal Bund fino a Jing'an Temple, di cui l'ultimo tratto è completamente pedonale. Fu la prima strada asfaltata di Shanghai (1908) e durante l'era coloniale era il cuore dello shopping internazionale — i primi grandi magazzini della Cina aprirono qui negli anni '20. Il tratto pedonale (南京路步行街) è lungo 1.2 km ed è percorso da trenini elettrici per i turisti stanchi. Di sera le insegne al neon la trasformano in un fiume di luce. Nonostante sia molto turistica, resta un'esperienza imperdibile per l'energia e il contrasto tra i vecchi edifici Art Déco e i moderni centri commerciali.",
    photos: [{ image: UNS + "photo-1474181487882-5abf3f0ba6c2.jpg", caption: "Nanjing Road di sera — il fiume di neon verso il Bund" }],
  },
  xintiandi: {
    name: "Xintiandi 新天地",
    history: "Xintiandi (新天地, 'nuovo cielo e terra') è un quartiere di shikumen restaurati nel cuore di Shanghai. Gli shikumen (石库门, 'portoni di pietra') sono l'architettura residenziale tipica di Shanghai degli anni '20-'30: case a schiera in mattone grigio con portali in pietra che fondono elementi cinesi e occidentali. Il quartiere fu ristrutturato negli anni 2000 dall'architetto americano Benjamin Wood, trasformando le case fatiscenti in ristoranti, bar e boutique eleganti mantenendo le facciate originali. Al numero 76 di Xingye Road, all'interno di Xintiandi, Mao Zedong e 12 delegati fondarono il Partito Comunista Cinese nel luglio 1921 — oggi è un museo visitabile. Perfetta per una cena serale o una passeggiata dopo il tramonto.",
    photos: [{ image: BASE + "french-concession.jpg", caption: "I vicoli shikumen restaurati di Xintiandi — eleganza storica" }],
  },
  traghetto: {
    name: "Traghetto Huangpu 黄浦江渡轮",
    history: "Il traghetto dello Huangpu River (黄浦江渡轮) è il modo più economico e autentico per attraversare il fiume tra il Bund e Lujiazui: 2 CNY (circa 0.25€) per 5 minuti di traversata, contro i 100-200 CNY delle crociere turistiche. Il servizio esiste dagli anni '30 ed era l'unico collegamento tra le due sponde prima della costruzione dei tunnel e della metro. Oggi i traghetti sono moderni e climatizzati, partono ogni 10 minuti dal Bund Terminal fino alle 22:30. La vista dalla prua — con la skyline illuminata di Pudong che si avvicina o il Bund coloniale che si allontana — è uno dei momenti più belli e meno turistici di Shanghai. Un segreto che i locali conoscono bene.",
    photos: [{ image: UNS + "photo-1545893835-abaa50cbe628.jpg", caption: "La skyline di Pudong vista dal traghetto — 2 CNY per questa vista" }],
  },
  m50: {
    name: "M50 Art District 莫干山路50号",
    history: "M50 è un distretto artistico nel complesso di fabbriche tessili degli anni '30 lungo il Suzhou Creek, a Moganshan Road. Negli anni '90 i capannoni abbandonati furono occupati da artisti e gallerie che ne fecero il centro dell'arte contemporanea shanghaiana — simile al 798 di Pechino ma più autentico e meno commerciale. Oggi ospita oltre 100 gallerie e studi d'artista: arte contemporanea cinese, fotografia, installazioni, street art sui muri esterni. La street art sulle pareti esterne degli edifici vale già da sola la visita. L'ingresso è libero — le gallerie singole sono gratuite o con piccolo biglietto.",
    photos: [{ image: BASE + "the-bund-night.jpg", caption: "M50 Art District — ex fabbriche trasformate in gallerie d'arte" }],
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
      <CityFoodGuide
        subtitle="Shanghai è perfetta per ravioli succosi, comfort food raffinato e qualche dolce stagionale molto cittadino."
        items={cityFoodGuides.shanghai}
      />
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
            { icon: "food", title: "Dolcino: Park Hotel Deli", description: "28 Huanghe Rd, a 5 minuti a piedi dall'hotel. La fila potrebbe essere lunga, ma ne vale la pena." },
          ]}
        />
        <DayCard
          day="13"
          date="1 Maggio · Venerdì"
          title="Skyline & Centro Storico (molta folla)"
          items={[
            { time: "08:00", icon: "food", title: "Colazione: People Cafe / Manner Coffee", description: "North Bund, Magnolia Plaza L1. Da hotel: metro Linea 2 (People's Square → North Bund, 15 min, 4 CNY). Vista 360° Bund/Pudong." },
            { time: "08:30", icon: "place", title: "Shanghai World Financial Center – Piano 100", highlight: true,
              description: "Vista a 360° su tutta Shanghai da 474 m. Biglietti sul posto (180 CNY, 09:00–22:00). Da North Bund: metro Linea 2 (Lujiazui, 10 min). ~1h panoramica.",
              attraction: A.swfc },
            { time: "10:00", icon: "place", title: "Lujiazui → The Bund (a piedi 25 min)", highlight: true,
              description: "2 km lungo Bund Promenade. Foto top: Galaxy SOHO angle. Tappa: Lu Bo Lang (115 Yuyuan Old Street) — ravioli di granchio con la cannuccia (蟹粉小笼包 takeaway, 6-8 pz ¥45) al banco esterno, mangia camminando.",
              attraction: A.bund },
            { time: "10:40", icon: "place", title: "Yuyuan Garden + City God Temple + Old Town", highlight: true,
              description: "Biglietti sul posto (40¥, ultimo ingresso 16:00). Molto affollato il 1° maggio. Percorso: Garden → Chenghuang Miao → mercati street food.",
              attraction: A.yuyuan },
            { time: "12:00", icon: "food", title: "Pranzo: Jia Jia Tang Bao 佳家汤包", highlight: true,
              description: "90 Huanghe Rd. Metro Linea 10 da Yuyuan (8 min, 4¥). Il miglior posto per xiaolongbao a Shanghai.",
              attraction: A.jiaJia },
            { time: "13:30", icon: "place", title: "Ritorno Yuyuan (post pranzo)", description: "10 min a piedi da Henan South Rd. Continuare visita City God Temple e mercati street food." },
            { time: "17:30", icon: "place", title: "Nanjing Road", description: "15 min a piedi da Yuyuan. La via dello shopping più famosa di Shanghai — vivace e pedonale.",
              attraction: A.nanjingRoad },
            { time: "19:30", icon: "place", title: "The Bund di notte 🌃", highlight: true,
              description: "10 min a piedi da Nanjing. I grattacieli di Pudong illuminati 19:30–21:00. Il momento più iconico del viaggio.",
              attraction: A.bund },
            { time: "20:30", icon: "food", title: "Cena: Wei Xiang Zhai / Lai Lai", description: "Rientro People's Square, 10 min a piedi da Bund. Wei Xiang Zhai per noodles al sesamo, Lai Lai per xiaolongbao." },
            { time: "21:00", icon: "place", title: "Opzionale: Traghetto Huangpu", description: "Bund Terminal → Lujiazui (2 CNY, 5 min, ogni 10 min fino 22:30). Vista skyline illuminato. Molto meglio delle crociere turistiche (100+ CNY).",
              attraction: A.traghetto },
          ]}
        />
        <DayCard
          day="14"
          date="2 Maggio · Sabato"
          title="Quartieri & Atmosfere Locali"
          items={[
            { time: "08:30", icon: "place", title: "Jing'an Temple 静安寺", highlight: true,
              description: "Apre 07:30–18:00 (50 CNY). Metro Linea 2 da hotel (5 min, People's Square Sta.).",
              attraction: A.jingAn },
            { time: "09:15", icon: "transport", title: "Metro → Changshu Rd", description: "Metro Linea 2 (West Nanjing Rd → Changshu Rd, Linea 7, 2 fermate, 10 min, 4 CNY)." },
            { time: "09:30", icon: "place", title: "13 De Marzo (Anfu Road 322)", highlight: true,
              description: "Caffetteria tema orsacchiotto. Cornetti e drink cozy. Arrivare presto per evitare fila. 10:00–21:30.",
              attraction: A.deMarzo },
            { time: "09:55", icon: "transport", title: "A piedi → Wukang Rd", description: "800 m nello stesso quartiere Anfu-Wukang (10 min)." },
            { time: "10:15", icon: "place", title: "Wukang Road & Sinan Mansions", highlight: true,
              description: "Architettura art deco, viali alberati con platani francesi. La via più fotografata di Shanghai.",
              attraction: A.frenchConcession },
            { time: "13:00", icon: "food", title: "Pranzo French Concession", description: "Shang Hai Da Hu Chun (shengjian bao) o Lai Lai Xiao Long Bao (backup). Oppure Ren He Guan (crab rice signature, guida Michelin — prenotare via WeChat/Meituan)." },
            { time: "14:00", icon: "transport", title: "Passeggiata → Tianzifang", description: "20–30 min a piedi (3.4 km scenic)." },
            { time: "14:30", icon: "place", title: "Tianzifang 田子坊", highlight: true,
              description: "Labirinto di vicoli creativi con gallerie e boutique. Architettura shikumen degli anni '30. Aperto 24h.",
              attraction: A.tianzifang },
            { time: "15:00", icon: "place", title: "Nudake Haus Cafe", description: "Caffetteria bellissima con cornetti giganti esposti. 20 min a piedi da Tianzifang.",
              attraction: A.nudake },
            { time: "15:45", icon: "place", title: "1000 Trees 千树", highlight: true,
              description: "Taxi 15 min (25 CNY) o metro Linea 11. Architettura, foto, relax. 10:00–22:00 gratuito. Perfetto al tramonto.",
              attraction: A.thousandTrees },
            { time: "17:15", icon: "place", title: "Xintiandi (facoltativo ma consigliato)", description: "Taxi 10 min o metro Linea 10. Shikumen restaurati, cena e passeggiata serale. Aperto 24h.",
              attraction: A.xintiandi },
            { time: "Cena", icon: "food", title: "Cena a Xintiandi", description: "Renheguan (riso con granchio, guida Michelin) oppure Sufuli Crab Noodles. Rientro a piedi possibile (25 min Nanjing Rd)." },
            { icon: "transport", title: "Aeroporto: Metro Linea 2", description: "People's Square → Guanglan Rd (45 min, stesso binario opposto) → cambio estensione Linea 2 (4 vagoni) → Pudong Airport (15-20 min). Totale ~1 ora. Ultima corsa 22:30." },
          ]}
        />
      </div>
    </section>
  );
}
