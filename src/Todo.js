import {useState} from 'react'
import './Todo.css';

function Todo(props) {
  const [state, setState] = useState({
    isEditing: false,
    task: props.task
  })
  
  const {task, deleteTodo, id, editTodo, completed, toggleCompletion} = props;

  const handleSubmit = function(evt) {
    evt.preventDefault();
    const todo = {task: state.task, id};
    editTodo(todo, id);
    toggleEdit();
  };

  const handleChange = function(evt) {
    setState(st => ({
      ...st, 
      task: evt.target.value
    }))
  };

  const toggleEdit = function() {
    setState(st => ({
      ...st,
      isEditing: !state.isEditing
    }));
  };

  const handleCompletion = function() {
    toggleCompletion(id);
  }

  let result;
  if (state.isEditing) {
    result = (
      <div className='Todo'>
        <form className='Todo-edit-form' onSubmit={handleSubmit}>
          <input 
            type='text'
            name={state.task}
            value={state.task}
            onChange={handleChange}
          />
          <button>Save</button>
        </form>
      </div>  
    )
  } else {
    result = (
      <div className='Todo'>
        <li className={completed ? 'Todo-task completed' : 'Todo-task'} onClick={handleCompletion} >
          {task}
        </li>
        <div className='Todo-buttons'>
          <button onClick={toggleEdit}>
            <i class='fas fa-pen' />
          </button>        
          <button onClick={() => {deleteTodo(id)}}>
          <i class='fas fa-trash' />
          </button>
        </div>
      </div>
    )
  }

  return result;
}

export default Todo;
