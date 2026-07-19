export default function OurStory() {
  return (
    <section id="our-story" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">

        {/* Content */}
        <div className="order-2 lg:order-1">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
            Where it began
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Our Story
          </h2>

          <div className="mt-6 space-y-5 text-[16px] leading-8 text-slate-600">
            <p>
              It started in a two-bedroom apartment in 2016, with one simple
              question: why should buying quality products online feel like a
              gamble?
            </p>

            <p>
              What began as a small collection of carefully selected products
              has grown into a trusted online store serving thousands of happy
              customers. While our workspace has changed, our commitment to
              quality has never changed.
            </p>

            <p>
              Every product we sell is personally reviewed and chosen with the
              same care as the very first item we ever shipped. That's the
              promise our customers rely on every day.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-5">
            <div className="rounded-2xl bg-slate-50 p-5 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600">2016</h3>
              <p className="mt-2 text-sm text-slate-500">Founded</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
              <p className="mt-2 text-sm text-slate-500">Customers</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600">500+</h3>
              <p className="mt-2 text-sm text-slate-500">Products</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">

            {/* Blur */}
            <div className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl"></div>

            <img
              src="/assets/Logo.png"
              alt="Our Story"
              className="h-[500px] w-full object-contain bg-gradient-to-br from-slate-50 to-blue-50 p-10"
            />

            <div className="absolute bottom-6 right-6 rounded-2xl bg-white/90 px-6 py-4 backdrop-blur shadow-xl">
              <h3 className="text-3xl font-bold text-blue-600">9+</h3>
              <p className="text-sm text-slate-500">
                Years of Experience
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
