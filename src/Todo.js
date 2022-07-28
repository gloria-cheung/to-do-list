import './Todo.css';

function Todo(props) {
 const {task, deleteTodo, id} = props;

  return (
    <div className="Todo">
      <button>Edit</button>
      <button onClick={() => {deleteTodo(id)}}>X</button>
      <li>
        {task}
      </li>
    </div>
  );
}

export default Todo;
