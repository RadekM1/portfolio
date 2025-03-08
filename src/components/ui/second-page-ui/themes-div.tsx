export const ThemesDiv = () => {
  return (
    <div className="flex flex-col w-full self-center">
      <h3 className="text-xl pt-10">Barevná témata</h3>
      <p className="text-base pb-10 pt-2">
        NEXT.js, Docker, Typescript a další
      </p>
      <div
        className={`text-base  self-center h-[36rem] flex-col flex  w-[22rem] min-w-[22rem]  relative transition-all duration-700   px-4 rounded-xl  `}
      >
        <figure
          className="diff h-full rounded-[30px] border-black border-8 over aspect-16/9"
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
          <div className="diff-resizer bg-rose-500 border-rose-500"></div>
        </figure>
        <div className="w-[22%] rounded-full bg-black z-20 absolute h-3 md:h-5 top-[7%] md:top-[5%] left-1/2 -translate-x-1/2">
          &nbsp;
        </div>
      </div>
    </div>
  );
};
