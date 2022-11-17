import React from "react";
import './EmptyTodos.css';

function EmptyTodos() {
  return (
    <div className="image-container">
      <div className="title-image">
        <p className="title">
          There are not To Do list
        </p>
      </div>
      <figure>
        <img className="img-person" src="https://res.cloudinary.com/juancms98/image/upload/v1668629658/not_list_todo.jpg" alt="There are not To Do list" />
        <img className="create-arrow" src="https://res.cloudinary.com/juancms98/image/upload/v1668632332/create_arrow_red.png" alt="" />
      </figure>
    </div>
  );
}

export { EmptyTodos };