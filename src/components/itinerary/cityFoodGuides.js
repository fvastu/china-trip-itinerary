const F = "/assets/images/food/";

export const cityFoodGuides = {
  beijing: [
    {
      type: "piatto",
      name: "Anatra alla Pechinese",
      reading: "Běijīng kǎoyā",
      chinese: "北京烤鸭",
      image: F + "peking-duck.jpg",
      description: "Anatra laccata cotta in forno a legna, servita con crepes sottili, cipollotto e salsa hoisin. La pelle è croccante e caramellata."
    },
    {
      type: "piatto",
      name: "Noodles Zhajiang",
      reading: "Zhàjiàng miàn",
      chinese: "炸酱面",
      image: F + "zhajiangmian.jpg",
      description: "Spaghetti di grano con ragù denso di pasta di soia fermentata e maiale tritato, guarniti con cetriolo e germogli. Il comfort food pechinese per eccellenza."
    },
    {
      type: "sfizio",
      name: "Jianbing",
      reading: "Jiānbǐng",
      chinese: "煎饼",
      image: F + "jianbing.jpg",
      description: "Crêpe salata da strada fatta su piastra rotonda: uovo, pasta di fagioli, erbe, cipollotto e un foglio di wonton croccante. La colazione dei pechinesi."
    },
    {
      type: "sfizio",
      name: "Tanghulu",
      reading: "Tánghúlu",
      chinese: "糖葫芦",
      image: F + "tanghulu.jpg",
      description: "Spiedino di biancospino (o fragole) caramellato in zucchero soffiato. Croccante fuori, aspro e succoso dentro. Iconico street food."
    },
    {
      type: "dolce",
      name: "Involtini Lüdagun",
      reading: "Lǘdǎgǔn",
      chinese: "驴打滚",
      description: "Rotolini morbidi di riso glutinoso ripieni di crema di fagioli rossi, rotolati nella farina di soia tostata. Nome buffo: 'asino che rotola nella polvere'."
    },
    {
      type: "dolce",
      name: "Wandouhuang",
      reading: "Wāndòuhuáng",
      chinese: "豌豆黄",
      image: F + "wandouhuang.jpg",
      description: "Dolcetto imperiale a base di purea di piselli gialli, dalla consistenza simile al budino. Era il preferito dell'imperatrice Cixi."
    },
    {
      type: "sfizio",
      name: "Yogurt di Pechino in vasetto",
      reading: "Lǎo Běijīng suānnǎi",
      chinese: "老北京酸奶",
      image: F + "beijing-yogurt.jpg",
      description: "Yogurt denso e leggermente acidulo, servito freddo in piccoli vasetti di terracotta. Snack rinfrescante onnipresente agli angoli delle strade."
    }
  ],
  luoyang: [
    {
      type: "piatto",
      name: "Banchetto dell'Acqua",
      reading: "Shuǐxí",
      chinese: "水席",
      description: "Sequenza cerimoniale di 24 portate tutte in brodo o salsa, servite una dopo l'altra come acqua che scorre. Specialità storica millenaria di Luoyang."
    },
    {
      type: "piatto",
      name: "Zuppa della Peonia",
      reading: "Mǔdān yàncài",
      chinese: "牡丹燕菜",
      description: "Piatto simbolo della città: zuppa elegante con ravanello tagliato finissimo che ricorda il nido di rondine, spesso decorata a forma di peonia."
    },
    {
      type: "sfizio",
      name: "Panino alla carne d'asino",
      reading: "Lǘròu huǒshāo",
      chinese: "驴肉火烧",
      image: F + "donkey-sandwich.jpg",
      description: "Pane croccante farcito con carne d'asino brasata e sminuzzata. Molto amato nella regione — il detto locale recita: 'in cielo la carne di drago, in terra quella d'asino'."
    },
    {
      type: "dolce",
      name: "Torta di Peonia",
      reading: "Mǔdān bǐng",
      chinese: "牡丹饼",
      description: "Dolce secco e friabile ispirato al fiore simbolo di Luoyang, con ripieno delicato a base di semi, fagioli rossi o petali di peonia."
    }
  ],
  xian: [
    {
      type: "piatto",
      name: "Roujiamo",
      reading: "Ròujiāmó",
      chinese: "肉夹馍",
      image: F + "roujiamo.jpg",
      description: "L''hamburger cinese' più antico del mondo: carne di maiale stufata per ore in spezie, servita in un pane croccante cotto al forno d'argilla."
    },
    {
      type: "piatto",
      name: "Noodles Biang Biang",
      reading: "Biángbiáng miàn",
      chinese: "BiángBiáng面",
      image: F + "biangbiang.jpg",
      description: "Tagliatelle larghissime tirate a mano e sbattute sul banco. Condite con peperoncino in olio bollente versato davanti a te. Il carattere 'biáng' è il più complesso del cinese."
    },
    {
      type: "piatto",
      name: "Pane nel brodo di agnello",
      reading: "Yángròu pàomó",
      chinese: "羊肉泡馍",
      description: "Zuppa di montone: tu spezzi il pane a mano nella ciotola, poi il cuoco ci versa sopra il brodo ricco e profumato. Un rituale."
    },
    {
      type: "piatto",
      name: "Liangpi",
      reading: "Liángpí",
      chinese: "凉皮",
      image: F + "liangpi.jpg",
      description: "Tagliatelle fredde trasparenti di amido, condite con aceto, peperoncino, aglio e sesamo. Perfette d'estate, ma si mangiano tutto l'anno."
    },
    {
      type: "sfizio",
      name: "Spiedini del Quartiere Musulmano",
      reading: "Kǎo ròu chuàn",
      chinese: "烤肉串",
      description: "Spiedini di agnello speziati con cumino e peperoncino, cotti alla brace nei vicoli pieni di fumo e profumi del quartiere Hui."
    },
    {
      type: "sfizio",
      name: "Bevanda di prugne acide",
      reading: "Suānméitāng",
      chinese: "酸梅汤",
      image: F + "suanmeitang.jpg",
      description: "Bevanda ghiacciata di prugne affumicate, biancospino e osmanto. Agrodolce e rinfrescante, perfetta dopo il piccante."
    }
  ],
  chengdu: [
    {
      type: "piatto",
      name: "Hotpot del Sichuan",
      reading: "Sìchuān huǒguō",
      chinese: "四川火锅",
      image: F + "hotpot.jpg",
      description: "Pentolone di brodo bollente rosso fuoco (pepe di Sichuan + peperoncino) in cui immergi carne, verdure e tofu. Chiedi il 'doppio brodo' se non sei abituato."
    },
    {
      type: "piatto",
      name: "Mapo Tofu",
      reading: "Mápó dòufu",
      chinese: "麻婆豆腐",
      image: F + "mapo-tofu.jpg",
      description: "Tofu morbidissimo in salsa di peperoncino e pepe di Sichuan con maiale tritato. 'Má' è l'intorpidimento unico del pepe di Sichuan."
    },
    {
      type: "piatto",
      name: "Noodles Dan Dan",
      reading: "Dàndàn miàn",
      chinese: "担担面",
      image: F + "dandan-noodles.jpg",
      description: "Noodles sottili in salsa di sesamo, peperoncino e carne macinata. Porzione piccola perché nasce come spuntino dei venditori ambulanti col bilanciere."
    },
    {
      type: "sfizio",
      name: "Chuanchuanxiang",
      reading: "Chuànchuànxiāng",
      chinese: "串串香",
      description: "Spiedini di ogni cosa (carne, verdure, funghi) immersi in un pentolone di brodo speziato. Lo street food hotpot: scegli gli spiedini e paghi a peso."
    },
    {
      type: "piatto",
      name: "Wonton piccanti",
      reading: "Lóngchāoshǒu",
      chinese: "龙抄手",
      image: F + "wontons.jpg",
      description: "Wonton in brodo piccante o con olio al peperoncino. La pasta è sottilissima e trasparente, il ripieno di maiale delicato."
    },
    {
      type: "dolce",
      name: "Bingfen",
      reading: "Bīngfěn",
      chinese: "冰粉",
      description: "Gelatina trasparente servita con sciroppo di zucchero bruno, semi di sesamo, arachidi e frutta. Il dessert rinfrescante dopo l'hotpot."
    },
    {
      type: "sfizio",
      name: "Coniglio piccante",
      reading: "Lěng chī tù",
      chinese: "冷吃兔",
      description: "Bocconcini di coniglio saltati con peperoncino secco e spezie, da sgranocchiare come snack salato molto locale."
    }
  ],
  zhangjiajie: [
    {
      type: "piatto",
      name: "Tofu affumicato Tujia",
      reading: "Tǔjiā xūn dòufu",
      chinese: "土家烟熏豆腐",
      image: F + "smoked-tofu.jpg",
      description: "Cubetti di tofu affumicati su carbone di legna, serviti con salsa piccante. Venduti per strada a 2–3 yuan al pezzo."
    },
    {
      type: "piatto",
      name: "Carne affumicata Tujia",
      reading: "Tǔjiā làròu",
      chinese: "土家腊肉",
      image: F + "smoked-meat.jpg",
      description: "Pancetta o maiale affumicato e stagionato, sapido e aromatico, spesso saltato con peperoni o servito con riso."
    },
    {
      type: "sfizio",
      name: "Tofu di riso di Furong",
      reading: "Mǐ dòufu",
      chinese: "米豆腐",
      description: "Preparazione fresca e morbida a base di riso, tagliata a cubetti e servita con salsa piccante, acida e profumata."
    },
    {
      type: "dolce",
      name: "Ciba",
      reading: "Cíbā",
      chinese: "糍粑",
      description: "Riso glutinoso pestato nel mortaio fino a diventare una pasta elastica, poi fritto o grigliato e cosparso di zucchero e farina di soia. Rustico e buonissimo."
    }
  ],
  guilin: [
    {
      type: "piatto",
      name: "Spaghetti di riso di Guilin",
      reading: "Guìlín mǐfěn",
      chinese: "桂林米粉",
      image: F + "guilin-noodles.jpg",
      description: "Noodles di riso in brodo cotto 24 ore con ossa e 20+ spezie. Si mangia a colazione, in piedi al bancone. Ogni negozio ha la sua ricetta segreta."
    },
    {
      type: "piatto",
      name: "Anatra alla birra di Yangshuo",
      reading: "Píjiǔ yā",
      chinese: "啤酒鸭",
      description: "Anatra stufata con birra locale, peperoni e spezie fino a diventare tenera e saporita. Specialità di Yangshuo, da provare lungo West Street."
    },
    {
      type: "sfizio",
      name: "Tè all'olio del Guangxi",
      reading: "Yóuchá",
      chinese: "油茶",
      description: "Bevanda salata e tostata delle minoranze locali, preparata con tè pestato e arricchita con riso soffiato, arachidi e cipollotto. Sembra strano ma è comfort food puro."
    },
    {
      type: "dolce",
      name: "Torta di castagna d'acqua",
      reading: "Mǎtí gāo",
      chinese: "马蹄糕",
      image: F + "water-chestnut-cake.jpg",
      description: "Dolce traslucido, fresco e leggermente elastico, fatto con fecola di castagna d'acqua e zucchero."
    }
  ],
  shanghai: [
    {
      type: "piatto",
      name: "Xiaolongbao",
      reading: "Xiǎolóngbāo",
      chinese: "小笼包",
      image: F + "xiaolongbao.jpg",
      description: "Raviolo al vapore ripieno di maiale e brodo caldo intrappolato nella pasta. Tecnica: metti nel cucchiaio, mordi l'angolino, aspetta 10 sec, sorseggia il brodo."
    },
    {
      type: "piatto",
      name: "Shengjianbao",
      reading: "Shēngjiānbāo",
      chinese: "生煎包",
      image: F + "shengjianbao.jpg",
      description: "Il cugino fritto dello xiaolongbao: base croccante dorata, parte superiore soffice, ripieno di brodo e carne. Più rustico e saporito."
    },
    {
      type: "piatto",
      name: "Noodles all'olio di cipollotto",
      reading: "Cōngyóu bàn miàn",
      chinese: "葱油拌面",
      image: F + "scallion-pancake.jpg",
      description: "Noodles semplici ma irresistibili con olio profumato al cipollotto, salsa di soia e un gusto dolce-sapido molto shanghainese."
    },
    {
      type: "piatto",
      name: "Maiale brasato rosso",
      reading: "Hóngshāo ròu",
      chinese: "红烧肉",
      image: F + "hongshaorou.jpg",
      description: "Cubotti di pancetta di maiale brasati in salsa di soia, zucchero e vino di riso fino a diventare lucidi e caramellati. Il piatto preferito di Mao Zedong."
    },
    {
      type: "sfizio",
      name: "Granchio peloso",
      reading: "Dàzháxiè",
      chinese: "大闸蟹",
      image: F + "hairy-crab.jpg",
      description: "Piccolo granchio d'acqua dolce con uova cremose color arancio. Stagionale (autunno), ma se lo trovi è un'esperienza. Si mangia con le mani e aceto allo zenzero."
    },
    {
      type: "dolce",
      name: "Tangyuan",
      reading: "Tāngyuán",
      chinese: "汤圆",
      image: F + "tangyuan.jpg",
      description: "Palline di riso glutinoso ripiene di sesamo nero dolce, servite in brodo caldo. Quando mordi, il sesamo fuso cola fuori come lava."
    },
    {
      type: "dolce",
      name: "Qingtuan",
      reading: "Qīngtuán",
      chinese: "青团",
      image: F + "qingtuan.jpg",
      description: "Pallina verde di riso glutinoso colorata con succo d'erba d'orzo, ripiena di crema di fagioli rossi. Tipica della primavera — dovreste trovarla ad aprile!"
    }
  ]
};
