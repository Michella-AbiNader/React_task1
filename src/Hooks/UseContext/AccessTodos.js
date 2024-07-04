import React, {useContext, useEffect} from 'react'
import TodoContext from './TodoContext';



function AccessTodos() {
    const { todos, setTodos } = useContext(TodoContext);

  useEffect(() => {
    console.log('Todo list:', todos);
  }, [todos]);

  function deleteTodo(id){
        setTodos(todos.filter(todo =>
            todo.id !== id
        ))
    }
     function toggleTodo(id){
        const list = [...todos];
        const td = list.find(item => item.id ===id);
        td.completed = !td.completed;
        setTodos(list)
    }
    

  return (
    <div>
      <h1>Todo List</h1>
      <ul style={{listStyleType: 'none'}}>
        {todos.map((todo) => (
          <li key={todo.id} style={{padding: '10px'}}>
            <input type ="checkbox" checked={todo.completed} onChange={() =>toggleTodo(todo.id)}/>
            {todo.todo}
          <button onClick={()=> {
                    deleteTodo(todo.id)
                }} style={{margin: '10px'}}>Delete Todo</button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default AccessTodos