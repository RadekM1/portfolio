"use client";
import { useForm } from "react-hook-form";
import { useId, useState } from "react";
import { FormSchema, formSchema } from "@/src/schema/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "./form-input";
import { emailClient } from "@/src/lib/email-client";
import { FormVectors } from "./form-vectors";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import type { Messages } from "@/src/i18n/types";

type ErrorKey = keyof Messages["Contact"]["Errors"];

interface ContactFormProps {
  inModal?: boolean;
  onSuccess?: () => void;
}

const ContactForm = ({ inModal = false, onSuccess }: ContactFormProps) => {
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

  const [formKey, setFormKey] = useState(0);
  const idPrefix = useId();
  const t = useTranslations("Contact");

  const errorText = (message?: string) =>
    message ? t(`Errors.${message as ErrorKey}`) : "";

  const onSubmit = async (data: FormSchema) => {
    const success = await emailClient(data);
    if (!success) {
      toast.error(t("Form.error"));
      return;
    }
    reset();
    reset(undefined, {
      keepErrors: false,
      keepDirty: false,
      keepTouched: false,
    });
    setFormKey((key) => key + 1);
    toast.success(t("Form.success"));
    onSuccess?.();
    return;
  };

  return (
    <div
      className={`items-center relative z-0 flex self-center text-center w-full max-w-3xl ${inModal ? "" : "mb-20 p-2 my-20"}`}
    >
      <div className="h-full w-full">
        <form
          key={formKey}
          onSubmit={handleSubmit(onSubmit, (errors) =>
            console.log("Form errors:", errors),
          )}
          className="w-full pb-5 text-base bg-white/60 border-gray-300 border-[1px] dark:border-gray-500 dark:bg-slate-700/80 backdrop-blur-3xl rounded-xl shadow-lg z-20 p-5 flex flex-col"
        >
          <div className="w-full  flex-col justfy-center items-center">
            <div className="flex gap-5 w-full flex-col">
              <FormInput
                label={t("Form.name")}
                name="name"
                register={register}
                idPrefix={idPrefix}
                type="text"
                error={errorText(errors.name?.message)}
              />
              <FormInput
                label={t("Form.email")}
                name="email"
                register={register}
                idPrefix={idPrefix}
                type="email"
                error={errorText(errors.email?.message)}
              />
              <FormInput
                label={t("Form.tel")}
                name="tel"
                register={register}
                idPrefix={idPrefix}
                type="tel"
                error={errorText(errors.tel?.message)}
              />
              <div className="w-full gap-1 flex flex-col">
                <label
                  className="text-start font-semibold"
                  htmlFor={`${idPrefix}-note`}
                >
                  {t("Form.note")}
                </label>
                <textarea
                  {...register("note")}
                  id={`${idPrefix}-note`}
                  rows={inModal ? 5 : 10}
                  className="dark:bg-slate-700/40 border-gray-300 bg-white/50 dark:border-gray-600 p-2 border-[1px] rounded-lg"
                  required
                />
                {errors.note && (
                  <p className="text-red-500 text-sm">
                    {errorText(errors.note.message)}
                  </p>
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-10 max-w-32 self-center px-5 my-5 hover:bg-green-700 whitespace-nowrap rounded bg-green-500  text-white  text-base  transition-all duration-300   focus:bg-green-700 focus:shadow-md focus:shadow-green-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-300 disabled:dark:text-gray-800 disabled:bg-green-100 disabled:dark:bg-green-800 disabled:shadow-none"
          >
            {isSubmitting ? t("Form.submitting") : t("Form.submit")}
          </button>
        </form>
      </div>
      {!inModal && <FormVectors />}
    </div>
  );
};

export default ContactForm;
