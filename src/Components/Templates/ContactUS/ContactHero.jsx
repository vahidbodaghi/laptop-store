import { FaArrowRight } from "react-icons/fa";
const heroContent = {
  badge: "We typically reply within an hour",
  title: "Let's talk about",
  highlight: "your next order",
  description:
    "Questions about a purchase, a return, or a partnership? Our team is real, responsive, and ready to help — reach out any way you like.",
  primaryButton: "Send us a message",
  secondaryButton: "View contact details",
};
function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-blue-300 to-white">
      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-24 text-center sm:pb-24 sm:pt-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {heroContent.badge}
        </span>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          {heroContent.title}
          <span className="block bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-amber-500 bg-clip-text text-transparent">
            {heroContent.highlight}
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
          {heroContent.description}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact-form"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto"
          >
            {heroContent.primaryButton}
            <FaArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="#contact-info"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
          >
            {heroContent.secondaryButton}
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
