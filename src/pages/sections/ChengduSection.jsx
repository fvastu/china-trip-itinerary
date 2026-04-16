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
    { image: UNS + "photo-1564349683136-77e08dba1ef7.jpg", label: "Panda Research Base", caption: "I panda sono più attivi nelle prime ore del mattino — arriva all'apertura (7:30). Fondata nel 1987 con 6 panda, oggi ne alleva oltre 50." },
    { image: UNS + "photo-1531386151447-fd76ad50012f.jpg", label: "Cuccioli di panda", caption: "I panda nascono ciechi, rosa e grandi come un topo (150 g). La madre li tiene quasi sempre in braccio per i primi mesi." },
    { image: BASE + "peoples-park.jpg", label: "People's Park & Teahouse", caption: "La Heming Teahouse è frequentata da anziani per mezza giornata. I barbieri ambulanti offrono la 'pulizia delle orecchie' (采耳) con strumenti di bambù." },
  ],
  food: {
    image: BASE + "sichuan-hotpot.jpg",
    dish: "Hotpot Sichuan",
    chinese: "四川火锅",
    tip: "Ordina il pot diviso: metà brodo rosso infernale, metà bianco neutro. Il pepe del Sichuan (huajiao) intorpidisce la lingua — effetto 'mala'. Obbligatorio: foglie di crisantemo, sangue di anatra cotto. È la cosa migliore che mangerai in viaggio.",
  },
};

const A = {
  panda: {
    name: "Chengdu Panda Research Base 成都大熊猫繁育研究基地",
    history: "Fondata nel 1987 con soli 6 panda giganti salvati dalla natura. Oggi è il più importante centro di riproduzione al mondo con oltre 50 esemplari. I panda giganti sono in via d'estinzione con meno di 1.900 individui selvatici in tutto il pianeta. La 'diplomazia del panda' è reale: la Cina li presta agli stati alleati in cambio di accordi politici ed economici — ogni panda vale diplomaticamente milioni. Aprile è uno dei mesi migliori: i cuccioli nati in autunno sono abbastanza grandi da uscire all'aperto. I panda rossi (火狐, 'volpe di fuoco') sono ugualmente adorabili e meno affollati. Arriva all'apertura (7:30) — alle 10 i panda iniziano a sonnecchiare e non si muovono più.",
    photos: [
      { image: UNS + "photo-1564349683136-77e08dba1ef7.jpg", caption: "Panda gigante — attivissimi nelle prime ore" },
      { image: UNS + "photo-1531386151447-fd76ad50012f.jpg", caption: "Cuccioli di panda — nascono ciechi e grandi come un topo" },
    ],
  },
  peoplesPark: {
    name: "People's Park & Heming Teahouse 人民公园·鹤鸣茶社",
    history: "Il People's Park è il cuore sociale di Chengdu e riflette perfettamente il suo ritmo di vita rilassato. La Heming Teahouse, fondata nel 1920, è uno degli ultimi esempi autentici di teahouse tradizionale cinese: gli anziani arrivano alle 8 con il proprio tè e restano fino a mezzogiorno a giocare a mahjong, leggere il giornale o farsi fare la 'pulizia delle orecchie' (采耳) dai barbieri ambulanti con strumenti di bambù. Nei weekend si tiene il famoso 'mercato del matrimonio': i genitori affiggono annunci con le caratteristiche dei figli celibi cercando un partito adatto — una tradizione modernissima e toccante. Il tè al gelsomino (茉莉花茶) è il tè tradizionale di Chengdu.",
    photos: [{ image: BASE + "peoples-park.jpg", caption: "La Heming Teahouse al People's Park — ritmo lento e autentico" }],
  },
  wuhou: {
    name: "Wuhou Shrine 武侯祠",
    history: "Dedicato a Zhuge Liang (181–234 d.C.), il grande stratega del regno di Shu durante il periodo dei Tre Regni (uno dei periodi più epici e romantici della storia cinese). Zhuge Liang è considerato il simbolo della saggezza, della lealtà e del genio militare in Cina — simile a come gli occidentali vedono Leonardo da Vinci. È l'unico tempio in Cina che ospita insieme le statue di un imperatore (Liu Bei) e del suo ministro, segno del rispetto straordinario che gli Chengduiani hanno per Zhuge Liang. Il tempio originale risale al V sec. d.C. Accanto c'è la Jinli Street: 500 anni di storia trasformati in una passeggiata di lanterne, street food e artigianato.",
    photos: [{ image: UNS + "photo-1564349683136-77e08dba1ef7.jpg", caption: "I giardini ombreggiati del Wuhou Shrine" }],
  },
  jinli: {
    name: "Jinli Street 锦里古街",
    history: "Una delle strade commerciali più antiche di Chengdu, risalente al periodo degli Stati Combattenti (IV sec. a.C.). Il nome 'Jinli' (锦里) significa 'quartiere della seta' — Xi'an era il punto di partenza della Via della Seta, ma Chengdu era il suo centro di produzione. Oggi è una passeggiata restaurata di 550 metri con architettura tradizionale Shu: case in legno scuro con tetti a doppia falda, lanterne rosse e negozi di artigianato. Street food da non perdere: rabbit head (兔头 — testa di coniglio piccante, piatto iconico di Chengdu), dan dan mian (noodles in salsa di sesamo) e le glasse di bambù.",
    photos: [{ image: UNS + "photo-1531386151447-fd76ad50012f.jpg", caption: "Jinli Street di sera con le lanterne accese" }],
  },
  zhongshuge: {
    name: "Zhongshuge Bookstore 钟书阁 (Taikoo Li)",
    history: "Considerata la libreria più bella della Cina e una delle più fotografate al mondo. Progettata dallo studio XL-Muse nel 2016, ha soffitti a specchio infiniti che riflettono gli scaffali di libri creando l'illusione di scale infinite verso l'alto. Il Taikoo Li che la ospita è un quartiere commerciale di lusso completamente pedonale costruito attorno al Tempio Daci (大慈寺) dell'VIII sec. — uno dei contrasti più belli di Chengdu: il tempio buddista tranquillo circondato da boutique di design e caffetterie di specialty coffee. Vale la visita anche solo per l'architettura e qualche foto.",
    photos: [{ image: UNS + "photo-1564349683136-77e08dba1ef7.jpg", caption: "L'interno della Zhongshuge Bookstore — scale infinite a specchio" }],
  },
  hotpot: {
    name: "Hotpot Sichuan 四川火锅 – Shu Daxia / Da Miao",
    history: "L'hotpot del Sichuan (四川火锅) nacque come piatto povero dei lavoratori del porto sul fiume Yangtze nel XIX secolo: le spezie abbondanti servivano a coprire il sapore degli scarti di carne. Oggi è il piatto più amato della Cina. Il brodo rosso è una combinazione di peperoncino secco, pepe del Sichuan (huajiao), aglio, zenzero e una base di grasso di manzo — cotto per ore. Il pepe del Sichuan crea un effetto unico chiamato 'mala' (麻辣): la lingua si intorpidisce leggermente, aumentando paradossalmente la piacevolezza del piccante. Da Miao è elegante, Shu Daxia è più popolare — entrambi ottimi. Chiedi il POT DIVISO (鸳鸯锅): metà piccante, metà bianco.",
    photos: [{ image: BASE + "sichuan-hotpot.jpg", caption: "Hotpot del Sichuan — brodo rosso bollente con ingredienti freschi" }],
  },
  duFu: {
    name: "Du Fu Cottage 杜甫草堂",
    history: "Il poeta Du Fu (712–770 d.C.) è considerato il più grande poeta della storia cinese — paragonato a Shakespeare per importanza culturale. Visse qui a Chengdu per 4 anni (759–762) durante i tumulti della Ribellione di An Lushan, componendo oltre 240 poesie considerate capolavori assoluti. La capanna originale era umile (il nome 'cottage' è letterale e non ironico), ma il parco attuale è un museo di 24 ettari con padiglioni, stagni di bambù e sale espositive. Il sito fu ricostruito durante la Song Dynasty (X sec.) dai locali che veneravano la sua memoria. È uno dei luoghi letterari più importanti dell'Asia.",
    photos: [{ image: UNS + "photo-1531386151447-fd76ad50012f.jpg", caption: "I padiglioni e i giardini di bambù del Du Fu Cottage" }],
  },
  anshunBridge: {
    name: "Anshun Bridge 安顺桥",
    history: "L'Anshun Bridge (安顺桥) è uno dei ponti più antichi di Chengdu, originariamente costruito durante la dinastia Yuan (XIII sec.) sul fiume Jinjiang. Il ponte attuale è una ricostruzione in stile tradizionale completata nel 2003, con padiglioni illuminati che di notte si riflettono nell'acqua creando uno dei panorami più fotografati della città. Il nome 'Anshun' significa 'pace e buon auspicio'. La zona circostante è il cuore della vita notturna di Chengdu: ristoranti con terrazza sul fiume, bar con vista e tea house lungo le rive. È il punto di partenza ideale per una passeggiata serale lungo il Jinjiang River — si possono anche valutare brevi crociere sul momento.",
    photos: [{ image: UNS + "photo-1564349683136-77e08dba1ef7.jpg", caption: "Anshun Bridge illuminato di notte sul fiume Jinjiang" }],
  },
  chunxiRoad: {
    name: "Chunxi Road 春熙路",
    history: "Chunxi Road (春熙路, 'strada della primavera fiorente') è la zona commerciale più famosa di Chengdu, equivalente a una Times Square locale ma con un'eleganza tutta cinese. Il nome deriva da un verso del classico taoista Daodejing. Ospita il Taikoo Li — un quartiere commerciale e culturale di lusso completamente pedonale, costruito attorno al Tempio Daci (大慈寺) del IV sec. d.C. — e l'IFS con il famoso panda che scala la facciata. La zona è anche la fermata metro più comoda per raggiungere la Zhongshuge Bookstore. Di sera l'atmosfera è moderna e vivace, con grandi mall, boutique e caffè di specialty coffee.",
    photos: [{ image: UNS + "photo-1531386151447-fd76ad50012f.jpg", caption: "L'atmosfera moderna di Chunxi Road di sera" }],
  },
  jiuyanqiao: {
    name: "Jiuyanqiao 九眼桥",
    history: "Jiuyanqiao (九眼桥, 'Ponte dei Nove Occhi') è il cuore della nightlife di Chengdu. Il ponte originale fu costruito durante la dinastia Ming (1593) con nove arcate ad arco che si riflettono nel fiume Jinjiang, formando nove 'occhi' perfetti. Il ponte attuale è una ricostruzione, ma la zona circostante è rimasta il punto di ritrovo serale più vivace della città: bar, pub, locali con musica dal vivo e terrazze affacciate sull'acqua. È vicinissimo ad Anshun Bridge — spesso si visitano insieme. Molto frequentata da giovani, expat e studenti delle università vicine. L'atmosfera è completamente diversa dal Chengdu diurno delle teahouse e dei panda.",
    photos: [{ image: UNS + "photo-1564349683136-77e08dba1ef7.jpg", caption: "Il Ponte dei Nove Occhi riflesso nel Jinjiang River" }],
  },
  ifs: {
    name: "IFS Building & Panda Rooftop 成都国际金融中心",
    history: "L'IFS (International Finance Square) di Chengdu è diventato famoso in tutto il mondo per una installazione artistica: un panda gigante (7 piani di altezza) che scala la facciata dell'edificio come se stesse cercando di entrare dalle finestre. L'opera dell'artista Lawrence Argent è il selfie spot più fotografato di Chengdu. Il Taikoo Li adiacente ospita il Tempio Daci (大慈寺), fondato nel IV sec. d.C. — uno dei templi buddisti più antichi del Sichuan, ora circondato da boutique di lusso e caffetterie di specialty coffee. Il contrasto antico-moderno è uno dei tratti distintivi di Chengdu.",
    photos: [{ image: UNS + "photo-1564349683136-77e08dba1ef7.jpg", caption: "Il panda che scala l'IFS Building — il selfie spot di Chengdu" }],
  },
};

export default function ChengduSection({ imgs = {} }) {
  return (
    <section id="chengdu" className="scroll-mt-16">
      <CityHeader
        name="Chengdu"
        chinese="成都"
        dates="24 sera – 26 Aprile"
        image={imgs.panda || ""}
        description="La capitale del Sichuan: panda giganti, hotpot infuocato, teahouse tradizionali e ritmo di vita rilassato."
      />
      <CityGallery slides={GALLERY.slides} food={GALLERY.food} />
      <CityFoodGuide
        subtitle="Qui il filo conduttore è il gusto mala: piccante, profumato e leggermente anestetizzante, con tanti assaggi da street food."
        items={cityFoodGuides.chengdu}
      />
      <div className="mt-10 space-y-12">
        <HotelCard
          name="NICESOE S Hotel (Kuanzhai Alley)"
          chinese=""
          address="5th Floor, Metallurgy Building, No. 84 Huaishu Street, Jinniu District, Chengdu"
        />
        <DayCard
          day="06"
          date="24 Aprile · Sera"
          title="Arrivo & Prima Esplorazione"
          items={[
            { time: "~19:30", icon: "transport", title: "Arrivo a Chengdu Est", description: "Taxi/Didi ~15 min verso hotel in zona Jinniu." },
            { time: "Cena leggera", icon: "food", title: "Lao Chengdu Ti Cheng Xian San Yang Mian", description: "Noodles tradizionali di Chengdu — locale popolare che chiude presto. Ideale per una prima cena leggera dopo il viaggio." },
            { icon: "place", title: "Passeggiata serale: SKP Chengdu + Twin Towers", description: "Architettura futuristica con torri di bambù. Show LED dopo il tramonto. Zona super moderna — perfetta al tramonto." },
            { icon: "tip", title: "Dormire presto!", description: "Sveglia alle 7:30 per i panda (sono più attivi al mattino)." },
          ]}
        />
        <DayCard
          day="07"
          date="25 Aprile · Sabato"
          title="Panda, Teahouse, Templi & Libreria 🐼"
          items={[
            { time: "07:30", icon: "transport", title: "Partenza per Panda Research Base", description: "~30 min di auto. Ticket 55 Yuan su WeChat MiniProgram." },
            { time: "08:00–10:30", icon: "place", title: "Chengdu Panda Base 🐼", highlight: true,
              description: "~2.5 ore. Panda giganti e panda rossi. Attivissimi al mattino. Aprile = cuccioli visibili.",
              attraction: A.panda },
            { time: "11:30–13:30", icon: "place", title: "People's Park 人民公园", highlight: true,
              description: "Teahouse Heming — tè al gelsomino, mahjong, vita quotidiana. Il vero spirito di Chengdu.",
              attraction: A.peoplesPark },
            { time: "Pranzo", icon: "food", title: "Lao Chengdu Yi Cheng Xian San Yang Mian", description: "Noodles tradizionali locali. Metro Linea 2 da People's Park." },
            { time: "14:30–16:00", icon: "place", title: "Wuhou Shrine 武侯祠", highlight: true,
              description: "Tempio dedicato al grande stratega Zhuge Liang. Aperto 08:00–20:00. Giardini ombreggiati.",
              attraction: A.wuhou },
            { time: "16:00–17:00", icon: "place", title: "Jinli Street 锦里古街", highlight: true,
              description: "Lanterne, street food, negozi artigianali. 2 min a piedi da Wuhou. Perfetta nel tardo pomeriggio.",
              attraction: A.jinli },
            { time: "17:15–18:00", icon: "place", title: "Zhongshuge Bookstore 钟书阁 (Taikoo Li)", highlight: true,
              description: "La libreria più scenografica di Chengdu: soffitti a specchio, scale infinite. Aperta 10:00–22:00.",
              attraction: A.zhongshuge },
            { icon: "place", title: "Chunxi Road 春熙路", description: "Zona commerciale più famosa di Chengdu (tipo Times Square). Grandi mall, Taikoo Li, caffè moderni. Fermata metro comoda per Zhongshuge.",
              attraction: A.chunxiRoad },
            { time: "Cena", icon: "food", title: "Street food a Jinli o Hotpot Sichuan 🌶️", highlight: true,
              description: "Opzione 1: Cena street food a Jinli Ancient Street. Opzione 2: Hotpot — Shu Daxia o Da Miao, pot diviso (metà piccante, metà chiaro). L'esperienza gastronomica del viaggio.",
              attraction: A.hotpot },
            { time: "19:55", icon: "place", title: "Anshun Bridge 安顺桥", description: "Ponte illuminato sul fiume Jinjiang. Ristoranti e bar con vista. Passeggiata Jinjiang River, valutiamo crociera sul momento.",
              attraction: A.anshunBridge },
            { icon: "place", title: "Jiuyanqiao 九眼桥", description: "Zona bar e nightlife lungo il fiume. Vicinissima ad Anshun Bridge. Molto frequentata da giovani e expat.",
              attraction: A.jiuyanqiao },
          ]}
        />
        <DayCard
          day="08"
          date="26 Aprile · Domenica"
          title="Cultura & Partenza per Zhangjiajie"
          items={[
            { time: "08:00", icon: "food", title: "Colazione locale", description: "Baozi (panini al vapore farciti) o noodles in zona hotel — colazione tipica di Chengdu in qualsiasi banchetto di strada." },
            { time: "09:00–10:30", icon: "place", title: "Du Fu Cottage 杜甫草堂", highlight: true,
              description: "Il museo-parco del più grande poeta cinese. 24 ettari di giardini e padiglioni. Apre alle 8.",
              attraction: A.duFu },
            { time: "10:45–12:15", icon: "place", title: "IFS Panda Rooftop + Taikoo Li", highlight: true,
              description: "Il panda gigante che scala l'edificio IFS! Poi Taikoo Li — quartiere commerciale attorno al Tempio Daci. Pranzo leggero.",
              attraction: A.ifs },
            { time: "12:15", icon: "transport", title: "Rientro hotel e recupero bagagli" },
            { time: "12:45", icon: "transport", title: "Taxi / DiDi verso stazione" },
            { time: "14:10", icon: "transport", title: "Partenza treno → Zhangjiajie", highlight: true, description: "Arrivo a Zhangjiajie Xi (West) alle 18:49. ~15 min di taxi. Hotel al 24° piano con vista montagne. Cena a Nanmenkou." },
          ]}
        />
      </div>
    </section>
  );
}
