import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
// import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };

  const remove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const update = (id, updatedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };


  const todoParts = todos.map((todo) => (
    <Todo
      remove={remove}
      key={todo.id}
      id={todo.id}
      task={todo.task}
      update={update}
    />
  ));

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {todoParts}
    </div>
  );
}

export default TodoList;
