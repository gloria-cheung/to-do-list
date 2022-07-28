import {useState} from 'react'
import './Todo.css';

function Todo(props) {
  const [state, setState] = useState({
    isEditing: false
  })
  const {task, deleteTodo, id} = props;

  let result;
  if (state.isEditing) {
    result = (
      <div className='Todo'>
        <form>
          <input type='text' />
        </form>
      </div>
    )
  } else {
    result = (
      <div className='Todo'>
        <button onClick={() => {setState({isEditing: true})}}>Edit</button>
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
