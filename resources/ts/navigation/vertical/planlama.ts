export default [
  { heading: "PLANLAMA / ÜRETİM" },
  {
    title: "Planlama",
    icon: { icon: "tabler-calendar-time" },
    action: "read",
    subject: "Dashboard",
    children: [
      {
        title: "İş Emirleri",
        to: "planlama-isemirleri",
        action: "readx",
        subject: "Dashboardx",
      },
    ],
  },
  {
    title: "Üretim",
    icon: { icon: "tabler-settings-bolt" },
    action: "readx",
    subject: "Dashboardx",
    children: [
      {
        title: "Üretim Girişleri",
        to: "planlama-uretimgirisleri",
        action: "readx",
        subject: "SuperAdminx",
      },
      {
        title: "Iskarta Girişleri",
        to: "planlama-iskartagirisleri",
        action: "readx",
        subject: "SuperAdminx",
      },
      {
        title: "Eşanjör Üretimleri",
        to: "planlama-esanjor-uretim",
        action: "readx",
        subject: "SuperAdminx",
      },
    ],
  },
];
