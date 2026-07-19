export default function index() {
  const homeSEO = [
    {
      id: 1,
      description:
        "Shop the latest products with quality, affordable prices, secure payments, and fast delivery. Discover electronics, accessories, and everyday essentials in one place.",
    },
    {
      id: 2,
      description:
        "Explore a wide collection of premium products designed to make your shopping experience easier. Enjoy reliable quality, competitive prices, and trusted service.",
    },
  ];
  return (
    <section className="container mx-auto my-16 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-10 shadow-sm">
      {homeSEO.map((paragraph) => (
        <p
          key={paragraph.id}
          className="mb-5 text-sm leading-8 text-slate-600 last:mb-0"
        >
          {paragraph.description}
        </p>
      ))}
    </section>
  );
}
