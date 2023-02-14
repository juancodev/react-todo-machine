import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { NewPage } from './pages/NewPage/NewPage';
import { EditPage } from './pages/EditPage/EditPage';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/new' element={<NewPage />} />
        <Route path='/edit/:id' element={<EditPage />} />
        <Route path='*' element={<p>Not Found</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;

/*
  *Con props = mandamos todo lo que sería información.
  *Con children = mandarle elementos HTML.
  *con <></> podemos definir el fragment en react.
  *const completedTodos = todos.filter(todo => todo.completed == true) forma tradicional de validar
  *const todoIndex = todos.findIndex(todo => todo.text === text); busca todo x todo.
  *setTodos(newTodos); //enviarle nueva línea de todo.
  *A React no se le puede modificar la propiedad directamente.
  *Si tenemos más de dos propiedades es necesario pasar un objeto.
*/