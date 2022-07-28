import {useState} from 'react'
import './Todo.css';

function Todo(props) {
  const [state, setState] = useState({
    isEditing: false,
    task: props.task
  })
  
  const {task, deleteTodo, id, editTodo} = props;

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

  let result;
  if (state.isEditing) {
    result = (
      <div className='Todo'>
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            name={state.task}
            value={state.task}
            onChange={handleChange}
          />
          <button>Save</button>
        </form>
        <button onClick={toggleEdit}>Cancel</button>
      </div>  
    )
  } else {
    result = (
      <div className='Todo'>
        <button onClick={toggleEdit}>Edit</button>
        <button onClick={() => {deleteTodo(id)}}>X</button>
        <li>
          {task}
        </li>
      </div>
    )
  }

  return result;
}

export default Todo;
