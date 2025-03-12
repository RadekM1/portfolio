import { ToggleSchema } from "@/src/schema/second-page-ui";

interface ToggleSchemaProps {
  icons: ToggleSchema;
}

export const IconToggle = ({ icons }: ToggleSchemaProps) => {
  return (
    <div className="flex w-full  mt-6 pb-2 flex-col">
      <div className=" flex flex-row flex-nowrap gap-2">
        <icons.icon className="w-8 h-8 rounded-full p-[4px] bg-slate-600 flex text-white self-center" />
        <span className="lg:ml-2 flex self-center text-rose-600 dark:text-rose-400 duration-300 text-nowrap text-base font-semibold">
          {icons.title}
        </span>
      </div>
      <span className="mt-2 text-black text-sm dark:text-white text-start">
        {icons.summary}
      </span>
    </div>
  );
};
