import { FaArrowRight } from "react-icons/fa";

export default function FinalCta() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[#0E2A22] px-8 py-14 text-center sm:px-16 sm:py-16">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-16 -right-10 h-56 w-56 rounded-full bg-[#C9A24B]/20 blur-[90px]" />
            <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-[#1F7A5C]/40 blur-[90px]" />
          </div>
          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Ready to explore what we've built?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-white/65 sm:text-base">
              Browse the full collection and see why thousands of customers keep
              coming back.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C9A24B] px-8 py-3.5 text-sm font-semibold text-[#0E2A22] shadow-[0_10px_30px_rgba(201,162,75,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9B563]"
              >
                Shop Now
                <FaArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
