function Field({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  textarea,
  error,
}) {
  const base =
    "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:ring-4 focus:ring-indigo-500/10";
  const border = error
    ? "border-red-400 focus:border-red-400"
    : "border-slate-200 focus:border-indigo-400";

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-[13px] font-semibold text-slate-700"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${base} ${border} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${base} ${border}`}
        />
      )}
      {error && (
        <p className="mt-1 text-xs font-medium text-red-500">{error}</p>
      )}
    </div>
  );
}

export default Field;
