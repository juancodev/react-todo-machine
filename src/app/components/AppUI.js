import React from "react";
import { TodoContext } from "../../todoContext/components/TodoContext";
import { TodoCounter } from '../../todocounter/components/TodoCounter'
import { TodoSearch } from '../../todosearch/components/TodoSearch';
import { TodoList } from '../../todolist/components/TodoList';
import { TodoItem } from '../../todoitem/components/TodoItem';
import { CreateTodoButton } from '../../createtodobutton/components/CreateTodoButton';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desespere...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </ TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };

// && significa si es true