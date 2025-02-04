export default [
  { heading: "Dashboards" },
  {
    title: "Dashboards",
    icon: { icon: "tabler-smart-home" },
    children: [
      {
        title: "Genel Durum",
        to: "home-page",
        action: "zz",
        subject: "zz",
      },
      {
        title: "YTK Dashboard",
        to: "dashboards-dashboard-ytk",
        action: "read_dashboard",
        subject: "Dashboard",
      },
      {
        title: "DTK Dashboard",
        to: "dashboards-dashboard-dtk",
        action: "read_dashboard",
        subject: "Dashboard",
      },
      {
        title: "ESD Dashboard",
        to: "dashboards-dashboard-esd",
        action: "read_dashboard",
        subject: "Dashboard",
      },
      {
        title: "Sensör Dashboard",
        to: "dashboards-dashboard-snsr",
        action: "read_dashboard",
        subject: "Dashboard",
      },
    ],
  },
 ];
