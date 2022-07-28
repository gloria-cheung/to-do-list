import {useState} from 'react'
import './TodoList.css';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';


function TodoList() {
  const [state, setState] = useState({
    todos: [] // [{task: ..., id: ...}, {task: ..., id: ...}]
  });
 
  const addTodo = function(task) {
    const newTodos ={todos: [...state.todos, task]};
    setState(newTodos);
  };

  const deleteTodo = function(id) {
    const newTodos = {todos: [...state.todos].filter(todo => todo.id !== id)};
    setState(newTodos);
  }

  const editTodo = function(task,id) {
    const newTodos ={todos: [...state.todos].map(todo => {
      if (todo.id === id) {
        return task;
      } else {
        return todo;
      }
    })};
    setState(newTodos);
  }

  const todos = state.todos.map(todo => {
    return (<
      Todo 
        task={todo.task}
        key={todo.id}
        id={todo.id}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    )
  })

  return (
    <div className="TodoList">
      <h1>Todo List!</h1>
      <NewTodoForm addTodo={addTodo} />
      <ul>
        {todos}
      </ul>
    </div>
  );
}

export default TodoList;
