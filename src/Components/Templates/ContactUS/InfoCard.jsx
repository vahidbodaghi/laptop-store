export default function InfoCard({ icon: IconCmp, label, children }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_16px_36px_rgba(15,23,42,0.09)]">
      <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-500 p-[1.5px]">
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white text-slate-800 transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:via-fuchsia-500 group-hover:to-amber-500 group-hover:text-white">
          <IconCmp className="h-5 w-5" />
        </div>
      </div>
      <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </h3>
      <div className="mt-1.5 text-[15px] font-medium leading-relaxed text-slate-800">
        {children}
      </div>
    </div>
  );
}
