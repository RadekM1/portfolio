"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FormSchema, formSchema } from "@/src/schema/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "./form-input";
import { emailClient } from "@/src/lib/email-client";
import { FormVectors } from "./form-vectors";

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
            className="h-10 max-w-32 self-center px-5 my-3 hover:bg-green-700 whitespace-nowrap rounded bg-green-500  text-white shadow-lg shadow-green-200 dark:shadow-none text-base  transition-all duration-300  hover:shadow-md hover:shadow-green-200 focus:bg-green-700 focus:shadow-md focus:shadow-green-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300 disabled:shadow-none"
          >
            {isSubmitting ? "Odesílám..." : "Odeslat"}
          </button>
          {isSubmitted && (
            <p className="text-green-600 text-sm">
              zpráva byla úspěšně odeslána
            </p>
          )}
        </form>
        <FormVectors />
      </div>
    </div>
  );
};

export default ContactForm;
