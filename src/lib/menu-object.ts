import { MenuSchema } from "../schema/menu-schema";
import { LuBrainCircuit } from "react-icons/lu";
import { PiSteps } from "react-icons/pi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";

export const menuItems: MenuSchema = [
  { label: "Průběh spolupráce", link: "#", icon: PiSteps },
  { label: "Skills", link: "#", icon: LuBrainCircuit },
  { label: "Reference", link: "#", icon: AiOutlineFundProjectionScreen },
  { label: "O mně", link: "#", icon: IoPersonOutline },
  { label: "Kontakt", link: "#", icon: CiPhone },
];
