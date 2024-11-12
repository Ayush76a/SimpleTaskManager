// src/components/Task.jsx
import React from 'react';
const Task = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
      <div className='task-button'>
      <button onClick={() => onToggleComplete(task.id)}>
        {task.completed ? "❌ " : "✅"}
      </button>
      <button onClick={() => onEdit(task)}>✏️</button>
      <button onClick={() => onDelete(task.id)}>☠️</button>
      </div>
    </div>
  );
};

export default Task;
