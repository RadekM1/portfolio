'use client'

import { useInView } from "react-intersection-observer";
import { IconToggle } from "./icon-toggle";
import { LuSun } from "react-icons/lu";
import { ToggleSchema } from "@/src/schema/secont-page-ui";
import { RiComputerLine } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { BsSpeedometer } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";


const iconToggles: ToggleSchema[] = [
    {icon: RiComputerLine, title: 'Responzivní design', summary: 'Weby i aplikace jsou navrhovány metodou Mobile First'},
    {icon: FaWordpress, title: 'Redakční systémy', summary: 'Wordpress, Strapi nebo i na míru'},
    {icon: PiPaintBrushDuotone, title: 'Webdesign na míru', summary: 'Design bez šablon, přesně dle přání'},
    {icon: BsSpeedometer, title: 'Žádné načítání', summary: 'Přechod mezi stránkami je okamžitý díky Next.js optimalizaci'},
    {icon: AiOutlineSafety, title: 'Zabezpečení', summary: 'Vysoký standard díky OAuth 2.0 a OpenID, včetně integrací do firemních struktur'}
  ]
  
export const ToggleDiv = () =>{

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
        rootMargin: "-10% 0px -10% 0px"
      });
    

    return (
        <div 
        ref={ref}
        className={`text-base border-t-gray-300 ${inView ? 'translate-x-0' : 'translate-x-4'} transition-all duration-700 ease-in-out  drop-shadow-md shadow-gray-200 shadow-lg bg-white border-[1px] dark:shadow-none dark:border-slate-700 p-4 rounded-xl border-gray-300 dark:bg-slate-900  md:w-4/12`}>
          <div className="flex flex-col">
            {iconToggles.map((item,i)=>(<IconToggle key={i} icons={item} />))}
          </div>

        </div>
    )
}