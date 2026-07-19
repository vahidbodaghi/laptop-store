import products from "../../../../data/product";
import ProductSection from "../../../Common/Sections/ProductSection";

const LatestProducts = () => {
  return (
    <ProductSection
      title="New Arrivals"
      description="Discover our latest products with the newest designs and features."
      products={products.slice(0, 5)}
    />
  );
};

export default LatestProducts;