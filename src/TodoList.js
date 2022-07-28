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
  };

  const toggleCompletion = function(id) {
    const newTodos ={todos: [...state.todos].map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed};
      } else {
        return todo;
      }
    })};
    setState(newTodos);
  };

  const todos = state.todos.map(todo => {
    return (<
      Todo 
        task={todo.task}
        key={todo.id}
        id={todo.id}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        completed={todo.completed}
        toggleCompletion={toggleCompletion}
      />
    )
  })

  return (
    <div className="TodoList">
      <h1>Todo List! <span>A Simple React Todo List App</span></h1>
      <ul>
        {todos}
      </ul>
      <NewTodoForm addTodo={addTodo} />
    </div>
  );
}

export default TodoList;
