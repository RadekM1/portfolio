import { SectionTitle } from "../sectionTitle";
import { stepsData } from "@/src/lib/steps";
import { Step } from "../step";

const StepByStep = () => {
  return (
    <section className="flex-col  relative flex w-full z-10 mx-5 flex-grow justify-center items-center  text-black ">
      <div className="max-w-5xl px-2 w-full z-20 ">
        <div className="w-full h-full border-dashed dark:border-gray-600 py-6 md:py-0 border-gray-300 ">
          <SectionTitle title="Jak probíhá spolupráce" />
        </div>
        {stepsData.map((step, i) => {
          return <Step key={i} index={i} step={step} />;
        })}
      </div>
    </section>
  );
};
export default StepByStep;
