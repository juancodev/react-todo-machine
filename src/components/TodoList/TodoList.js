import React from "react";
import './TodoList.css'

function TodoList(props) {
  const renderWay = props.children || props.render;

  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

      <ul>
        {(!props.loading && !props.error) && props.searchedTodos.map(renderWay)}
        {/* {props.children} */}
      </ul>
    </section>
  );
}

export { TodoList };