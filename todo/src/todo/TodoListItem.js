import React, { useState } from 'react';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed, onUpdatePressed, onPendingPressed, onDoingPressed }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedText, setUpdatedText] = useState(todo.text);
    const [status, setStatus] = useState(todo.isCompleted ? 'Completed' : todo.isDoing ? 'Doing' : 'Pending');

    const handleUpdateClick = () => {
        if (isEditing) {
            onUpdatePressed(todo.text, updatedText);
        }
        setIsEditing(!isEditing);
    };

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
        if (newStatus === 'Completed') {
            onCompletedPressed(todo.text);
        } else if (newStatus === 'Doing') {
            onDoingPressed(todo.text);
        } else if (newStatus === 'Pending') {
            onPendingPressed(todo.text);
        }
    };

    return (
        <div className='todo-item-container'>
            {isEditing ? (
                <input 
                    type="text" 
                    value={updatedText} 
                    onChange={(e) => setUpdatedText(e.target.value)} 
                />
            ) : (
                <h3 style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
                    {todo.text}
                </h3>
            )}
            <div className="button-container">
                <button onClick={handleUpdateClick}>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
                <select value={status} onChange={(e) => handleStatusChange(e.target.value)}>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Doing">Doing</option>
                </select>
                <button onClick={() => onRemovePressed(todo.text)}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default TodoListItem;
