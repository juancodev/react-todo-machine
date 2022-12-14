import React from "react";
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {

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
      disabled={loading}
    />
  );
}

export { TodoSearch };

/*
  *Para crear estados en react se necesita la función useState
  *React Hooks.
  *El valor de nuestro input tiene que conectar con el valor del estado
*/