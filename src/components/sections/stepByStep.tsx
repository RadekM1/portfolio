import StepOne from "../steps/stepOne";
import StepTwo from "../steps/stepTwo";
import StepThree from "../steps/stepThree";
import StepFour from "../steps/stepFour";

const StepByStep = () => {
  return (
    <section className="flex-col  relative flex w-full z-10 mx-5 flex-grow justify-center items-center  text-black ">
      <div className="absolute dark:bg-slate-900 w-full h-screen z-10"></div>
      <div className="max-w-5xl  w-full z-20 dark: ">
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
      </div>
    </section>
  );
};
export default StepByStep;
