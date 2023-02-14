import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodos } from '../../hooks/useTodos';
import { TodoHeader } from '../../components/TodoHeader/TodoHeader';
import { TodoCounter } from '../../components/TodoCounter/TodoCounter';
import { TodoSearch } from "../../components/TodoSearch/TodoSearch";
import { TodoList } from '../../components/TodoList/TodoList';
import { TodoItem } from '../../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../../components/CreateTodoButton/CreateTodoButton';
import { TodosError } from "../../components/TodoError/TodoError";
import { LoaderSkeleton } from '../../components/Loader/LoaderSkeleton';
import { EmptyTodos } from '../../components/EmptyTodos/EmptyTodos';
import { ChangeAlert } from '../../components/ChangeAlert/ChangeAlert';
import { EmptySearchResult } from '../../components/EmptySearchResult/EmptySearchResult';
// import { Modal } from '../../components/Modal/Modal';
// import { TodoForm } from "../../components/TodoForm/TodoForm";

const HomePage = () => {
  const navigate = useNavigate();
  const { state, stateUpdaters } = useTodos();

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    // openModal,
  } = state;

  const {
    setSearchValue,
    completeTodo,
    deleteTodo,
    sincronizeTodos,
    // addTodo,
    // setOpenModal,
  } = stateUpdaters;

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
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onEdit={() => navigate('/edit/' + todo.id, {
              state: { todo }
            })}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      </TodoList>

      {/* {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )} */}

      <CreateTodoButton
        onClick={() => navigate('/new')}
      // setOpenModal={setOpenModal}
      />
      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );
}

export { HomePage };