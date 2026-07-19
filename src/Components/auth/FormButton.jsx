import React from "react";
import { FaArrowRight } from "react-icons/fa";

function FormButton({
  children = "Log In",
  type = "submit",
  disabled = false,
  icon = true,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 bg-[length:160%_100%] bg-left px-6 py-3.5 text-[15px] font-semibold text-white transition-all duration-500 hover:bg-right hover:shadow-[0_14px_34px_rgba(59,130,246,0.3)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
    >
      {children}

      {icon && (
        <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </button>
  );
}

export default FormButton;