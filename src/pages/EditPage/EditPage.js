import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { LoaderSkeleton } from '../../components/Loader/LoaderSkeleton';
import { TodoForm } from '../../components/TodoForm/TodoForm';
import { useTodos } from '../../hooks/useTodos';
import './EditPage.css';

const EditPage = () => {
  const { state, stateUpdaters } = useTodos();
  const { getTodo, loading } = state;
  const { editTodo } = stateUpdaters;
  const { id } = useParams();
  const location = useLocation();

  let textTodo;

  if (location.state?.todo) {
    textTodo = location.state.todo.text;
  } else if (loading) {
    return (
      <LoaderSkeleton />
    )
  } else {
    const todo = getTodo(id);
    textTodo = todo.text;
  }

  return (
    <div className='edit-todo-container'>
      <TodoForm
        title="Edit TODO"
        defaultTodoText={textTodo}
        submitText="Edit"
        submitEvent={(newText) => editTodo(id, newText)}
      />
    </div>
  );
}

export { EditPage };