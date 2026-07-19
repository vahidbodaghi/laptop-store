import { Link } from "react-router";

const ProductCard = ({ id, title, price, image, description }) => {
  return (
    <article className="w-full h-64 relative space-y-3 flex pl-2 justify-between flex-col rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md ">
      <Link className="absolute size-full" to={`/product/${id}`} />

      <div className="h-[138px] flex-center w-full">
        <img src={image} alt={title} className="h-full w-full rounded-lg object-cover" />
      </div>

      <h3 className="font-bold line-clamp-1 text-slate-800 text-sm">{title}</h3>

      <p className="line-clamp-2 text-sm text-slate-500">{description}</p>

      <div className="mt-auto! flex items-end justify-end">
        <div className="flex items-center gap-1">
          <div className="text-slate-600 text-xs">$</div>
          <p className="font-black">{Number(price).toLocaleString()}</p>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
