import { IconSchema } from "@/src/schema/second-page-ui";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker } from "react-icons/fa";
import { TsIcon } from "./ts-icon";
import { FirebaseIcon } from "./firebase-icon";
import { Csharp } from "./csharp-icon";

export const iconsOnSecondPage: IconSchema[] = [
  {
    icon: BiLogoPostgresql,
    title: "PostgreSQL",
  },

  {
    icon: RiNextjsFill,
    title: "Next.js",
  },
  {
    icon: TsIcon,
    title: "TypeScript",
  },
  {
    icon: FaReact,
    title: "React",
  },
  {
    icon: FaDocker,
    title: "Docker",
  },
  {
    icon: RiTailwindCssFill,
    title: "Tailwind",
  },
  {
    icon: FirebaseIcon,
    title: "Firebase",
  },
  {
    icon: Csharp,
    title: "c#",
  },
];
