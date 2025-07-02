import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error("Task title can't be empty");
      return;
    }
    const newTask = {
      id: Date.now().toString(),
      title,
      completed: false
    };
    onAdd(newTask);
    setTitle('');
    toast.success("Task added");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Add a new task..." />
      <button type="submit">Add</button>
    </form>
  );
}
