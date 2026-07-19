import { Link } from "react-router";
import { useCart } from "../../../context/CartContext";

export default function ProductCard({
  id,
  title,
  price,
  image,
  description,
  showRemoveButton,
  quantity,
}) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="w-full max-w-sm">
      <Link
        to={`/product/${id}`}
        className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="aspect-square w-full overflow-hidden bg-slate-100">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="space-y-1 p-4">
          <h3 className="truncate text-sm font-semibold">{description}</h3>

          <p className="text-base font-bold">${price}</p>
        </div>
      </Link>

      {showRemoveButton && (
        <>
          <div className="mt-3 flex items-center justify-center gap-4">
            <button onClick={() => decreaseQuantity(id)}>-</button>

            <span>{quantity}</span>

            <button onClick={() => increaseQuantity(id)}>+</button>
          </div>

          <button
            onClick={() => removeFromCart(id)}
            className="mt-3 w-full rounded-lg bg-red-500 py-2 text-white"
          >
            Remove
          </button>
        </>
      )}
    </div>
  );
}
