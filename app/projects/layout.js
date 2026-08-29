export const metadata = {
  title: "Featured Production Case Studies & Engineering Projects",
  description:
    "Explore flagship production case studies engineered by Khaira Studio, including CityWeaver Smart City Governance GIS Platform (cityweaver.in) and Write Here Interactive EdTech Platform.",
  keywords: [
    "CityWeaver Platform",
    "CityWeaver GIS",
    "Write Here Platform",
    "Smart City Urban Governance",
    "Interactive E-Learning EdTech Whiteboard",
    "Khaira Studio Case Studies",
    "Fullstack Production Projects",
    "Next.js GIS GeoJSON",
    "WebSockets Real-time Platform",
    "Cloud Architecture Azure AWS",
  ],
  alternates: {
    canonical: "https://khairadigitalsolutions.com/projects",
  },
  openGraph: {
    title: "Production Case Studies | CityWeaver & Write Here | Khaira Studio",
    description:
      "Explore production case studies featuring real-time spatial data, interactive whiteboards, Next.js, WebSockets, GIS mapping, and cloud deployments.",
    url: "https://khairadigitalsolutions.com/projects",
    images: [
      {
        url: "/cityweaver/1.png",
        width: 1200,
        height: 630,
        alt: "CityWeaver Platform Case Study",
      },
    ],
  },
};

export default function ProjectsLayout({ children }) {
  return <>{children}</>;
}
