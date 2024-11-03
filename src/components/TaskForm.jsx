// src/components/TaskForm.js
import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';
import { addTask } from './Api';

function TaskForm() {
  const { dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const newTask = { title, completed: false };
    const response = await addTask(newTask);
    dispatch({ type: 'ADD_TASK', payload: response.data });
    setTitle('');
  }

  return (
    <>
    
    <form onSubmit={handleSubmit} className='mt-6 '>
    <h1 className='mb-5 font-bold text-4xl text-center'>To-Do List</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        className='border-2 p-2 rounded-md border-black hover:bg-purple-300 placeholder:hover:text-white font-bold w-96'
        required
      />
      <button type="submit" className='ml-6 font-serif bg-blue-500 p-2 rounded-md text-white cursor-pointer'>Add Task</button>
    </form>
    </>
  );
}

export default TaskForm;
