import { useState } from "react";

export function CreateTodo(props) {
    // react-query
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");

    return <div>
        <input id="title" style= {{
            padding: "10px",
            margin: "10px",
            borderRadius: "5px",
        }} type ="text" placeholder="title" onChange= {
            function(e) {
                const value = e.target.value;
                setTitle(e.target.value);
            }
        }></input> <br />
        <input id="desc" style={{
            padding: "10px",
            margin: "10px",
            borderRadius: "5px",
        }} 
        type ="text" placeholder="description" onChange= {
            function(e) {
                const value = e.target.value;
                setDescription(e.target.value);
            }
        }></input> <br />

        <button style={{
            padding: "10px",
            margin: "10px",
            borderRadius: "5px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer"
        }} onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({ // this Stringify converts the object to a JSON string, it is needed because we are using fetch
                    title: title,
                    description: description,
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    alert("Todo created successfully");
                })              
        }}> Create Todo </button>
    </div>
}

