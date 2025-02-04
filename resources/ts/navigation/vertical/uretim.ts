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
        subject: "Uretim",
      },
      {
        title: "Serpantin End-Forming",
        to: "uretim-esanjor-havsa",
        action: "read",
        subject: "Uretim",
      },
      {
        title: "Yıkama - Sızdırmazlık",
        to: "uretim-esanjor-test",
        action: "read",
        subject: "Uretim",
      },
      {
        title: "Serpantin Açma-Tarak",
        to: "uretim-esanjor-acma",
        action: "read",
        subject: "Uretim",
      },
      {
        title: "Eşanjör Montaj",
        to: "uretim-esanjor-montaj",
        action: "read",
        subject: "Uretim",
      },
    ],
  },
];
