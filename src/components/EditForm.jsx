import React, {useState} from 'react';
import '../styles/EditForm.css'

const EditForm = ({ initialTask, onSubmit, onCancel }) => {
    const [title, setTitle] = useState(initialTask.title);
    const [description, setDescription] = useState(initialTask.description);
    const   
   [dueDate, setDueDate] = useState(initialTask.dueDate);
    const [priority, setPriority] = useState(initialTask.priority);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ ...initialTask, title, description, dueDate, priority });
      onCancel();
    };
  
  return (
    <div className='edit_Form'> 
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
      <button type="submit">Save Changes</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
    </div>
  );
};

export default EditForm;