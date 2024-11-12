import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskSection from './TaskSection';
import { getTasks, saveTasks } from '../utils/storage';
import '../styles/Dashboard.css'

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, { ...newTask, id: Date.now() }];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
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

    </div>
  );
};

export default Dashboard;
