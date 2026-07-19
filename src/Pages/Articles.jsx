import articles from "../data/articles";
import ArticlesCard from "../Components/Templates/Articles/ArticlesCard";

function Articles() {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticlesCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
}
export default Articles;
