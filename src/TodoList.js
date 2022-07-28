import {useState} from 'react'
import './TodoList.css';
import Todo from './Todo';

function TodoList() {
  const [state, setState] = useState({
    todos: [
      {task: "walk the dog"},
      {task: "wash the dishes"},
      {task: "do laundry"}
    ]
  })

  const todos = state.todos.map(todo => <Todo task={todo.task}/>)
  
  return (
    <div className="TodoList">
      <h1>Todo List!</h1>
      <ul>
        {todos}
      </ul>
    </div>
  );
}

export default TodoList;
