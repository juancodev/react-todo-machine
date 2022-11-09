import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  /*
  const onClickButton = (msg) => {
    alert(msg);
  };
  */


  return (
    <button
      className="CreateTodoButton"
      onClick={() => console.log('there is a click')}
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