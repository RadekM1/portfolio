"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FormSchema, formSchema } from "@/src/schema/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "./form-input";
import { emailClient } from "@/src/lib/email-client";
import { FormVectors } from "./form-vectors";
import { toast } from "sonner";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },

    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      tel: "",
      note: "",
    },
  });

  const [formKey, setFormKey] = useState(Date.now());

  const onSubmit = async (data: FormSchema) => {
    const success = await emailClient(data);
    if (!success) {
      toast.error("zprávu se nepodařilo odeslat");
      return;
    }
    reset();
    reset(undefined, {
      keepErrors: false,
      keepDirty: false,
      keepTouched: false,
    });
    setFormKey(Date.now());
    toast.success("zpráva byla v pořádku odeslána.");
    return;
  };

  return (
    <div className="items-center  relative z-0 flex mb-20 p-2 my-20  self-center text-center w-full max-w-3xl">
      <div className="h-full w-full">
        <form
          key={formKey}
          onSubmit={handleSubmit(onSubmit, (errors) =>
            console.log("Form errors:", errors),
          )}
          className="w-full pb-5 text-base bg-white/40 border-gray-300 border-[1px] dark:border-gray-500 dark:bg-slate-700/70 backdrop-blur-3xl rounded-xl shadow-lg z-20 p-5 flex flex-col"
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
            className="h-10 max-w-32 self-center px-5 my-5 hover:bg-green-700 whitespace-nowrap rounded bg-green-500  text-white  text-base  transition-all duration-300   focus:bg-green-700 focus:shadow-md focus:shadow-green-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-300 disabled:dark:text-gray-800 disabled:bg-green-100 disabled:dark:bg-green-800 disabled:shadow-none"
          >
            {isSubmitting ? "Odesílám..." : "Odeslat"}
          </button>
        </form>
      </div>
      <FormVectors />
    </div>
  );
};

export default ContactForm;
