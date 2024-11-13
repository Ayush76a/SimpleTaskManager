import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskSection from './TaskSection';
import { getTasks, saveTasks } from '../utils/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState(""); // State for priority filter
  const [dateFilter, setDateFilter] = useState(""); // State for date filter

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const addTask = (newTask) => {
    if (!newTask.title || !newTask.dueDate) {
      toast.warn("Please add a title and due date!");
      return;
    }
    const updatedTasks = [...tasks, { ...newTask, id: Date.now() }];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    toast.success("Task Added!");
  };

  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    toast.info("Task Edited!");
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    toast.error("Task Deleted!");
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    toast.info("Task Updated!");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriorityFilter(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateFilter(e.target.value);
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setPriorityFilter("");
    setDateFilter("");
  };

  // Filter tasks based on search term, priority, and date
  const filteredTasks = tasks
    .filter((task) =>
      task.title && task.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((task) =>
      priorityFilter ? task.priority === priorityFilter : true
    )
    .filter((task) =>
      dateFilter ? new Date(task.dueDate).toDateString() === new Date(dateFilter).toDateString() : true
    );

  const upcomingTasks = filteredTasks.filter((task) => !task.completed && new Date(task.dueDate) > new Date());
  const overdueTasks = filteredTasks.filter((task) => !task.completed && new Date(task.dueDate) < new Date());
  const completedTasks = filteredTasks.filter((task) => task.completed);

  return (
    <div className="dashboard">
      <h1>Task Dashboard</h1>

    {/* Form in left and filter in right */}
  <div className="filter-form-row">
    <div className="task-form-container">
      <TaskForm onSubmit={addTask} />
    </div>
    
    {/* Filter Section on the right */}
    <div className="filter-section">
    <div className="filter-container">
     <h3 className='filter-heading'>Filters: </h3>
      {/* Search Input */}
      <input
        type="text"
        placeholder="🔍"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      /> 

      {/* Priority Filter Dropdown */}
      <select value={priorityFilter} onChange={handlePriorityChange} className="priority-filter">
        <option value="">Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      {/* Date Filter */}
      <input
        type="date"
        value={dateFilter}
        onChange={handleDateChange}
        className="date-filter"
      />

      {/* Clear Filters Button */}
      <button onClick={clearFilters} className="clear-filters-button">
        Remove All
      </button>
    </div>
  </div>
  </div>

      <div className="task-sections">
        <TaskSection
          title="Upcoming Tasks"
          tasks={upcomingTasks}
          onEdit={editTask}
          onDelete={deleteTask}
          onToggleComplete={toggleTaskCompletion}
        />
        <TaskSection
          title="Overdue Tasks"
          tasks={overdueTasks}
          onEdit={editTask}
          onDelete={deleteTask}
          onToggleComplete={toggleTaskCompletion}
        />
        <TaskSection
          title="Completed Tasks"
          tasks={completedTasks}
          onEdit={editTask}
          onDelete={deleteTask}
          onToggleComplete={toggleTaskCompletion}
        />
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
    </div>
  );
};

export default Dashboard;
