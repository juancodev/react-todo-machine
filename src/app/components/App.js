import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar alimentos', completed: true },
//   { text: 'Tomar curso de react', completed: false },
//   { text: 'Ir a las citas médicas', completed: false },
// ]

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1500);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error,
  }
}

function App() {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }



  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    // newTodos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true
    // } Esta línea nos permite modificar la propiedad de nuestro objeto de arreglo.
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {

    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);

  };

  return (
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
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