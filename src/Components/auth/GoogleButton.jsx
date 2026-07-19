import React from "react";
import { FaGoogle } from "react-icons/fa";

function GoogleButton({ children = "Continue with Google", onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm"
    >
      <FaGoogle className="h-4 w-4 text-[#EA4335]" />

      {children}
    </button>
  );
}

export default GoogleButton;