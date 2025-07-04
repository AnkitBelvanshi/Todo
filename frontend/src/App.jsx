import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos} from './components/Todos'

// useEffect hook is used to fetch data from the server when the component mounts
// useState hook is used to manage the state of the todos
function App() {
    const [todos, setTodos] = useState([]);

    // wrong way
    fetch("http://localhost:3000/todos")
      .then(async function(res) {
        const json = await res.json();
        setTodos(json.todos);
      })
    return (
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos={todos}></Todos>

      </div>
  )
}

export default App
