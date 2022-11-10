import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../../todoContext/components/TodoContext'

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;

/*
  *Con props = mandamos todo lo que sería información.
  *Con children = mandarle elementos HTML.
  *con <></> podemos definir el fragment en react.
  *const completedTodos = todos.filter(todo => todo.completed == true) forma tradicional de validar
  *const todoIndex = todos.findIndex(todo => todo.text === text); busca todo x todo.
  *setTodos(newTodos); //enviarle nueva línea de todo.
  *A React no se le puede modificar la propiedad directamente.
  *Si tenemos más de dos propiedades es necesario pasar un objeto.
*/