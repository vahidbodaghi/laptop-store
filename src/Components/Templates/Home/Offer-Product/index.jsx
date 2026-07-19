import products from "../../../../data/product";
import ProductSection from "../../../Common/Sections/ProductSection";

const OfferProducts = () => {
  return (
    <ProductSection
      title="Special Offers"
      description="Enjoy our best deals and discounted products."
      products={products.slice(0, 5)}
    />
  );
};

export default OfferProducts;
