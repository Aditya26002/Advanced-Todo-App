const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://aditya:xoaFeVRV2nPFbVVC@week3.tlc0b.mongodb.net/todo-app"
);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = { todo };
