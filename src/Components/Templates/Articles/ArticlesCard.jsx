import { Link } from "react-router";

function ArticlesCard({
  id,
  title,
  description,
  image,
  author,
  category,
  date,
}) {
  return (
    <article>
      <Link
        to={`/blog/${id}`}
        className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="p-5">
          <span className="text-xs font-medium text-indigo-600">
            {category}
          </span>

          <h3 className="mt-2 line-clamp-2 text-xl font-bold text-slate-800">
            {title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
            {description}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-slate-400">{date}</span>

            <span className="text-xs text-slate-400">By {author}</span>
          </div>
          {/* <div className="mt-4 flex items-center justify-end">
          <span className="font-medium text-indigo-600">Read More →</span>
        </div> */}
        </div>
      </Link>
    </article>
  );
}

export default ArticlesCard;
