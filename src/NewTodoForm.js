import {useState} from 'react'
import './NewTodoForm.css';
import { v4 as uuidv4 } from 'uuid'

function NewTodoForm(props) {
  const [state, setState] = useState({
    task: ""
  })

  const {addTodo} = props;

  const handleChange = function(evt) {
    setState({
      task: evt.target.value
    });
  };

  const handleSubmit = function(evt) {
    evt.preventDefault();
    addTodo({...state, id: uuidv4()});
    setState({task: ""});
  }

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor='task' >New Todo</label>
      <input 
        type='text'
        placeholder='New Todo'
        id='task'
        name={state.task}
        value={state.task}
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
