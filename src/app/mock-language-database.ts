import { SearchResultRow } from "./models/searchResultRow";

export const ROWS: SearchResultRow[] = [
  // {
  //   id: 1,
  //   knownLangWord: "abdomen",
  //   unknownLangWord: "abdomen",
  //   knownLangDescription: "area of the body between thorax and plevis",
  //   unknownLangDescription:
  //     "partie du corps limitée en haut par le diaphragme,qui le sépare du thorax et en bas par le bassin"
  // },
  // {
  //   id: 2,
  //   knownLangWord: "abdominal",
  //   unknownLangWord: "abdominal",
  //   knownLangDescription: "pertaining to the abdomen",
  //   unknownLangDescription: "relatif à l'abdomen"
  // },
  // {
  //   id: 3,
  //   knownLangWord: "abduct, abduction ",
  //   unknownLangWord: "abduction",
  //   knownLangDescription:
  //     "movement of a body part away from the midline of the body",
  //   unknownLangDescription:
  //     "mouvement qui écarte un membre ou un segment de membre de l'axe médian du corps"
  // },
  // {
  //   id: 4,
  //   knownLangWord: "abducted gait",
  //   unknownLangWord: "marche en abduction",
  //   knownLangDescription: "walking with the legs spread away from the midline",
  //   unknownLangDescription:
  //     "marche avec les jambes écartées par rapport à l'axe médian du corps"
  // },
  // {
  //   id: 5,
  //   knownLangWord: "abductor",
  //   unknownLangWord: "abducteur",
  //   knownLangDescription:
  //     "muscle that moves a body part away from the midline of the body",
  //   unknownLangDescription:
  //     "se dit de tout muscle qui provoque un mouvement d'abduction"
  // },
  // {
  //   id: 6,
  //   knownLangWord: "ability to walk",
  //   unknownLangWord: "aptitude à la marche",
  //   knownLangDescription: "walking, mobility, quality of life factor",
  //   unknownLangDescription: "marche,mobilité,facteur de qualité de vie"
  // },
  // {
  //   id: 7,
  //   knownLangWord: "ablatio mammae (mastectomy)",
  //   unknownLangWord: "mastectomie",
  //   knownLangDescription: "surgical removal of  breast",
  //   unknownLangDescription: "ablation chirurgicale d'un sein"
  // },
  // {
  //   id: 8,
  //   knownLangWord: "ablation",
  //   unknownLangWord: "ablation",
  //   knownLangDescription: "surgical removal",
  //   unknownLangDescription: "synonyme d'élimination, d'ablation (amputation)"
  // },
  // {
  //   id: 9,
  //   knownLangWord: "above elbow (AE) amputation",
  //   unknownLangWord: "ISO Term: Only Available in English",
  //   knownLangDescription:
  //     "amputation through the humerus between the shoulder joint and the elbow joint ",
  //   unknownLangDescription: ""
  // },
  // {
  //   id: 10,
  //   knownLangWord: "above elbow (AE) prosthesis",
  //   unknownLangWord: "aptitude à la marche",
  //   knownLangDescription:
  //     "prosthesis for a person with a trans-humeral amputation ",
  //   unknownLangDescription: "prothèse pour une amputation trans-humérale"
  // },
  // {
  //   id: 11,
  //   knownLangWord: "above the knee (AK) amputation",
  //   unknownLangWord: "ISO Term: Only Available in English",
  //   knownLangDescription:
  //     "amputation through the femur (thigh bone) between the hip joint and the knee joint",
  //   unknownLangDescription: ""
  // },
  // {
  //   id: 12,
  //   knownLangWord: "above the knee (AK) prosthesis",
  //   unknownLangWord: "prothèse trans-fémorale",
  //   knownLangDescription: "prosthesis for transfemoral amputation - (AK)",
  //   unknownLangDescription: "prothèse pour une amputation trans-fémorale"
  // },

  {
    id: 1,
    knownLangWord: "abdomen",
    unknownLangWord: "Bauch, der",
    knownLangDescription: "area of the body between thorax and plevis",
    unknownLangDescription: "Körperregion zwischen Brustkorb und Becken",
    isoStandard: false
  },
  {
    id: 2,
    knownLangWord: "abdominal",
    unknownLangWord: "abdominal",
    knownLangDescription: "pertaining to the abdomen",
    unknownLangDescription: "in Bezug zum Abdomen (Bauch)",
    isoStandard: true
  },
  {
    id: 3,
    knownLangWord: "abduct, abduction ",
    unknownLangWord: "abspreizen, abduzieren",
    knownLangDescription:
      "movement of a body part away from the midline of the body",
    unknownLangDescription: "(ein Glied) von der Körpermittellinie weg bewegen",
    isoStandard: true
  },
  {
    id: 4,
    knownLangWord: "abducted gait",
    unknownLangWord: "abduzierter Gang, der",
    knownLangDescription: "walking with the legs spread away from the midline",
    unknownLangDescription: "abgespreiztes Gehen",
    isoStandard: false
  },
  {
    id: 5,
    knownLangWord: "abductor",
    unknownLangWord: "Abduktor, der",
    knownLangDescription:
      "muscle that moves a body part away from the midline of the body",
    unknownLangDescription: "abduzierender Muskel",
    isoStandard: false
  }
];
