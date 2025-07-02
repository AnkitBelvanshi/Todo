// writing the basic express boilerplate code,
// with express.json() middleware
const { createTodoSchema } = require('./types');
const { updateTodoSchema } = require('./types');

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
    const createPayload = req.body; 
    const parsedPayload =  =createTodoSchema.safeParse(createPayload);
    if(!parsedPayload.success) {
         res.status(411).json({
            error: parsedPayload.error.errors,
            msg: "You provided wrong inputs",
        });
        return;
    }
})

app.get("/todos", (req, res) => {

})

app.put("/completed", (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodoSchema.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            error: parsedPayload.error.errors,
            msg: "You provided wrong inputs",
        })
        return;
    }
})