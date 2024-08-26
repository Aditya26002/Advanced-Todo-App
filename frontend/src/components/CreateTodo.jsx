import React from "react";

const CreateTodo = () => {
  return (
    <div>
      <div className="bg-slate-400 text-center">
        <input className="m-2" type="text" placeholder="title"></input> <br />
        <input
          className="m-2"
          type="text"
          placeholder="description"
        ></input>{" "}
        <br />
        <button
          className="m-2"
          onClick={() => {
            fetch("http://localhost:3000/todo", {
              method: "POST",
              body: {
                title: "",
                description: "",
              },
            });
          }}
        >
          Add a todo
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
