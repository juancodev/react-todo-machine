import React from "react";
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {

  return (
    <div className="TodoCounter-container">
      <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
        <span>My Task's</span>
        <span>you have completed {completedTodos} of {totalTodos}</span>
      </h2>
      <figure className="img-title">
        <img className="img-paper" src="https://res.cloudinary.com/juancodev/image/upload/v1668638759/Banner_de_papel_rasgado_amarillo_realista_bt2oik.png" alt="" />
      </figure>
    </div>

  );
}

//De esta forma es una exportación nombrada que no acepta otro tipo de dato
export { TodoCounter };