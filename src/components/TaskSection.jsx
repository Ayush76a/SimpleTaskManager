// src/components/TaskSection.jsx
import React from 'react';
import Task from './Task';
import '../styles/TaskSection.css'

const TaskSection = ({ title, tasks, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className="task-section">
      <h2>{title}</h2>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
          />
        ))
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default TaskSection;
