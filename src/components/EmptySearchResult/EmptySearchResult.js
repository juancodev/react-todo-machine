import React from "react";
import './EmptySearchResult.css';

function EmptySearchResult(props) {
  return (
    <div className="container-empty">
      <img className="empty-img" src="https://res.cloudinary.com/juancms98/image/upload/v1670516464/No_results_found.png" alt="No results found" />
      <p className="empty-paragraph">No results found for: "<span>{props.searchText}</span>"</p>
    </div>
  )
}

export { EmptySearchResult };