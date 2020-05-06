import React, { Component, useState, useEffect } from "react";
import { articlesStore } from "../stores/articles";
import { observer } from "mobx-react";

const FilterForm = observer(({ article }) => {
  // const { handleChange } = useFilter();
  return (
    <form className="FilterForm">
      <select
        onChange={(e) => articlesStore.handleChange(e)}
        className="filterFormSelect"
        value={
          articlesStore.order
            ? `${articlesStore.sort_by}/${articlesStore.order}`
            : articlesStore.sort_by
        }
      >
        <option value="created_at" className="filterFormOption">
          Newest
        </option>
        <option value="created_at/asc" className="filterFormOption">
          Oldest
        </option>
        <option value="votes" className="filterFormOption">
          Popular
        </option>
        {article && (
          <option value="comment_count" className="filterFormOption">
            Conversational
          </option>
        )}
      </select>
    </form>
  );
});

// class UpdatingFilterForm extends Component {
//   state = {
//     sortBy: "",
//     orderBy: "",
//   };

//   render() {
//     const { handleChange } = this;
//     const { sortBy, orderBy } = this.state;
//     const { article } = this.props;
//     return (
//       <form className="FilterForm">
//         <select
//           onChange={handleChange}
//           className="filterFormSelect"
//           value={orderBy ? `${sortBy}/${orderBy}` : sortBy}
//         >
//           <option value="created_at" className="filterFormOption">
//             Newest
//           </option>
//           <option value="created_at/asc" className="filterFormOption">
//             Oldest
//           </option>
//           <option value="votes" className="filterFormOption">
//             Popular
//           </option>
//           {article && (
//             <option value="comment_count" className="filterFormOption">
//               Conversational
//             </option>
//           )}
//         </select>
//       </form>
//     );
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { sortBy, orderBy } = this.state;
//     const {
//       fetchArticles,
//       fetchCommentsByArticleId,
//       article_id,
//       topic,
//     } = this.props;
//     if (prevProps.topic !== topic) {
//       this.setState({
//         sortBy: "created_at",
//         orderBy: "desc",
//       });
//     }
//     if (fetchArticles) {
//       if (prevState.sortBy !== sortBy || prevState.orderBy !== orderBy) {
//         fetchArticles(sortBy, orderBy);
//       }
//     } else if (fetchCommentsByArticleId) {
//       if (prevState.sortBy !== sortBy || prevState.orderBy !== orderBy) {
//         fetchCommentsByArticleId(article_id, sortBy, orderBy);
//       }
//     }
//   }

//   handleChange = (event) => {
//     const sortByOrderBy = event.target.value.split("/");
//     this.setState({ sortBy: sortByOrderBy[0], orderBy: sortByOrderBy[1] });
//   };
// }

export default FilterForm;
