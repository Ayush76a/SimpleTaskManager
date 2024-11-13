import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskSection from './TaskSection';
import { getTasks, saveTasks } from '../utils/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const addTask = (newTask) => {
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

  // Filter tasks for different sections
  const upcomingTasks = tasks.filter((task) => !task.completed && new Date(task.dueDate) > new Date());
  const overdueTasks = tasks.filter((task) => !task.completed && new Date(task.dueDate) < new Date());
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    
    <div className="dashboard">

      <h1>Task Dashboard</h1>
      <TaskForm onSubmit={addTask} />

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
