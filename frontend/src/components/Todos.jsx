import React from "react";

const Todos = ({ todos }) => {
  return (
    <div className="flex gap-10 wrap">
      {todos.map((todo) => (
        <div key={todo._id}>
          <div>{todo.title}</div>
          <div>{todo.description}</div>
          <div>{todo.completed === true ? "Completed" : "Not Completed"}</div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
