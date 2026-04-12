const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import CityHeader from "../../components/itinerary/CityHeader";
import DayCard from "../../components/itinerary/DayCard";
import HotelCard from "../../components/itinerary/HotelCard";
import CityGallery from "../../components/itinerary/CityGallery";

const BASE = "/assets/images/";
const UNS = "/assets/images/";

const GALLERY = {
  slides: [
    { image: BASE + "summer-palace.jpg", label: "Palazzo d'Estate", caption: "Tre quarti del parco è il Lago Kunming scavato artificialmente. Distrutto dai britannici nel 1860, fu ricostruito dall'imperatrice Cixi usando fondi destinati alla marina militare." },
    { image: BASE + "great-wall-mutianyu.jpg", label: "Grande Muraglia · Mutianyu", caption: "La sezione più panoramica ha 22 torri di guardia. Non è visibile dallo spazio — la leggenda fu smentita dal primo astronauta cinese Yang Liwei nel 2003." },
    { image: UNS + "photo-1584646098378-0b84fa2c0f87.jpg", label: "Città Proibita", caption: "980 edifici, ~9.000 stanze, 500 anni di storia imperiale. Il numero di figure mitologiche sui tetti indica il rango dell'edificio — il massimo è 10." },
    { image: BASE + "temple-of-heaven.jpg", label: "Tempio del Cielo", caption: "L'Echo Wall è costruita con tale precisione geometrica che un sussurro lungo la parete è udibile dall'altro lato." },
    { image: BASE + "beijing-hutong.jpg", label: "Hutong di Nanluoguxiang", caption: "La parola 'hutong' deriva dal mongolo 'hottog' (pozzo d'acqua): i vicoli si formavano intorno ai punti d'acqua." },
  ],
  food: {
    image: BASE + "peking-duck.jpg",
    dish: "Anatra alla Pechinese",
    chinese: "北京烤鸭",
    tip: "La pelle viene laccata con sciroppo di malto e appesa ad asciugare per ore prima della cottura nel forno a legna. Si mangia avvolta in sottili crepes con cipollotto e salsa hoisin. Da Siji Minfu si arriva in 2 ore di coda — lascia il nome e aspetta al bar accanto.",
  },
};

const A = {
  summPalace: {
    name: "Palazzo d'Estate 颐和园",
    history: "Costruito nel 1750 dall'imperatore Qianlong come dono per la madre. Copre 290 ettari, tre quarti dei quali è il Lago Kunming scavato artificialmente da 100.000 operai. Fu distrutto dall'esercito anglo-francese nel 1860 durante la Seconda Guerra dell'Oppio — una delle distruzioni culturali più devastanti della storia moderna cinese. L'imperatrice Cixi lo fece ricostruire nel 1888 usando 3 milioni di taels d'argento sottratti ai fondi per la marina militare. La luce del mattino sul lago è favolosa per le fotografie: l'acqua riflette il Padiglione dell'Estate come uno specchio.",
    photos: [{ image: BASE + "summer-palace.jpg", caption: "Il lungomare del Palazzo d'Estate al mattino presto" }],
  },
  hutong: {
    name: "Hutong & Drum Tower 鼓楼",
    history: "La parola 'hutong' viene dal mongolo 'hottog' (pozzo d'acqua): i vicoli nascevano intorno ai punti d'acqua comuni durante la dominazione Yuan (XIII sec.). Pechino ne aveva oltre 6.000 — negli anni '90 le demolizioni ne eliminarono più della metà per fare spazio ai moderni quartieri. Oggi sono bene culturale protetto. Il Drum Tower che domina la zona fu costruito nel 1272 da Kublai Khan come orologio della città: i 25 tamburi scandivano le 12 ore della giornata, udibili da tutto il centro di Pechino. Mao'er Hutong ('Hutong del Gatto') è uno dei più antichi, risalente alla dinastia Ming.",
    photos: [{ image: BASE + "beijing-hutong.jpg", caption: "Vicoli hutong al tramonto vicino al Drum Tower" }],
  },
  siji: {
    name: "Siji Minfu 四季民福 – Anatra alla Pechinese",
    history: "La ricetta dell'anatra alla pechinese risale alla dinastia Yuan (XIII sec.) e fu perfezionata nelle cucine imperiali Ming. La pelle viene laccata con sciroppo di malto, essiccata per ore al vento e poi cotta in forno a legna di frutta a 270°C. Il risultato è una pelle croccante color mogano che si separa dalla carne. Siji Minfu (四季民福, letteralmente 'le quattro stagioni della fortuna popolare') è considerato il miglior posto accessibile per l'anatra a Pechino — il ristorante di lusso Quanjude è più famoso ma molto più caro e meno autentico. La coda domenicale può arrivare a 2 ore: lascia il nome al banco, esci a esplorare il quartiere e torna quando ti chiamano.",
    photos: [{ image: BASE + "peking-duck.jpg", caption: "Anatra alla pechinese — pelle laccata e crepes con hoisin" }],
  },
  greatWall: {
    name: "Grande Muraglia · Mutianyu 长城",
    history: "La sezione di Mutianyu risale alla dinastia Ming (XV sec.) e ha 22 torri di guardia su 2.2 km di percorso accessibile, costruita su fondamenta di una muraglia dei Northern Qi del VI secolo. Mutianyu è considerata la sezione meglio conservata e più panoramica — meno turistica di Badaling (quella vicino a Pechino). La muraglia complessiva misura 21.196 km e impiegò milioni di operai e soldati per secoli. Curiosità verificata: non è visibile a occhio nudo dallo spazio — la leggenda fu smentita in diretta dal primo astronauta cinese Yang Liwei nel 2003. Il Toboggan (slittino) tra Torre 5 e 6 è uno dei discesi più divertenti al mondo: 500 m di scivolo in acciaio in mezzo alla foresta.",
    photos: [{ image: BASE + "great-wall-mutianyu.jpg", caption: "La Grande Muraglia a Mutianyu — torri avvolte nella foschia" }],
  },
  templeHeaven: {
    name: "Tempio del Cielo 天坛",
    history: "Costruito nel 1420 dalla dinastia Ming, era il luogo delle cerimonie annuali più importanti della Cina imperiale: ogni solstizio d'inverno l'imperatore — Figlio del Cielo — pregava qui per un buon raccolto. Solo l'imperatore poteva entrare nell'area sacra; tutta la cerimonia durava 3 giorni di digiuno e preghiera in silenzio assoluto. L'Hall of Prayer for Good Harvests (quella iconica, rotonda a tre livelli) è costruita interamente in legno senza un singolo chiodo in metallo. L'Echo Wall è un muro circolare di 65 m di raggio con una geometria così precisa che un sussurro trasmesso lungo la parete è udibile nitidamente dall'altra parte — gli imperatori lo usavano per comunicazioni riservate.",
    photos: [{ image: BASE + "temple-of-heaven.jpg", caption: "L'Hall of Prayer for Good Harvests — nessun chiodo in metallo" }],
  },
  forbiddenCity: {
    name: "Città Proibita 紫禁城",
    history: "Costruita tra il 1406 e il 1420 dalla dinastia Ming con il lavoro di 1 milione di operai. 980 edifici, circa 9.000 stanze, 500 anni di storia — 24 imperatori consecutivi ci vissero senza che un comune mortale potesse entrare, pena la morte. Ogni tetto è decorato con file di figure mitologiche: il numero dipende dal rango dell'edificio — solo il Gate of Supreme Harmony ne ha 10, il massimo possibile. Il nome ufficiale è 'Palazzo del Principe Purpureo' — la stella polare in cinese antico si chiama Stella Purpurea, sede del Cielo: il palazzo terrestre dell'imperatore ne era il riflesso. L'ultimo imperatore Puyi la abbandonò nel 1912 a soli 6 anni, quando la Cina imperiale finì.",
    photos: [{ image: UNS + "photo-1584646098378-0b84fa2c0f87.jpg", caption: "La Porta Meridionale — ingresso principale della Città Proibita" }],
  },
  jingshan: {
    name: "Jingshan Park 景山公园",
    history: "La Collina del Carbone (Jingshan) fu costruita artificialmente dalla terra scavata per i fossati della Città Proibita durante la Ming (XV sec.), alzandola di circa 45 metri. Il padiglione centrale in cima — il Wanchun Pavilion — offre la vista panoramica più bella e fotografata di Pechino: l'intera Città Proibita ai tuoi piedi, perfettamente simmetrica. Curiosità storica: è qui, su questa collina, che l'ultimo imperatore Ming, Chongzhen, si impiccò a un albero nel 1644 mentre le truppe ribelli entravano a Pechino. L'albero originale fu abbattuto, ma ne è stato piantato uno commemorativo.",
    photos: [{ image: UNS + "photo-1584646098378-0b84fa2c0f87.jpg", caption: "Vista dalla Collina del Carbone sulla Città Proibita" }],
  },
  wangfujing: {
    name: "Mercato Notturno di Wangfujing 王府井",
    history: "Wangfujing è la via commerciale più famosa di Pechino, costruita attorno a un pozzo imperiale (府井, 'pozzo del Principe'). Il mercato notturno degli snack è una tappa obbligatoria per la sua esoticism: scorpioni vivi, larve fritte, stelle marine, carne di cavallo su spiedino. Non è l'autentica cucina di Pechino — è pensato per i turisti — ma l'esperienza visiva e l'atmosfera notturna vale la passeggiata. I prezzi sono altissimi rispetto agli standard locali, ma una curiosità qua e là ci si può permettere.",
    photos: [{ image: BASE + "beijing-hutong.jpg", caption: "Il mercato notturno di Wangfujing illuminato di notte" }],
  },
};

export default function BeijingSection({ imgs = {} }) {
  return (
    <section id="pechino" className="scroll-mt-16">
      <CityHeader
        name="Pechino"
        chinese="北京"
        dates="19 – 21 Aprile"
        image={imgs.forbiddenCity || ""}
        description="La capitale imperiale: dalla maestosità della Città Proibita agli hutong nascosti, dalla Grande Muraglia all'anatra laccata."
      />
      <CityGallery slides={GALLERY.slides} food={GALLERY.food} />
      <div className="mt-10 space-y-12">
        <HotelCard
          name="Homeinn Selected Hotel"
          chinese="如家商旅酒店(北京前门地铁站北京坊店)"
          address="No. 114, Qianmen Xiheyan Street, Xicheng District, Beijing"
        />
        <DayCard
          day="01"
          date="19 Aprile · Domenica"
          title="Palazzo d'Estate & Hutong"
          items={[
            { time: "Mattina", icon: "ticket", title: "Check-in Hotel", description: "Lasciare i bagagli. Non dimenticare i passaporti!" },
            { time: "09:00–11:30", icon: "place", title: "Palazzo d'Estate 颐和园", highlight: true,
              description: "2–3 ore. Luce mattutina sul lago favolosa. Entrare da Summer Palace North Gate (Beigongmen). Biglietti acquistabili sul posto.",
              attraction: A.summPalace },
            { time: "Pomeriggio", icon: "place", title: "Hutong con Didi",
              description: "Nanluoguxiang South Entrance (~30 min di Didi). Nell'ordine: Mao'er Hutong → Yuer Hutong → Baochao Hutong (facoltativo) → Drum & Bell Tower.",
              attraction: A.hutong },
            { time: "18:00", icon: "food", title: "Anatra alla Pechinese – Siji Minfu", highlight: true,
              description: "32 Dengshikou W St. Coda anche 2 ore (domenica). Arrivare entro le 18, lasciare il nome, fare un giro e tornare. Non accetta prenotazioni.",
              attraction: A.siji },
            { icon: "transport", title: "Ritorno con Didi" },
          ]}
        />
        <DayCard
          day="02"
          date="20 Aprile · Lunedì"
          title="Grande Muraglia & Tempio del Cielo"
          items={[
            { time: "06:00", icon: "transport", title: "Partenza per Mutianyu", description: "1 ora di strada. Biglietti muraglia + funivia + toboggan si acquistano SUL POSTO. Sito: en.mutianyugreatwall.com" },
            { time: "Funivia → Torre 14", icon: "place", title: "Grande Muraglia 🏯", highlight: true,
              description: "Cabinovia fino a Torre 14. Verso ovest: 15→16→17→18→19→22/23. Versione soft: fermati a 18–19. Ritorno est fino a Torre 6.",
              attraction: A.greatWall },
            { icon: "place", title: "Toboggan 🎢 – Mutianyu Toboggan", highlight: true,
              description: "Tra Torre 5 e 6. Slittino 500 m in acciaio fino alla base. Veloce, divertente, senza fatica. Funziona salvo pioggia forte o vento." },
            { time: "Pomeriggio", icon: "place", title: "Tempio del Cielo 天坛", highlight: true,
              description: "Aperto fino alle 21. ~2 ore. Biglietto completo 4–5€. Farsi lasciare all'ingresso Est.",
              attraction: A.templeHeaven },
            { time: "Cena", icon: "food", title: "No. 69 Fangzhuangchang", description: "Noodles squisiti e yogurt tipo cheesecake — locale tipico di quartiere, zero turisti." },
            { icon: "place", title: "Mercato notturno di Wangfujing", attraction: A.wangfujing },
          ]}
        />
        <DayCard
          day="03"
          date="21 Aprile · Martedì"
          title="Città Proibita & Partenza"
          items={[
            { time: "08:00–12:00", icon: "place", title: "Piazza Tian'anmen + Città Proibita", highlight: true,
              description: "Biglietti GetYourGuide. ~4 ore. Porta Meridiana → Sala Armonia Suprema → Sale centrali → Quartieri imperiali → Giardino Imperiale → Uscita Nord. No borse grandi.",
              attraction: A.forbiddenCity },
            { icon: "place", title: "Jingshan Park 景山公园", highlight: true,
              description: "Salita al padiglione centrale: vista panoramica su tutta la Città Proibita. Discesa lato Ovest.",
              attraction: A.jingshan },
            { time: "Pranzo", icon: "food", title: "Pranzo leggero zona Beihai", description: "Zona con tanti localini economici vicino al lago." },
            { icon: "place", title: "Beihai Park (versione light)", description: "Passeggiata attorno al lago. Costruito nel 1179, è il parco imperiale più antico di Pechino. Panchina / tè — no templi interni." },
            { time: "15:45", icon: "place", title: "Qianmen / Dashilan (flash)", description: "Zona turistica con negozietti tradizionali — passaggio rapido." },
            { time: "16:00", icon: "transport", title: "Recupero bagagli + taxi verso stazione" },
            { time: "17:55", icon: "transport", title: "Treno Beijing West → Luoyang Longmen", highlight: true,
              description: "Arrivo 20:54. La stazione Longmen è a ~10 km dal centro. Taxi/Didi 20–25 min, ~3–5€." },
          ]}
        />
      </div>
    </section>
  );
}
