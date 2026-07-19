import { createRoot } from "react-dom/client";
import router from "./lib/routes.jsx";
import { RouterProvider, ScrollRestoration } from "react-router";
import "./../public/css/index.css";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>,
);
