import { MdScreenshotMonitor } from "react-icons/md";
import { CiServer } from "react-icons/ci";

export const btns = [
  { Icon: MdScreenshotMonitor, label: "Frontend" },
  { Icon: CiServer, label: "Backend" },
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
    title: "Oblíbené UI knihovny",
    text: [
      "- Tailwind",
      "- Material UI",
      "- Shadcn/UI",
      "- Wind UI",
      "- Headless UI",
      "- Motion",
    ],
  },
];

export const backEndText = [
  {
    title: "Jazyky / Runtime",
    text: [
      "- Node.js (NEXT.js server funkce pro fullstack Typescript, Fastify pro REST API )",
      "- C# a .NET (pro robustní enterprise aplikace)",
      "- PHP (pokud je potřeba jen pár skriptů, nebo tenká api vrstva nad databází)",
      "- Visual basic (občas se hodí šikovný algoritmus v excelu)",
    ],
  },
  {
    title: "Databáze",
    text: [
      "- MySQL (když je potřeba rychlá a lehká databáze)",
      "- PostgreSQL (pro komplexnější aplikace)",
      "- MS SQL (enterprise klasika)",
      "- Firebase (NoSQL databáze za pár korun)",
    ],
  },
  {
    title: "Cloud a hosting",
    text: [
      "- Google cloud (API library, cloud storage, app engine, analytics)",
      "- Azure (Integrace aplikací do firemních MS office struktur)",
      "- DigitalOcean (Node.js pro Next.js včetně github actions za 5 EUR nebo VPS s dockerem od 4 EUR)",
      "- Active 24 (kvalitní hosting od 20kč pokud stačí pár PHP scriptů)",
      "- Vercel (ideální pro vývoj a testování s Next.js)",
    ],
  },
  {
    title: "Redakční systémy",
    text: [
      "- Headless Wordpress (nejpoužívanější CMS na světě a NEXT.js jako frontend = perfektní kombo.)",
      "- Strapi (vynikající CMS pro náročnější úkoly)",
      "- Redakční systém na míru (když krabicové řešení nestačí.)",
    ],
  },
];
