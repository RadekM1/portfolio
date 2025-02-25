"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FormSchema, formSchema } from "@/src/schema/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "./formInput";
import { emailClient } from "@/src/lib/emailClient";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // eslint-disable-next-line
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  // eslint-disable-next-line
  const [isSubmitted, setIsSubmtited] = useState<boolean>(false);

  const onSubmit = async (data: FormSchema) => {
    // eslint-disable-next-line
    const success = await emailClient(data);
    console.log("proběhla funkce ? ");

    {
      /* 
      if (success === true) {
      reset();
      setIsSubmtited(true);
      console.log("proběhla funkce ? ");
      return;
    }
      */
    }
  };

  return (
    <div className="items-center relative z-0 flex mb-20 p-2 my-20  self-center text-center w-full max-w-3xl">
      <div className="h-full z-10 w-full">
        <form
          onSubmit={handleSubmit(onSubmit, (errors) =>
            console.log("Form errors:", errors),
          )}
          className="w-full text-base bg-white/40 border-[1px] border-white/20 dark:bg-slate-700/40 backdrop-blur-md rounded-xl shadow-lg z-10 p-5 flex flex-col"
        >
          <div className="w-full  flex-col justfy-center items-center">
            <div className="flex gap-5 w-full flex-col">
              <FormInput
                label="Jméno a příjmení"
                name="name"
                register={register}
                type="text"
                error={errors.name?.message ?? ""}
              />
              <FormInput
                label="E-mail"
                name="email"
                register={register}
                type="email"
                error={errors.email?.message ?? ""}
              />
              <FormInput
                label="Telefon"
                name="tel"
                register={register}
                type="tel"
                error={errors.tel?.message ?? ""}
              />
              <div className="w-full gap-1 flex flex-col">
                <label className="text-start font-semibold" htmlFor="note">
                  Zpráva
                </label>
                <textarea
                  {...register("note", { required: "zpráva je povinný údaj" })}
                  id="note"
                  rows={10}
                  className="dark:bg-slate-700/40 border-gray-300 bg-white/50 dark:border-gray-600 p-2 border-[1px] rounded-lg"
                  required
                />
                {errors.note && (
                  <p className="text-red-500 text-sm">{`${errors.note.message}`}</p>
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-10 max-w-32 self-center px-5 my-3 hover:-translate-y-1 transform-gpu whitespace-nowrap rounded bg-green-500  dark:bg-green-600 text-white shadow-lg shadow-green-200 dark:shadow-none text-base  transition duration-300 hover:bg-green-600 hover:shadow-md hover:shadow-green-200 focus:bg-green-700 focus:shadow-md focus:shadow-green-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300 disabled:shadow-none"
          >
            {isSubmitting ? "Odesílám..." : "Odeslat"}
          </button>
          {isSubmitted && (
            <p className="text-green-600 text-sm">
              zpráva byla úspěšně odeslána
            </p>
          )}
        </form>
      </div>
      <svg
        className="absolute -z-10 -top-[7rem] -right-[8rem] h-80"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#fb7185", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#e11d48", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          d="M51.8,-69.5C66,-60.9,75.7,-44.3,80,-27C84.2,-9.6,83,8.5,76.6,23.8C70.1,39.2,58.4,51.7,44.8,61.4C31.1,71.2,15.6,78,-1.4,79.9C-18.3,81.8,-36.6,78.6,-48.9,68.5C-61.2,58.3,-67.6,41.2,-71.6,24.3C-75.6,7.5,-77.2,-9.1,-74,-25.7C-70.9,-42.3,-62.9,-59,-49.8,-67.9C-36.6,-76.9,-18.3,-78.1,0.2,-78.4C18.8,-78.7,37.5,-78.1,51.8,-69.5Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="absolute -z-10 -bottom-[50rem] -left-[50rem] h-[80rem]"
        viewBox="-120 -120 240 240"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#4ade80", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#16a34a", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M 84.31955069755412,0 C 83.87702054068282,24.680075830259295 68.04608384688052,42.036281868853806 46.92481354478118,58.84185503737323 C 25.803543242681833,75.64742820589265 4.83248446969667,87.33557285387865 -18.711036141954892,81.97840570009475 C -42.25455675360645,76.62123854631086 -58.008681113110896,56.135935165921225 -67.92162846327523,32.70933233598837 C -77.83457581343956,9.282729506055517 -77.39185491446996,-9.824236934607502 -67.06687687446382,-32.297705665431366 C -56.74189883445767,-54.77117439625523 -41.36670861947643,-70.92087851355343 -17.555881926659907,-76.91734439973779 C 6.2549447661566155,-82.91381028592214 28.199033548872436,-77.31681437071592 49.08349723683631,-61.54875876876967 C 69.96796092480018,-45.78070316682343 84.76208085442542,-24.680075830259295 84.31955069755412,0 Z"
          fill="#9fff5b"
        />
      </svg>
    </div>
  );
};

export default ContactForm;
