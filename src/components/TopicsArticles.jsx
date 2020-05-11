import React from "react";
import FilterForm from "./FilterForm";
import ArticleTile from "./ArticleTile";
import { Link } from "@reach/router";
import { useArticlesAndScroll } from "../hooks";

const TopicsArticles = ({ topic }) => {
  const { state, handleChange } = useArticlesAndScroll(topic);
  return (
    <main>
      <h2>Articles - {topic}</h2>
      <Link to={`/topics/articles/${topic}/post`}>
        <button>Post an article about this topic?</button>
      </Link>
      <FilterForm
        handleChange={handleChange}
        article={true}
        sort_by={state.sort_by}
        order={state.order}
      />
      {state.isLoading ? (
        <p>Loading...</p>
      ) : (
        <article>
          <ul>
            {state.articles.map((article) => {
              return <ArticleTile {...article} key={article.article_id} />;
            })}
          </ul>
          {state.page < state.maxPage && <p>Loading more articles...</p>}
        </article>
      )}
    </main>
  );
};

export default TopicsArticles;
