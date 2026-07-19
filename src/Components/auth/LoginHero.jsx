import { FaBolt } from "react-icons/fa";

function LoginHero({title , description}) {
  return (
    <div className="relative hidden overflow-hidden bg-[#0B1220] lg:flex lg:flex-col lg:justify-between lg:p-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -left-16 h-96 w-96 rounded-full bg-blue-500/30 blur-[110px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/30 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative inline-flex items-center gap-2">
        
          <img
            src="/assets/Logo.png"
            alt="Shopino Logo"
            className="h-9 w-9 rounded-xl object-cover"
          />
        
        <span className="text-xl font-extrabold tracking-tight text-white">
          Shopino
        </span>
      </div>

      <div className="relative max-w-md">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white">
          {title}
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-white/60">
          {description}
        </p>
      </div>

      <p className="relative text-xs text-white/40">
        © {new Date().getFullYear()} Shopino, Inc. All rights reserved.
      </p>
    </div>
  );
}

export default LoginHero;
