import { H3Title } from "../../typography/h3-title";

export const ThemesDiv = () => {
  return (
    <div className="flex flex-col w-full self-center">
      <H3Title title="Barevná témata" />
      <p className="text-base pb-10 pt-2">
        Bílé pozadí stránky dokážet večer potrápit.
      </p>
      <div
        className={`text-base  self-center h-[27rem] lg:h-[30rem] flex-col flex  w-[16.5rem] min-w-[16.5rem] lg:min-w-[19rem]  relative transition-all duration-700   px-4 rounded-xl  `}
      >
        <figure
          className="diff h-full rounded-[20px] border-black border-[10px]"
          tabIndex={0}
        >
          <div className="diff-item-1  border-rose-500 " role="img">
            <img alt="daisy" className="object-cover" src="img/diff-dark.png" />
          </div>
          <div
            className="diff-item-2 after:bg-rose-500  "
            role="img"
            tabIndex={0}
          >
            <img
              alt="daisy"
              className="object-cover"
              src="img/diff-light.png"
            />
          </div>
          <div className="diff-resizer  bg-rose-500 border-rose-500 "></div>
        </figure>
        <div className="w-[22%] rounded-full bg-black z-20 absolute h-3  top-[7%] md:top-[5%] left-1/2 -translate-x-1/2">
          &nbsp;
        </div>
      </div>
    </div>
  );
};
