import products from "../../../../data/product";
import ProductSection from "../../../Common/Sections/ProductSection";

const BestSelling = () => {
  return (
    <ProductSection
      title="Best Sellers"
      description="Our most popular products loved by customers."
      products={products.slice(0, 5)}
    />
  );
};

export default BestSelling;
