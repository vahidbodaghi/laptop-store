import { Link } from "react-router";

export default function ViewAllButton({to = '/' , label = "View All Products"}) {
  return (
    <div className="mt-8 flex justify-center">
      <Link
        to={to}
        className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
      >
        {label}
      </Link>
    </div>
  );
}
