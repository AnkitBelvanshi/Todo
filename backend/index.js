// writing the basic express boilerplate code,
// with express.json() middleware
const express = require('express');
const app = express();
/* body {
    title: string,
    description: string,
    completed: boolean;
}
*/
app.use(express.json());
app.post("/todo", (req, res) => {

})

app.get("/todos", (req, res) => {

})

app.put("/completed", (req, res) => {

})