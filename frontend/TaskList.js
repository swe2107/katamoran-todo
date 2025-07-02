import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onDelete, onUpdate }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </ul>
  );
}
