import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  // const onClickButton = () => {
  //   props.setOpenModal(prevState => !prevState);
  // };

  return (
    <button
      className="CreateTodoButton"
      onClick={props.onClick}
    >
      +
    </button>
  );
}

export { CreateTodoButton };

/*
  *Necesitamos envolver nuestro evento dentro de una función para evitar su autoejecusión.
  *Se puede pasar parámetros dentro de la función pero necesitamos envolverlo en una function
*/