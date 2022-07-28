import './Todo.css';

function Todo(props) {
 const {task} = props
  return (
    <div className="Todo">
      <button>Edit</button>
      <button>X</button>
      <li>
        {task}
      </li>
    </div>
  );
}

export default Todo;
