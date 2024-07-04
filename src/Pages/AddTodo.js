import React, {useContext, useState} from 'react';
import {TodoProvider} from '../Hooks/UseContext/TodoContext';
import Todo from '../Hooks/UseContext/Todo';

function AddTodo() {
    
  return (
    <div>
      <Todo/>
    </div>
  )
}

export default AddTodo