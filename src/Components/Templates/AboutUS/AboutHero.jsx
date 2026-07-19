import { FaArrowRight } from "react-icons/fa";

const heroContent = {
  badge: "Our Story",
  title: "About Us",
  description: "Learn more about our story, mission, and values.",
  subDescription:
    "We're a small team of makers and shoppers who got tired of choosing between quality and convenience — so we built a storefront that never asks you to.",
  button: {
    text: "Discover Our Journey",
    href: "#our-story",
  },
};

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-blue-300 to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-indigo-200/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-28 text-center">
        <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
          {heroContent.badge}
        </span>

        <h1 className="mt-7 text-5xl font-extrabold tracking-tight text-slate-900 lg:text-6xl">
          {heroContent.title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          {heroContent.description}
        </p>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-500">
          {heroContent.subDescription}
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href={heroContent.button.href}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
          >
            {heroContent.button.text}
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
