import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
const mapContent = {
  title: "Find our store",
  description: "Drop by in person — we'd love to see you.",
  storeName: "Storefront HQ",
  address: "221B Market Street, San Francisco, CA",
  mapUrl: "https://maps.google.com",
  button: "Open in Maps",
};

export default function MapSection() {
  return (
    <section className="bg-slate-50/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{mapContent.title}</h2>
          <p className="mt-3 text-slate-600">{mapContent.description}</p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl border border-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
          <div
            className="relative h-72 w-full bg-[#E9EDF4] sm:h-96"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,163,184,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.35) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          >
            
            <div aria-hidden className="absolute left-0 right-0 top-1/3 h-3 -rotate-2 bg-white/80" />
            <div aria-hidden className="absolute left-0 right-0 top-2/3 h-2 rotate-1 bg-white/70" />
            <div aria-hidden className="absolute bottom-0 top-0 left-1/4 w-3 rotate-3 bg-white/70" />

            
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[85%]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 via-fuchsia-500 to-amber-500 text-white shadow-xl ring-4 ring-white">
                <FaMapMarkerAlt className="h-5 w-5" />
              </div>
              <div className="mx-auto mt-1 h-2 w-2 rounded-full bg-slate-900/20 blur-[2px]" />
            </div>

            
            <div className="absolute bottom-4 left-4 right-4 flex flex-col items-start justify-between gap-3 rounded-2xl bg-white/90 p-4 backdrop-blur-sm sm:flex-row sm:items-center sm:left-6 sm:right-auto sm:bottom-6">
              <div>
                <p className="text-sm font-semibold text-slate-900">{mapContent.storeName}</p>
                <p className="text-sm text-slate-500">{mapContent.address}</p>
              </div>
              <a
                href={mapContent.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-colors duration-300 hover:bg-slate-800"
              >
                {mapContent.button}
                <FaArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
