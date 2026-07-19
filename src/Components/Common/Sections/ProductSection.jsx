import SectionTitle from "./../SectionTitle";
import ProductCard from "../Cards/ProductCard";

const ProductSection = ({
  title,
  description,
  products,
}) => {
  return (
    <section className="container mx-auto my-12">
      <SectionTitle
        text={title}
        description={description}
      />

      <div className="mt-10 grid grid-cols-1 gap-5 rounded-2xl border border-neutral-300 p-4 shadow-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;