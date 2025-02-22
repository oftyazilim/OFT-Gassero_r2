export default [
  { heading: "prosesler" },
  {
    title: "Eşanjör",
    icon: { icon: "tabler-progress-bolt" },
    action: "read",
    subject: "Uretim",
    children: [
      {
        title: "Serpantin Büküm",
        to: "uretim-esanjor-bukum",
        action: "read",
        subject: "EsBukum",
      },
      {
        title: "Serpantin End-Forming",
        to: "uretim-esanjor-havsa",
        action: "read",
        subject: "EsEndForm",
      },
      {
        title: "Yıkama - Sızdırmazlık",
        to: "uretim-esanjor-test",
        action: "read",
        subject: "EsYikama",
      },
      {
        title: "Serpantin Açma-Tarak",
        to: "uretim-esanjor-acma",
        action: "read",
        subject: "EsAcma",
      },
      {
        title: "Eşanjör Montaj",
        to: "uretim-esanjor-montaj",
        action: "read",
        subject: "EsMontaj",
      },
      {
        title: "Eşanjör Rework",
        to: "uretim-rework",
        action: "read",
        subject: "EsRework",
      },
    ],
  },
];
