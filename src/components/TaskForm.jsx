import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/TaskForm.css';

const TaskForm = ({ onSubmit, task = {} }) => {
  const [title, setTitle] = useState(task.title || "");
  const [description, setDescription] = useState(task.description || "");
  const [dueDate, setDueDate] = useState(task.dueDate || "");
  const [priority, setPriority] = useState(task.priority || "Low");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if title or due date is missing
    if (!title.trim()) {
      toast.error("Please add a title for the task.");
      return;
    }
    if (!dueDate) {
      toast.error("Please add a due date for the task.");
      return;
    }

    // If both title and due date are provided, proceed with submitting the task
    onSubmit({ title, description, dueDate, priority, completed: false });
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Low");
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
