import React, { useState } from "react";

function Todo({ task= "default todo", id="1", remove, update }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTask, setEditTask] = useState(task);
    
    const handleRemove = () => {
        remove(id);
    };
    
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };
    
    const handleChange = (e) => {
        setEditTask(e.target.value);
    };
    
    const handleUpdate = (e) => {
        e.preventDefault();
        update(id, task);
        setIsEditing(false);
    };
    
    const todoDisplay = (
        <div>
        <li>{task}</li>
        <button onClick={toggleEdit}>Edit</button>
        <button onClick={handleRemove}>X</button>
        </div>
    );
    
    const todoForm = (
        <form onSubmit={handleUpdate}>
        <input type="text" value={task} onChange={handleChange} />
        <button>Save</button>
        </form>
    );
    
    return <div>{isEditing ? todoForm : todoDisplay}</div>;
    }
    
export default Todo;
