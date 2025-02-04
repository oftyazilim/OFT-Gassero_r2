export default [
  { heading: "AYARLAR" },
  {
    title: "Ayarlar",
    icon: { icon: "tabler-settings-question" },
    children: [
      {
        title: "Kullanıcılar",
        to: "personel-kullanicilar",
        action: "read",
        subject: "Planlama",
      },
      {
        title: "Roller",
        to: "personel-roller",
        action: "read",
        subject: "Planlama",
      },
      // {
      //   title: "İzinler",
      //   to: "personel-izinler",
      //   action: "read",
      //   subject: "Planlama",
      // },
      // {
      //   title: "Test Sayfası",
      //   to: "personel-drag-drop",
      //   action: "read",
      //   subject: "Planlama",
      // },

    ],
  },
];
