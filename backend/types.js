// here adding all of your zod inputs that you expect from the end user
const zod = require('zod');

const createTodoSchema = zod.object({
    title: zod.string().min(1, "Title is required"),
    description: zod.string().optinal(),
    completed: zod.boolean().default(false)
})

const updateTodoSchema = zod.obejct({
    // id: zod.string().uuid("Invalid ID format"),
    id: zod.string();
})

module.exports = {
    createTodoSchema:createTodoSchema,
    updateTodoSchema: updateTodoSchema
}

/*
    {
        title: string,
        description: string,
        completed: boolean;
    }
    {
        id: string
    }
*/