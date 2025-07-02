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
app.post("/todo", async (req, res) => {
    const createPayload = req.body; 
    const parsedPayload = createTodoSchema.safeParse(createPayload);
    if(!parsedPayload.success) {
         res.status(411).json({
            error: parsedPayload.error.errors,
            msg: "You provided wrong inputs",
        });
        return;
    }
    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.decription,
        // completed: createPayload.completed,
    })
})

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});

    res.json({
        todos
    })
})

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodoSchema.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            error: parsedPayload.error.errors,
            msg: "You provided wrong inputs",
        })
        return;
    }
    await todo.updateOne({
        _id: req.body.id,
    }, {
        // completed: req.body.completed,
        completed: true, // hardcoding it to true for now
    })
    res.json({
        msg: "Todo marked successfully",
    })
})