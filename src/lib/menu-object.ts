import { MenuSchema } from "../schema/menu-schema";
import { LuBrainCircuit } from "react-icons/lu";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiHandshake } from "react-icons/pi";

export const menuItems: MenuSchema = [
  { label: "Nabídka", link: "#offer", icon: MdOutlineShoppingCart },
  {
    label: "Reference",
    link: "#reference",
    icon: AiOutlineFundProjectionScreen,
  },
  { label: "Průběh spolupráce", link: "#steps", icon: PiHandshake },
  { label: "Skills", link: "#stack", icon: LuBrainCircuit },
  { label: "O mně", link: "#about-me", icon: IoPersonOutline },
  { label: "Kontakt", link: "#contact", icon: IoChatbubbleEllipsesOutline },
];
