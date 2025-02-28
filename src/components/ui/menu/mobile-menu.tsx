"use client";
import { MenuSchema } from "@/src/schema/menu-schema";
import { FacebookAvatar } from "./facebook-avatar";

interface MobileMenuProps {
  isSideNavOpen: boolean;
  // eslint-disable-next-line
  setIsSideNavOpen: (value: boolean) => void;
  menuItems: MenuSchema;
}

const MobileMenu = ({
  menuItems,
  isSideNavOpen,
  setIsSideNavOpen,
}: MobileMenuProps) => {
  return (
    <>
      <aside
        id="nav-menu-4"
        aria-label="Side navigation"
        className={`top-[4rem] fixed h-full overflow-auto bg-white/95 dark:bg-slate-800/90 backdrop-blur-md left-0 z-40 flex lg:hidden w-72 flex-col border-r border-r-slate-200 dark:border-r-slate-600 tJudensition-transform lg:translate-x-0 ${
          isSideNavOpen ? "translate-x-0" : " -translate-x-full"
        }`}
      >
        <nav
          aria-label="side navigation"
          className="flex-1 divide-y  overflow-auto"
        >
          <div>
            <ul className="flex flex-1 short:pt-5 py-8 short:pb-3 flex-col gap-5 short:gap-3 items-start justify-center">
              {menuItems.map((item, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => setIsSideNavOpen(false)}
                    className="px-4 text-xl"
                  >
                    <a href={item.link} className="flex">
                      <item.icon className="mr-3" />
                      <div className="flex w-full text-base flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate">
                        {item.label}
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <FacebookAvatar setIsSideNavOpen={setIsSideNavOpen} />
        </nav>
      </aside>
      <div
        className={`fixed top-0 bottom-0 backdrop-blur-sm mt-[4.05rem] left-0 right-0 z-30 transition-colors lg:hidden ${
          isSideNavOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>
    </>
  );
};
export default MobileMenu;
