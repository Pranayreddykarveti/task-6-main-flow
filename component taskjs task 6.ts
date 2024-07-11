import React from 'react';

const Task = ({ task, onUpdate, onDelete }) => {
  return (
    <div>
      <input 
        type="checkbox" 
        checked={task.completed}
        onChange={() => onUpdate(task._id, { completed: !task.completed })}
      />
      <input 
        type="text" 
        value={task.name}
        onChange={(e) => onUpdate(task._id, { name: e.target.value })}
      />
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
};

export default Task;