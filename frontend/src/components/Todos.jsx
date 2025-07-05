// component that renders a form to create a new todo item
/*
    todos = [{
        title: "Go to gym",
        description: "Go to the gym at 7 AM",
    }]
*/
export function Todos({todos}) {

    return <div>
        {todos.map(todo => {
            return <div>
                <h1> {todo.title} </h1>
                <h2> {todo.description} </h2>
                <button> {todo.completed == true ? "Completed" : "Not Completed"} </button>
            </div>
        })}
    </div>
}