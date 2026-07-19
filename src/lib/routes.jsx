import { createBrowserRouter } from "react-router";
import Applayout from "../components/Layouts/AppLayout";
import HomePage from "../pages/HomePage";
import AboutUS from "../pages/AboutUS";
import ContactUS from "../pages/ContactUS";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Blog from "../pages/Blog";
import Articles from "../pages/Articles";
import Login from "../Pages/Login";
import Signup from "../Pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {index: true, element: <HomePage />,
      },
      { path: "about-us", element: <AboutUS /> },
      { path: "articles", element: <Articles /> },
      { path: "contact-us", element: <ContactUS /> },
      { path: "cart", element: <Cart /> },
      { path: "product/:productID", element: <Product /> },
      { path: "blog/:blogID", element: <Blog /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },
]);

export default router;
