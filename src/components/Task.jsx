import React, { useState } from 'react';
import EditForm from './EditForm.jsx';

const Task = ({ task, onEdit, onDelete, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const priorityClass = {
    Low: 'low-priority',
    Medium: 'medium-priority',
    High: 'high-priority',
  };

  return (
    <div className={`task ${priorityClass[task.priority]}`}>
      {isEditing ? (
        <EditForm
          initialTask={task} 
          onSubmit={onEdit}
          onCancel={handleCancelEdit}
        />
      ) : (
        <>
          <h3>{task.title}</h3>
          <p className="desc">{task.description}</p>
          <div className="due-priority">
            <p>Due: {task.dueDate}</p>
            <p className='prior'>Priority: {task.priority}</p>
          </div>
          <div className='task-buttons'>
          <button className='complete_button' onClick={() => onToggleComplete(task.id)}>
            {task.completed ? "❌" : "✅"}
          </button>
          <button className='edit_button' onClick={handleEdit}>✏️</button>
          <button className='delete_button' onClick={() => onDelete(task.id)}>☠️</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Task;