import React from 'react';
import { TodoContext } from '../../todoContext/components/TodoContext';
import './TodoForm.css';

function TodoForm() {

  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    setNewTodoValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Writing your new TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder='Writing your new TODO'
      >

      </textarea>
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          className='TodoForm-button TodoForm-button--cancel'
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type='submit'
          className='TodoForm-button TodoForm-button--add'
        >
          Add
        </button>
      </div>
    </form >
  );
}

export { TodoForm };