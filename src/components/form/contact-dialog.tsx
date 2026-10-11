"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import ContactForm from "./form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/reference-page-ui/dialog";

const ContactDialog = ({
  introClassName = "",
}: {
  introClassName?: string;
}) => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Contact.Dialog");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={`${introClassName} inline-flex mx-2 lg:mb-32 xl:mb-10 h-9 lg:h-12 items-center justify-center gap-2 whitespace-nowrap rounded bg-green-700 hover:bg-green-800 px-6  font-medium tracking-wide text-white shadow-lg  text-sm md:text-xl transition duration-300  hover:green-800    focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300 disabled:shadow-none`}
      >
        {t("trigger")}
      </DialogTrigger>
      <DialogContent className="font-roboto max-w-[95%] sm:max-w-xl lg:max-w-2xl max-h-[90dvh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t("title")}</DialogTitle>
          <DialogDescription>{t("description")}</DialogDescription>
        </DialogHeader>
        <ContactForm inModal onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
