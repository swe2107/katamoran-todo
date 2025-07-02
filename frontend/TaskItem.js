import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

export default function TaskItem({ task, onDelete, onUpdate }) {
  const toggleStatus = () => {
    onUpdate({ ...task, completed: !task.completed });
    toast.info(`Marked as ${!task.completed ? 'completed' : 'incomplete'}`);
  };

  return (
    <motion.li
      className={`task ${task.completed ? 'completed' : ''}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span onClick={toggleStatus}>{task.title}</span>
      <button onClick={() => onDelete(task.id)}>❌</button>
    </motion.li>
  );
}
