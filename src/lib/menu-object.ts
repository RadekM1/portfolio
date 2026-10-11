import { MenuSchema } from "../schema/menu-schema";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiHandshake } from "react-icons/pi";

export const menuItems: MenuSchema = [
  { key: "offer", link: "#offer", icon: MdOutlineShoppingCart },
  {
    key: "reference",
    link: "#reference",
    icon: AiOutlineFundProjectionScreen,
  },
  { key: "steps", link: "#steps", icon: PiHandshake },
  { key: "about", link: "#about-me", icon: IoPersonOutline },
  { key: "contact", link: "#contact", icon: IoChatbubbleEllipsesOutline },
];
