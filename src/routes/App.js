import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { NewTodoPage } from './NewTodoPage';
import { EditTodoPage } from './EditTodoPage';
import { NotFound } from '../components/NotFound'
import { RemovePage } from './RemovePage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/new' element={<NewTodoPage />} />
        <Route path='/edit/:id' element={<EditTodoPage />} />
        <Route path='/remove/:id' element={<RemovePage />} />
        <Route path='*' element={<NotFound />} /> 
      </Routes> 
    </HashRouter> 
  )
}
 
export { App } 