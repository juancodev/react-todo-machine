import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from './../../TodoHeader/components/TodoHeader';
import { TodoCounter } from './../../todocounter/components/TodoCounter';
import { TodoSearch } from "../../todosearch/components/TodoSearch";
import { TodoList } from '../../todolist/components/TodoList';
import { TodoItem } from '../../todoitem/components/TodoItem';
import { CreateTodoButton } from '../../createtodobutton/components/CreateTodoButton';
import { Modal } from '../../Modal/components/Modal';
import { TodoForm } from "../../TodoForm/components/TodoForm";
import { TodosError } from "../../TodosError/components/TodoError";
import { LoaderSkeleton } from '../../Loader/components/LoaderSkeleton';
import { EmptyTodos } from '../../EmptyTodos/components/EmptyTodos';
import { ChangeAlert } from '../../ChangeAlert/components/ChangeAlert';
import { EmptySearchResult } from '../../EmptySearchResult/components/EmptySearchResult';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    addTodo,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    sincronizeTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <LoaderSkeleton />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={
          (searchText) => <EmptySearchResult searchText={searchText} />
        }
      // Render Props
      // render={todo => (
      //   <TodoItem
      //     key={todo.text}
      //     text={todo.text}
      //     completed={todo.completed}
      //     onComplete={() => completeTodo(todo.text)}
      //     onDelete={() => deleteTodo(todo.text)}
      //   />
      // )}
      >
        {/* Render Function */}
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );
}

export default App;

/*
  *Con props = mandamos todo lo que ser??a informaci??n.
  *Con children = mandarle elementos HTML.
  *con <></> podemos definir el fragment en react.
  *const completedTodos = todos.filter(todo => todo.completed == true) forma tradicional de validar
  *const todoIndex = todos.findIndex(todo => todo.text === text); busca todo x todo.
  *setTodos(newTodos); //enviarle nueva l??nea de todo.
  *A React no se le puede modificar la propiedad directamente.
  *Si tenemos m??s de dos propiedades es necesario pasar un objeto.
*/