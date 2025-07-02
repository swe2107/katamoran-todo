import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { saveTasks, loadTasks } from './utils/storage';

function App() {
  const [tasks, setTasks] = useState(loadTasks());

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

  const updateTask = (updated) => setTasks(tasks.map(task => task.id === updated.id ? updated : task));

  return (
    <div className="container">
      <Header />
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
      <ToastContainer />
    </div>
  );
}

export default App;
