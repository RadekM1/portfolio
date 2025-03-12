import { ToggleSchema } from "@/src/schema/second-page-ui";

interface ToggleSchemaProps {
  icons: ToggleSchema;
  inView: boolean;
}

export const IconToggle = ({ icons, inView }: ToggleSchemaProps) => {
  return (
    <div className="flex w-full  mt-6 pb-2 flex-col">
      <div className=" flex cursor-pointer  gap-2">
        <span
          className={`${inView ? " lg:opacity-100 " : "lg:opacity-0"} lg:ml-2 text-rose-600 will-change-auto dark:text-rose-400 duration-300 text-nowrap text-base font-semibold `}
        >
          {icons.title}
        </span>
      </div>
      <span
        className={` ${inView ? "   lg:opacity-100" : " lg:opacity-0 "} mt-2 text-black   text-sm dark:text-white will-change-auto transform-gpu duration-700 transition-opacity ease-in-out text-start`}
      >
        {icons.summary}
      </span>
    </div>
  );
};
