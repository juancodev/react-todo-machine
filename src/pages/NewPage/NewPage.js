import React from 'react';
import { TodoForm } from '../../components/TodoForm/TodoForm';
import { useTodos } from '../../hooks/useTodos';
import './NewPage.css';

const NewPage = () => {
  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;
  return (
    <div className='new-todo-container'>
      <TodoForm
        title="Write your new TODO"
        submitText="Add"
        submitEvent={(text) => addTodo(text)}
      />
    </div>
  )
}

export { NewPage };