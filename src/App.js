
import './App.css';
import React from 'react';
import { TaskProvider } from './components/TaskContext';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';



function App() {
  return (
    
    <TaskProvider>
    <div className="min-h-screen bg-purple-100 flex flex-col items-center" >
      <TaskForm />
      <TaskList />
    </div>
  </TaskProvider>
  
  );
}

export default App;
