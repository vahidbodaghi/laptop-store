import { useParams } from "react-router";
import products from "../data/product";
import { useEffect, useState } from "react";
import ProductCard from "../Components/Templates/Cart/PorductCard";
import { FiShare2 } from "react-icons/fi";
import { useCart } from "../context/CartContext";

function Product() {
  const [quantity, setQuantity] = useState(1);
  const { productID } = useParams();
  const product = products.find((item) => item.id === Number(productID));
  const { addToCart } = useCart();

  const relatedProducts = products
    .filter(
      (item) =>
        item.specifications.brand === product.specifications.brand &&
        item.id !== product.id,
    )
    .slice(0, 4);

  return (
    <div className="container mx-auto py-12">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <img
            src={product.image}
            alt="Product"
            className="w-full rounded-2xl border"
          />

          <div className="grid grid-cols-4 gap-4 mt-4">
            <img
              src={product.image}
              alt=""
              className="rounded-xl border cursor-pointer"
            />

            <img
              src={product.image}
              alt=""
              className="rounded-xl border cursor-pointer"
            />

            <img
              src={product.image}
              alt=""
              className="rounded-xl border cursor-pointer"
            />

            <img
              src={product.image}
              alt=""
              className="rounded-xl border cursor-pointer"
            />
          </div>
        </div>

        <div>
          <div>
            <span className="text-sm text-gray-500">Electronics</span>
          </div>

          <h1 className="text-4xl font-bold mt-2">{product.title}</h1>

          <div className="mt-4">⭐⭐⭐⭐⭐ (124 Reviews)</div>

          <div className="mt-6">
            <span className="text-4xl font-bold">${product.price}</span>
          </div>

          <p className="mt-6 text-gray-600 leading-8">{product.description}</p>

          <div className="flex gap-4 mt-8">
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-24 border rounded-xl p-3"
            />

            <button
              onClick={() => addToCart(product, quantity)}
              className="bg-black text-white px-8 rounded-xl"
            >
              Add To Cart
            </button>

            <button
              className="w-12 h-12 flex items-center justify-center rounded-xl border hover:bg-gray-100 transition"
              title="Copy link"
            >
              <FiShare2 size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-6">Product Description</h2>

        <p className="text-gray-600 leading-8">{product.description}</p>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-6">Specifications</h2>

        <div className="border rounded-2xl overflow-hidden">
          <div className="flex justify-between p-4 border-b">
            <span>Brand</span>
            <span>{product.specifications.brand}</span>
          </div>

          <div className="flex justify-between p-4 border-b">
            <span>Color</span>
            <span>{product.specifications.color}</span>
          </div>

          <div className="flex justify-between p-4 border-b">
            <span>Connectivity</span>
            <span>{product.specifications.connectivity}</span>
          </div>

          <div className="flex justify-between p-4">
            <span>Warranty</span>
            <span>{product.specifications.warranty}</span>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-6">Related Products</h2>

        <div className="grid md:grid-cols-4 gap-5">
          {relatedProducts.length ? (
            relatedProducts.map((item) => (
              <div key={item.id} className="border rounded-xl p-4">
                <ProductCard {...item} />
              </div>
            ))
          ) : (
            <p>There are no products.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
