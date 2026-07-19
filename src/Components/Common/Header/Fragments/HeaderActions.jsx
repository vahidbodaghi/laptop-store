import { HiShoppingCart } from "react-icons/hi2";
import { Link } from "react-router";

const HeaderActions = () => {
  return (
    <div className="flex items-center gap-3 *:flex *:items-center *:gap-1.5 *:px-3 *:py-2 *:rounded-full *:text-sm *:font-medium *:text-slate-600 *:transition-all *:duration-300 *:ease-out *:hover:text-slate-900 *:hover:bg-slate-100 *:hover:-translate-y-0.5 *:active:translate-y-0 *:[&_svg]:text-slate-400 *:[&_svg]:transition-colors *:[&_svg]:duration-300 *:hover:[&_svg]:text-indigo-500">
      <Link to="/cart">
        <HiShoppingCart />
      </Link>

      <Link to="/login">Login</Link>

      <Link to="/signup" className="bg-slate-900 text-white hover:bg-slate-800">
        Sign Up
      </Link>
    </div>
  );
};

export default HeaderActions;
