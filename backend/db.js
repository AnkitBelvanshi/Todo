const mongoose = require('mongoose');
/* 
    Todo Schema
    {
        title: string,
        description: string,
        completed: boolean;
    }
    mongoose url: mongodb+srv://ankit:12345@cluster0.ve1m5.mongodb.net/
*/
mongoose.connect('mongodb+srv://ankit:12345cluster0.ve1m5.mongodb.net/')
const todoSchema = mongoose.Schema({
    title: String,
    descrption: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}