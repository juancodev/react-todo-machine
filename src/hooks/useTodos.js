import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { v4 as uuid } from 'uuid';

function useTodos() {

  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error } = useLocalStorage('TODOS_V2', []);

  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // const [openModal, setOpenModal] = React.useState(false);

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  };

  const addTodo = (text) => {
    if (!text.trim()) {
      alert("The field doesn't accept a text empty, please writing your todo!");
      return;
    }
    const newTodos = [...todos];
    const id = uuid();
    newTodos.push({
      text,
      completed: false,
      id,
    });
    saveTodos(newTodos);
  };

  const getTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    return todos[todoIndex];
  }

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    // newTodos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true
    // } Esta línea nos permite modificar la propiedad de nuestro objeto de arreglo.
    saveTodos(newTodos);
  }

  const editTodo = (id, newText) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].text = newText;
    saveTodos(newTodos);
  }

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);

  };

  const state = {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    getTodo,
    // openModal,
  };

  const stateUpdaters = {
    setSearchValue,
    addTodo,
    completeTodo,
    deleteTodo,
    editTodo,
    sincronizeTodos,
    // setOpenModal,
  }

  return {
    state,
    stateUpdaters
  };
};

export { useTodos };


/*
  *Nuestro TodoProvider va a envolver todo nuestra aplicación
*/