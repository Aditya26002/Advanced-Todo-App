const mongoose = require("mongoose");

mongoose.connect(process.env.DB_LINK);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = { todo };
