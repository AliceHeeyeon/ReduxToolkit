import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addTodo, toggleTodo, deleteTodo} from '../redux/reducers/todoSlice'

const TodoList = () => {
  const [newtodo, setNewtodo] = useState("")
  const [error, setError] = useState("")

  const todolist = useSelector(state => state.todo.todolist)
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    if(!newtodo) {
      setError("Please enter any todo!")
      return
    }
    dispatch(addTodo(newtodo))
    setNewtodo("")
  }

  return (
    <div>
      <h2>Todo List</h2>
      <input 
        type= "text"
        onChange={(e) => setNewtodo(e.target.value)}
        value={newtodo}
        onClick={() => setError("")}
      />
      <button
        onClick={handleAddTodo}
      >
        submit
      </button>
      {error && (<p style={{color: "red"}}>{error}</p>)}
      {todolist.map((todo) => (
        <ul key={todo.id}>
          <li>
            <input 
              type='checkbox'
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {todo.text}
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
            >Delete</button>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default TodoList
