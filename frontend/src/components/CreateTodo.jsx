
export function CreateTodo() {
    return <div>
        <input style= {{
            padding: "10px",
            margin: "10px",
            borderRadius: "5px",
        }} type ="text" placeholder="title"></input> <br />
        <input style={{
            padding: "10px",
            margin: "10px",
            borderRadius: "5px",
        }} 
        type ="text" placeholder="description"></input> <br />

        <button style={{
            padding: "10px",
            margin: "10px",
            borderRadius: "5px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer"
        }}> Create Todo </button>
    </div>
}

