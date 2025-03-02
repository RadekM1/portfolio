'use client'

import { useInView } from "react-intersection-observer";


  
export const OfferDiv = () =>{

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
        rootMargin: "-10% 0px -10% 0px"
      });
    

    return (
        <div 
        ref={ref}
        className={`text-base border-t-gray-300 ${inView ? 'translate-x-0' : '-translate-x-4'} transition-all duration-700   drop-shadow-md shadow-gray-200 shadow-lg bg-white border-[1px] dark:shadow-none dark:border-slate-700 p-4 rounded-xl border-gray-300 dark:bg-slate-900 md:w-8/12`}>
          Webové aplikace
          <br />
          Webové stránky
          <br />
        </div>
    )
}