import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { NewTodoPage } from './NewTodoPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/new' element={<NewTodoPage />} />
      </Routes>
    </HashRouter>
  )
}

export { App }