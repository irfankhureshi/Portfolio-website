import { useState } from 'react'

const TodoApp = () => {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (!task.trim()) return
    setTodos([...todos, task])
    setTask('')
  }

  const removeTodo = index => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-cyan-700 mb-4">
        Todo App
      </h2>

      <div className="bg-white rounded shadow p-4">
        <div className="flex gap-2 mb-4">
          <input
            value={task}
            onChange={e => setTask(e.target.value)}
            placeholder="Enter task"
            className="flex-1 px-3 py-2 border rounded focus:ring-2 focus:ring-cyan-700 outline-none"
          />
          <button
            onClick={addTodo}
            className="bg-cyan-700 text-white px-4 rounded hover:bg-cyan-800"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo, i) => (
            <li
              key={i}
              className="flex justify-between items-center border p-2 rounded"
            >
              {todo}
              <button
                onClick={() => removeTodo(i)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoApp



// const addtodo = () => {
  // if(!task.trim()) return
  // setTodos([...todos , task])
  // setTask("")
  // }


  // const removeTodo = index=>  {
    // setTodos (todos.filter((_, i)=> i ==! index))
    // }
