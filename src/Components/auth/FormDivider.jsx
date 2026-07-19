import React from "react";

function FormDivider({ text = "OR" }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px flex-1 bg-slate-200" />

      <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
        {text}
      </span>

      <span className="h-px flex-1 bg-slate-200" />
    </div>
  );
}

export default FormDivider;