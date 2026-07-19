import React from "react";
import { FaBoxOpen, FaCalendarAlt, FaStar, FaUsers } from "react-icons/fa";

export default function Statistics() {
  const stats = [
    { icon: FaUsers, value: "50K+", label: "Total Customers" },
    { icon: FaBoxOpen, value: "120K+", label: "Products Sold" },
    { icon: FaStar, value: "98%", label: "Positive Reviews" },
    { icon: FaCalendarAlt, value: "8+", label: "Years of Experience" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0E2A22] py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
      >
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#1F7A5C]/40 blur-[110px]" />
        <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-[#C9A24B]/10 blur-[110px]" />
      </div>
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 sm:grid-cols-4 sm:gap-6">
        {stats.map(({ icon: IconCmp, value, label }, i) => (
          <div
            key={label}
            className={`flex flex-col items-center gap-2 px-2 text-center sm:border-l sm:border-white/10 ${i === 0 ? "sm:border-l-0" : ""}`}
          >
            <IconCmp className="h-6 w-6 text-[#C9A24B]" />
            <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {value}
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-white/50">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
