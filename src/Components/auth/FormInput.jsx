import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function FormInput({
  label,
  type = "text",
  placeholder,
  icon,
  register,
  name,
  rules,
  error,
  textarea = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputClass = `w-full rounded-xl border py-3 pl-10 pr-4 outline-none ${
    error
      ? "border-red-500"
      : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
  }`;

  return (
    <div>
      <label className="mb-2 block font-semibold">{label}</label>

      <div className="relative">
        {icon}

        {textarea ? (
          <textarea
            placeholder={placeholder}
            {...register(name, rules)}
            className={`${inputClass} min-h-36 resize-none`}
          />
        ) : (
          <input
            type={type === "password" && showPassword ? "text" : type}
            placeholder={placeholder}
            {...register(name, rules)}
            className={inputClass}
          />
        )}

        {!textarea && type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default FormInput;