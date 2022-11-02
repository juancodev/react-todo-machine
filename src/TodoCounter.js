import React from "react";
import './TodoCounter.css';

function TodoCounter() {
  return (
    <h2 className="TodoCounter">
      <span>My Task's</span>
      <span>you have completed 2 of 3</span>
    </h2>
  );
}

//De esta forma es una exportación nombrada que no acepta otro tipo de dato
export { TodoCounter };