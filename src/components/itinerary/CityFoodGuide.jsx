import { useState } from "react";
import { motion } from "framer-motion";
import { Candy, Soup, UtensilsCrossed, Volume2, Loader } from "lucide-react";

const iconMap = {
  piatto: UtensilsCrossed,
  dolce: Candy,
  sfizio: Soup,
};

const typeLabel = {
  piatto: "Piatto",
  dolce: "Dolce",
  sfizio: "Sfizio",
};

function SpeakButton({ chinese, reading }) {
  const [speaking, setSpeaking] = useState(false);

  const speak = () => {
    if (!window.speechSynthesis || speaking) return;
    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(chinese);
    utter.lang = "zh-CN";
    utter.rate = 0.85;

    // prefer a Chinese voice if available
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
      title={`Pronuncia: ${reading}`}
      className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-body text-[11px] transition-all ${
        speaking
          ? "border-primary/40 bg-primary/10 text-primary"
          : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-primary"
      }`}
    >
      {speaking
        ? <Loader className="h-3 w-3 animate-spin" />
        : <Volume2 className="h-3 w-3" />}
      <span>{speaking ? "..." : reading}</span>
    </button>
  );
}

function FoodItem({ item, index }) {
  const Icon = iconMap[item.type] || UtensilsCrossed;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group rounded-2xl border border-border bg-card shadow-sm overflow-hidden"
    >
      {item.image && (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-4">
        <div className="mb-3 flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2 text-primary">
            <Icon className="h-4 w-4" />
          </div>
          <span className="font-body text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            {typeLabel[item.type] || item.type}
          </span>
        </div>

        <h4 className="font-display text-lg font-semibold text-foreground">{item.name}</h4>
        <p className="font-body text-sm text-primary mb-2">{item.chinese}</p>
        <SpeakButton chinese={item.chinese} reading={item.reading} />
        <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">{item.description}</p>
      </div>
    </motion.article>
  );
}

export default function CityFoodGuide({ title = "Cosa assaggiare", subtitle, items = [] }) {
  if (!items.length) return null;

  return (
    <section className="mt-8 rounded-[28px] border border-border bg-gradient-to-br from-primary/5 via-background to-background p-5 sm:p-6">
      <div className="mb-6">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">Food Notes</p>
        <h3 className="mt-2 font-display text-2xl font-bold text-foreground">{title}</h3>
        {subtitle && (
          <p className="mt-2 max-w-2xl font-body text-sm leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <FoodItem key={`${item.name}-${item.chinese}`} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
