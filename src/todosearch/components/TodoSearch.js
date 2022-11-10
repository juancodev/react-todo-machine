import React from "react";
import { TodoContext } from "../../todoContext/components/TodoContext";
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }


  return (
    <input
      className="TodoSearch"
      placeholder="Search..."
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };

/*
  *Para crear estados en react se necesita la función useState
  *React Hooks.
  *El valor de nuestro input tiene que conectar con el valor del estado
*/