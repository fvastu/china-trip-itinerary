import { useState } from "react";
import { motion } from "framer-motion";
import { Volume2, Loader } from "lucide-react";

const categories = [
  {
    label: "Basi",
    emoji: "👋",
    phrases: [
      { it: "Ciao / Salve", zh: "你好", pinyin: "Nǐ hǎo" },
      { it: "Grazie", zh: "谢谢", pinyin: "Xièxiè" },
      { it: "Prego", zh: "不客气", pinyin: "Bù kèqì" },
      { it: "Scusa / Mi dispiace", zh: "对不起", pinyin: "Duìbuqǐ" },
      { it: "Sì", zh: "是", pinyin: "Shì" },
      { it: "No", zh: "不", pinyin: "Bù" },
      { it: "Non capisco", zh: "我不明白", pinyin: "Wǒ bù míngbái" },
      { it: "Parla più lentamente?", zh: "请说慢一点", pinyin: "Qǐng shuō màn yīdiǎn" },
    ],
  },
  {
    label: "Orientarsi",
    emoji: "🗺️",
    phrases: [
      { it: "Dov'è la metro?", zh: "地铁站在哪里？", pinyin: "Dìtiě zhàn zài nǎlǐ?" },
      { it: "Voglio andare a...", zh: "我想去...", pinyin: "Wǒ xiǎng qù..." },
      { it: "Quanto dista?", zh: "有多远？", pinyin: "Yǒu duō yuǎn?" },
      { it: "Gira a sinistra", zh: "向左转", pinyin: "Xiàng zuǒ zhuǎn" },
      { it: "Gira a destra", zh: "向右转", pinyin: "Xiàng yòu zhuǎn" },
      { it: "Vai dritto", zh: "直走", pinyin: "Zhí zǒu" },
      { it: "Chiamami un taxi", zh: "帮我叫出租车", pinyin: "Bāng wǒ jiào chūzūchē" },
      { it: "Aeroporto", zh: "机场", pinyin: "Jīchǎng" },
      { it: "Stazione ferroviaria", zh: "火车站", pinyin: "Huǒchē zhàn" },
      { it: "Hotel", zh: "酒店", pinyin: "Jiǔdiàn" },
    ],
  },
  {
    label: "Al ristorante",
    emoji: "🍜",
    phrases: [
      { it: "Un tavolo per due", zh: "两个人的桌子", pinyin: "Liǎng gè rén de zhuōzi" },
      { it: "Il menù, per favore", zh: "请给我菜单", pinyin: "Qǐng gěi wǒ càidān" },
      { it: "Questo, per favore", zh: "这个，谢谢", pinyin: "Zhège, xièxiè" },
      { it: "Non piccante", zh: "不要辣", pinyin: "Bù yào là" },
      { it: "Poco piccante", zh: "微辣", pinyin: "Wēi là" },
      { it: "No coriandolo", zh: "不要香菜", pinyin: "Bù yào xiāngcài" },
      { it: "Molto buono!", zh: "很好吃！", pinyin: "Hěn hào chī!" },
      { it: "Il conto, per favore", zh: "买单", pinyin: "Mǎidān" },
      { it: "Sono allergico a...", zh: "我对...过敏", pinyin: "Wǒ duì... guòmǐn" },
      { it: "Senza carne di maiale", zh: "不要猪肉", pinyin: "Bù yào zhūròu" },
      { it: "Acqua, per favore", zh: "请给我水", pinyin: "Qǐng gěi wǒ shuǐ" },
      { it: "Acqua calda, per favore", zh: "请给我热水", pinyin: "Qǐng gěi wǒ rè shuǐ" },
      { it: "Senza ghiaccio", zh: "不要冰", pinyin: "Bù yào bīng" },
      { it: "Da portare via", zh: "打包", pinyin: "Dǎbāo" },
    ],
  },
  {
    label: "Sopravvivenza",
    emoji: "🚨",
    phrases: [
      { it: "Dov'è il bagno?", zh: "厕所在哪里？", pinyin: "Cèsuǒ zài nǎlǐ?" },
      { it: "No coriandolo", zh: "不要香菜", pinyin: "Bù yào xiāngcài" },
      { it: "Non piccante", zh: "不要辣", pinyin: "Bù yào là" },
      { it: "Poco piccante", zh: "微辣", pinyin: "Wēi là" },
      { it: "Senza glutine", zh: "无麸质", pinyin: "Wú fūzhì" },
      { it: "Sono vegetariano", zh: "我吃素", pinyin: "Wǒ chī sù" },
      { it: "Senza maiale", zh: "不要猪肉", pinyin: "Bù yào zhūròu" },
      { it: "Senza frutti di mare", zh: "不要海鲜", pinyin: "Bù yào hǎixiān" },
      { it: "Ho fame", zh: "我饿了", pinyin: "Wǒ è le" },
      { it: "Ho sete", zh: "我渴了", pinyin: "Wǒ kě le" },
      { it: "Sono stanco", zh: "我累了", pinyin: "Wǒ lèi le" },
      { it: "Ho freddo", zh: "我冷", pinyin: "Wǒ lěng" },
      { it: "Ho caldo", zh: "我热", pinyin: "Wǒ rè" },
      { it: "Aspetta un momento", zh: "等一下", pinyin: "Děng yīxià" },
      { it: "Non toccare", zh: "不要碰", pinyin: "Bù yào pèng" },
      { it: "Lasciami stare", zh: "别烦我", pinyin: "Bié fán wǒ" },
    ],
  },
  {
    label: "Shopping",
    emoji: "🛍️",
    phrases: [
      { it: "Quanto costa?", zh: "多少钱？", pinyin: "Duōshǎo qián?" },
      { it: "Troppo caro", zh: "太贵了", pinyin: "Tài guì le" },
      { it: "Puoi fare uno sconto?", zh: "可以便宜一点吗？", pinyin: "Kěyǐ piányí yīdiǎn ma?" },
      { it: "Lo prendo", zh: "我要这个", pinyin: "Wǒ yào zhège" },
      { it: "Non lo voglio", zh: "我不要", pinyin: "Wǒ bù yào" },
      { it: "Posso pagare con carta?", zh: "可以刷卡吗？", pinyin: "Kěyǐ shuākǎ ma?" },
      { it: "Accettate WeChat Pay?", zh: "可以用微信支付吗？", pinyin: "Kěyǐ yòng Wēixìn zhīfù ma?" },
      { it: "Ho solo contanti", zh: "我只有现金", pinyin: "Wǒ zhǐyǒu xiànjīn" },
      { it: "Posso provarlo?", zh: "我可以试试吗？", pinyin: "Wǒ kěyǐ shìshi ma?" },
    ],
  },
  {
    label: "Emergenze",
    emoji: "🆘",
    phrases: [
      { it: "Aiuto!", zh: "救命！", pinyin: "Jiùmìng!" },
      { it: "Chiama la polizia", zh: "叫警察", pinyin: "Jiào jǐngchá" },
      { it: "Ho bisogno di un medico", zh: "我需要医生", pinyin: "Wǒ xūyào yīshēng" },
      { it: "Mi sono perso", zh: "我迷路了", pinyin: "Wǒ mílù le" },
      { it: "Ho perso il passaporto", zh: "我的护照丢了", pinyin: "Wǒ de hùzhào diū le" },
      { it: "Dov'è l'ospedale?", zh: "医院在哪里？", pinyin: "Yīyuàn zài nǎlǐ?" },
    ],
  },
  {
    label: "Da ricordare",
    emoji: "⭐",
    phrases: [
      { it: "Scansiona il mio QR code", zh: "扫我的二维码", pinyin: "Sǎo wǒ de èrwéimǎ" },
      { it: "Puoi scrivermelo?", zh: "你能写给我吗？", pinyin: "Nǐ néng xiě gěi wǒ ma?" },
      { it: "Dove si compra il biglietto?", zh: "在哪里买票？", pinyin: "Zài nǎlǐ mǎi piào?" },
      { it: "C'è il Wi-Fi?", zh: "有Wi-Fi吗？", pinyin: "Yǒu Wi-Fi ma?" },
      { it: "Qual è la password del Wi-Fi?", zh: "Wi-Fi密码是什么？", pinyin: "Wi-Fi mìmǎ shì shénme?" },
      { it: "Fai una foto con noi?", zh: "可以和我们合照吗？", pinyin: "Kěyǐ hé wǒmen hézhào ma?" },
      { it: "Buon viaggio!", zh: "一路平安！", pinyin: "Yīlù píng'ān!" },
      { it: "Cin cin!", zh: "干杯！", pinyin: "Gānbēi!" },
    ],
  },
];

function SpeakButton({ zh, pinyin }) {
  const [speaking, setSpeaking] = useState(false);

  const speak = () => {
    if (!window.speechSynthesis || speaking) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(zh);
    utter.lang = "zh-CN";
    utter.rate = 0.8;
    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find(v => v.lang.startsWith("zh"));
    if (zhVoice) utter.voice = zhVoice;
    utter.onstart = () => setSpeaking(true);
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utter);
  };

  return (
    <button
      onClick={speak}
      title={`Pronuncia: ${pinyin}`}
      className={`shrink-0 rounded-full p-1.5 transition-all ${
        speaking
          ? "bg-primary/15 text-primary"
          : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
      }`}
    >
      {speaking
        ? <Loader className="h-3.5 w-3.5 animate-spin" />
        : <Volume2 className="h-3.5 w-3.5" />}
    </button>
  );
}

function PhraseRow({ phrase, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
    >
      <div className="flex-1 min-w-0">
        <p className="font-body text-xs text-muted-foreground mb-0.5">{phrase.it}</p>
        <p className="font-display text-base font-semibold text-foreground leading-tight">{phrase.zh}</p>
        <p className="font-body text-[11px] text-primary mt-0.5 italic">{phrase.pinyin}</p>
      </div>
      <SpeakButton zh={phrase.zh} pinyin={phrase.pinyin} />
    </motion.div>
  );
}

export default function ChinesePhrases() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Lingua</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Frasi Utili</h2>
        <div className="w-12 h-[2px] bg-primary mx-auto mt-6 mb-4" />
        <p className="font-body text-sm text-muted-foreground max-w-sm mx-auto">
          Tocca 🔊 per sentire la pronuncia in mandarino. Salva questa pagina offline prima di partire.
        </p>
      </motion.div>

      {/* Category tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center scrollbar-hide">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-body whitespace-nowrap transition-all shrink-0 ${
              active === i
                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                : "bg-card text-muted-foreground border-border hover:border-primary/50"
            }`}
          >
            <span>{cat.emoji}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Phrases list */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="space-y-2"
      >
        {categories[active].phrases.map((phrase, i) => (
          <PhraseRow key={i} phrase={phrase} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
