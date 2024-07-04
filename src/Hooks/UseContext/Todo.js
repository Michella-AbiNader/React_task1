import React, {useContext, useRef} from 'react';
import TodoContext from './TodoContext';

let nextId=0
export default function Todo() {
    const { setTodos } = useContext(TodoContext);
  const todoInputRef = useRef();

  const addTodo = () => {
    setTodos(prevTodos =>[
          ...prevTodos,
          { id: nextId++, todo: todoInputRef.current.value, completed:false }
        ]);
    alert("A new todo was added!")
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <input type="text" ref={todoInputRef} placeholder="New Todo" />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}
