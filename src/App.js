import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AddTodo from './Pages/AddTodo';
import Navbar from './Components/Navbar';
import { TodoProvider } from './Hooks/UseContext/TodoContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <TodoProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path = '/add-todo' element = {<AddTodo/>}></Route>
        </Routes>
        </TodoProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
