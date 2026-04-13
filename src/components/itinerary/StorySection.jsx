import { motion } from "framer-motion";

const paragraphs = [
  {
    text: "Tutto inizia con un volo verso Pechino, dove l'aria odora di storia imperiale e anatra laccata. La Grande Muraglia a Mutianyu ti lascia senza fiato: non la fotografia, non i video — ma il momento esatto in cui ti fermi su una torre e realizzi che quelle pietre le hanno posate a mano, secoli fa, sulle costole di una montagna.",
    image: "/assets/images/great-wall-mutianyu.jpg",
    imageCaption: "Grande Muraglia a Mutianyu",
    imageLeft: false,
  },
  {
    text: "A Xi'An l'Esercito di Terracotta ti cambia la prospettiva. Diecimila soldati d'argilla, ognuno con un viso diverso, che aspettano ancora. Poi esci dal museo e ti ritrovi nel Quartiere Musulmano tra il fumo degli spiedini e il profumo del roujiamo — il Hamburger cinese — e capisci che questa città è stratificata come una cipolla.",
    image: "/assets/images/xian-muslim-quarter.jpg",
    imageCaption: "Quartiere Musulmano di notte",
    imageLeft: true,
  },
  {
    text: "Chengdu ti rallenta. I panda fanno esattamente quello che ti aspetti: mangiano bambù con una calma regale e assoluta, come se il mondo non li riguardasse. Al People's Park gli anziani giocano a mahjong e bevono tè al gelsomino. La sera, l'hotpot bolle rosso fuoco e brucia la lingua in modo che non dimentichi.",
    image: "/assets/images/photo-1564349683136-77e08dba1ef7.jpg",
    imageCaption: "Panda alla Chengdu Research Base",
    imageLeft: false,
  },
  {
    text: "Poi arriva Zhangjiajie — e qui le parole non bastano. Le colonne di pietra emergono dalla nebbia come qualcosa di immaginato, non di reale. Sono le montagne che hanno ispirato Pandora in Avatar, e quando ci sei in mezzo capisci perché James Cameron abbia trascorso anni a fotografarle. Il Bailong Elevator ti porta su in 90 secondi; le gambe impiegano un po' di più a smettere di tremare.",
    image: "/assets/images/avatar-pillars.jpg",
    imageCaption: "Le colonne sospese di Zhangjiajie",
    imageLeft: true,
  },
  {
    text: "Guilin e Yangshuo sono un quadro. Il fiume Li scorre tra montagne carsiche a forma di dente, e tu ci vai sopra con una zattera di bambù mentre un pescatore con un cormorano ti guarda passare. A Shanghai tutto cambia scala: grattacieli che sfidano le nuvole, xiao long bao che esplodono in bocca, e il Bund di notte che sembra una scena da un film del futuro. È qui che il viaggio finisce — e probabilmente vuoi ricominciarlo da capo.",
    image: "/assets/images/shanghai-night.jpg",
    imageCaption: "Shanghai by night",
    imageLeft: false,
  },
];

export default function StorySection() {
  return (
    <section className="py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Il Viaggio</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Una storia da raccontare</h2>
        <div className="w-12 h-[2px] bg-primary mx-auto mt-6" />
      </motion.div>

      <div className="space-y-16 md:space-y-24">
        {paragraphs.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${p.imageLeft ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-10 items-center`}
          >
            <div className="w-full md:w-1/2 shrink-0">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                <img src={p.image} alt={p.imageCaption} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                  <p className="font-body text-xs text-white/80 italic">{p.imageCaption}</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <p className="font-display text-base md:text-lg leading-relaxed text-foreground/80 italic">
                "{p.text}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
