import React from "react";
import ArticleTile from "./ArticleTile";
import FilterForm from "./FilterForm";
import { observer } from "mobx-react";
import { articlesStore } from "../stores/articles";
import { useArticlesAndScroll } from "../hooks";

const Articles = observer(() => {
  useArticlesAndScroll(
    articlesStore.sort_by,
    articlesStore.order,
    articlesStore.topic,
    articlesStore.page
  );

  return (
    <main>
      <h2>Articles</h2>
      <FilterForm article={true} />
      {articlesStore.isLoading ? (
        <p>Loading...</p>
      ) : (
        <article>
          <ul>
            {articlesStore.articles.map((article) => {
              return <ArticleTile {...article} key={article.article_id} />;
            })}
          </ul>
          {articlesStore.page < articlesStore.maxPage && (
            <p>Loading more articles...</p>
          )}
        </article>
      )}
    </main>
  );
});

export default Articles;
