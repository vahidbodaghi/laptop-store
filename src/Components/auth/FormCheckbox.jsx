import React from "react";
import { FaCheck } from "react-icons/fa";

function FormCheckbox({
  label,
  name,
  register,
  rules,
  error,
  children,
}) {
  return (
    <label
      htmlFor={name}
      className="flex cursor-pointer select-none items-start gap-2.5"
    >
      <span className="relative mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center">
        <input
          id={name}
          type="checkbox"
          {...register(name, rules)}
          className={`peer h-5 w-5 cursor-pointer appearance-none rounded-md border transition-all duration-200 ${
            error
              ? "border-red-500 ring-2 ring-red-200"
              : "border-slate-300 focus:ring-2 focus:ring-blue-300"
          } checked:border-blue-600 checked:bg-blue-600`}
        />

        <FaCheck className="pointer-events-none absolute h-2.5 w-2.5 scale-0 text-white transition-transform duration-150 peer-checked:scale-100" />
      </span>

      <span className="text-sm leading-snug text-slate-600">
        {children ?? label}
      </span>
    </label>
  );
}

export default FormCheckbox;

