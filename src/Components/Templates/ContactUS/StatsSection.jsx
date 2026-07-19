import { BsEmojiSmile, BsHeadset } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { IoFlashOutline } from "react-icons/io5";

export default function StatsSection() {
  const stats = [
    { icon: BsHeadset, value: "24/7", label: "Support" },
    { icon: FaUsers, value: "10K+", label: "Customers" },
    { icon: BsEmojiSmile, value: "99%", label: "Satisfaction" },
    { icon: IoFlashOutline, value: "<1hr", label: "Fast Response" },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-indigo-500/30 blur-[100px]" />
        <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[100px]" />
      </div>
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 sm:grid-cols-4 sm:gap-6">
        {stats.map(({ icon: IconCmp, value, label }, i) => (
          <div
            key={label}
            className={`flex flex-col items-center gap-2 px-2 text-center sm:border-l sm:border-white/10 ${i === 0 ? "sm:border-l-0" : ""}`}
          >
            <IconCmp className="h-6 w-6 text-indigo-300" />
            <span className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{value}</span>
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-slate-400">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}