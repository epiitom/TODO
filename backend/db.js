const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://prathmesh18:FWGAGN8iu7nBY9z0@cluster1.pmfqlsq.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String ,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports ={
    todo
}