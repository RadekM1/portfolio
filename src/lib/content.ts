import { MdScreenshotMonitor } from "react-icons/md";
import { CiServer, CiHeart } from "react-icons/ci";

export const btns = [
  { Icon: MdScreenshotMonitor, label: "Frontend" },
  { Icon: CiServer, label: "Backend" },
  { Icon: CiHeart, label: "Oblíbené" },
];

export const frontEndText = [
  {
    title: "Jazyky a frameworky",
    text: [
      "- HTML5",
      "- CSS3",
      "- Javascript",
      "- Typescript",
      "- React",
      "- Next.js",
    ],
  },
  {
    title: "UI knihovny",
    text: [
      "- Tailwind",
      "- Material UI",
      "- shadcn/ui",
      "- Wind UI",
      "- Headless UI",
      "- Motion",
    ],
  },
];

export const backEndText = [
  {
    title: "Jazyky",
    text: [
      "- Typescript (strict mode, včetně ZOD runtime validace pro bezpečný kód)",
      "- C# (pro robustní aplikace)",
      "- PHP (pokud je potřeba jen pár skriptů nebo Wordpress)",
      "- Visual basic (občas se hodí šikovný algoritmus v excelu)",
    ],
  },
  {
    title: "Databáze",
    text: [
      "- MySQL (když je potřeba rychlá a lehká databáze)",
      "- PostgreSQL (pro komplexnější aplikace)",
      "- Firebase (NoSQL databáze za pár korun)",
    ],
  },
  {
    title: "Cloud a hosting",
    text: [
      "- Google cloud (storage, app engine, analytics)",
      "- Azure (ASP.NET CORE web API pro extrémně rychlý a bezpečný backend, integrace aplikací do firemních MS office struktur)",
      "- DigitalOcean (Node.js pro Next.js včetně github actions za 5 EUR)",
      "- Active 24 (kvalitní hosting od 20kč pokud stačí pár PHP scriptů)",
      "- Vercel (ideální pro vývoj a testování s Next.js)",
    ],
  },
  {
    title: "Redakční systémy",
    text: [
      "- Headless Wordpress (nejpoužívanější CMS na světě a NEXT.js jako frontend = perfektní kombo.)",
      "- Redakční systém na míru (když krabicové řešení nestačí. Například pro specializované aplikace, nebo když je v plánu integrace)",
    ],
  },
];
