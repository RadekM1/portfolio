import { IconSchema } from "@/src/schema/second-page-ui";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker } from "react-icons/fa";
import { TsIcon } from "../../icon-components/ts-icon";
import { AstroIcon } from "../../icon-components/astro-icon";
import { Csharp } from "../../icon-components/csharp-icon";

export const iconsOnSecondPage: IconSchema[] = [
  {
    icon: AstroIcon,
    title: "Astro",
  },
  {
    icon: RiNextjsFill,
    title: "Next.js",
  },
  {
    icon: FaReact,
    title: "React",
  },
  {
    icon: Csharp,
    title: ".NET framework",
  },
  {
    icon: BiLogoPostgresql,
    title: "PostgreSQL",
  },

  {
    icon: TsIcon,
    title: "TypeScript",
  },

  {
    icon: FaDocker,
    title: "Docker",
  },
  {
    icon: RiTailwindCssFill,
    title: "Tailwind",
  },
];
