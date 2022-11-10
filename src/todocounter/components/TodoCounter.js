import React from "react";
import { TodoContext } from "../../todoContext/components/TodoContext";
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter">
      <span>My Task's</span>
      <span>you have completed {completedTodos} of {totalTodos}</span>
    </h2>
  );
}

//De esta forma es una exportación nombrada que no acepta otro tipo de dato
export { TodoCounter };