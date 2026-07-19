import ProductCard from "../Components/Templates/Cart/PorductCard";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cart.length ? (
        cart.map((product) => (
          <ProductCard showRemoveButton key={product.id} {...product} />
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;