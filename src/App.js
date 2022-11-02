import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
// import './App.css';

const todos = [
  { text: 'Cortar alimentos', completed: false },
  { text: 'Tomar curso de react', completed: false },
  { text: 'Ir a las citas médicas', completed: false },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;

/*
  *Con props = mandamos todo lo que sería información.
  *Con children = mandarle elementos HTML.
  *con <></> podemos definir el fragment en react.
*/