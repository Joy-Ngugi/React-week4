// src/components/TaskItem.js
import React, { useContext } from 'react';
// import { TaskContext } from './components/TaskContext';
// import { updateTask, deleteTask } from './components/Api';
import { TaskContext } from './TaskContext';
import { updateTask, deleteTask } from './Api';

function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);

  async function toggleCompletion() {
    const updatedTask = { ...task, completed: !task.completed };
    await updateTask(task.id, updatedTask);
    dispatch({ type: 'UPDATE_TASK', payload: updatedTask });
  }

  async function handleDelete() {
    await deleteTask(task.id);
    dispatch({ type: 'DELETE_TASK', payload: task.id });
  }

  return (
    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md mb-2">
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleCompletion}
        className="mr-2 h-5 w-5 text-blue-500"
      />
      <span className={`${task.completed ? 'line-through text-gray-500' : ''}`}>
      {task.title}
      </span>
      <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md text-sm ml-10">Delete</button>
    </div>
    </div>
  );
}

export default TaskItem;
