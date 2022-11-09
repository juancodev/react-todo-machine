import React from "react";
import { TodoCounter } from '../../todocounter/components/TodoCounter'
import { TodoSearch } from '../../todosearch/components/TodoSearch';
import { TodoList } from '../../todolist/components/TodoList';
import { TodoItem } from '../../todoitem/components/TodoItem';
import { CreateTodoButton } from '../../createtodobutton/components/CreateTodoButton';

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo
}) {
  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
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