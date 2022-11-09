import React from "react";
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter">
      <span>My Task's</span>
      <span>you have completed {completed} of {total}</span>
    </h2>
  );
}

//De esta forma es una exportación nombrada que no acepta otro tipo de dato
export { TodoCounter };