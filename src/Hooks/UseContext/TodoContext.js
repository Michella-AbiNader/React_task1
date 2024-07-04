import React, {createContext, useState} from 'react'

const TodoContext = createContext()
export default TodoContext;


export const TodoProvider= ({children}) => {
    const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}

