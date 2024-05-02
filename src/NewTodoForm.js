import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  const handleChange = (evt) => {
    setTask(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo({
      task,
      id: uuid(),
    });
    setTask("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">New Todo:</label>
        <input
          type="text"
          placeholder="New Todo"
          id="task"
          name="task"
          value={task}
          onChange={handleChange}
        />
        <button>Add a Todo!</button>
      </form>
    </div>
  );
}

export default NewTodoForm;
