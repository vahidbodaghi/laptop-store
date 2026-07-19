import { useParams } from "react-router";
import articles from "../data/articles";

function Blog() {
  const { blogID } = useParams();

  const article = articles.find((item) => item.id === Number(blogID));
  if (!article) {
    return <p>Article not found</p>;
  }
  const { title, description, image, author, category, date } = article;

  return (
    <div className="container mx-auto py-10">
      <article className="max-w-4xl mx-auto">
        <img
          src={image}
          alt={title}
          className="w-full h-[450px] object-cover rounded-2xl"
        />

        <div className="mt-8">
          <span className="text-sm font-medium text-indigo-600">
            {category}
          </span>

          <h1 className="mt-3 text-4xl font-bold text-slate-900">{title}</h1>

          <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
            <span>{date}</span>
          </div>
        </div>

        <div className="mt-10 space-y-6 text-slate-700 leading-8">
          {description}

          <h2 className="text-2xl font-bold text-slate-900">
            What Should Students Look For?
          </h2>

          <p>
            A good student laptop should offer reliable performance, long
            battery life, and a comfortable keyboard for daily use. Storage and
            display quality are also important factors.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">
            Our Recommendation
          </h2>

          <p>
            For most students, a lightweight laptop with at least 16GB of RAM
            and an SSD provides the best balance between performance and
            portability.
          </p>
        </div>

        <div className="mt-12 border-t pt-6">
          <p className="text-sm text-slate-500">By : {author} </p>
        </div>
      </article>
    </div>
  );
}

export default Blog;
