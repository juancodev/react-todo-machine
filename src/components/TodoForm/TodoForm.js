import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoForm.css';

function TodoForm(props) {
  const navigate = useNavigate();
  const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || '');

  const onCancel = () => {
    navigate('/');
    // setOpenModal(false);
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(newTodoValue);
    setNewTodoValue('');
    navigate('/');
    // setOpenModal(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>{props.title}</h2>
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
          {props.submitText}
        </button>
      </div>
    </form >
  );
}

export { TodoForm };