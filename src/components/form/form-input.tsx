import { FormSchema } from "@/src/schema/contact-form";
import { UseFormRegister } from "react-hook-form";

interface FormInputProps {
  label: string;
  name: "name" | "email" | "tel" | "note";
  register: UseFormRegister<FormSchema>;
  type: string;
  error: string;
}

const FormInput = ({ label, name, register, type, error }: FormInputProps) => {
  return (
    <div className="w-full gap-1 flex flex-col">
      <label className="text-start  font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        {...register(`${name}`)}
        className={`dark:bg-slate-700/40 dark:border-gray-600 border-gray-300 bg-white/50  border-[1px] rounded-lg p-2`}
        id={name}
        type={type}
      />
      {error && <p className="text-red-500 text-xs">{`${error}`}</p>}
    </div>
  );
};

export default FormInput;
