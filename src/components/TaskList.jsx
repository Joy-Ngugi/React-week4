import React, {useContext, useState} from 'react'
import { TaskContext } from './TaskContext'
import TaskItem from './TaskItem'

function TaskList() {
    const {state} = useContext(TaskContext);
    const [filter, setFilter] = useState('all');

    const filteredTasks = state.tasks.filter(task =>{
        if (filter==='completed') return task.completed;
        if (filter ==='pending')return !task.completed;
        return true;
    });
  return (
    <div className='text-center'>
       
        <button onClick={()=>setFilter('all')} className='my-4 font-serif bg-blue-400 py-1 px-2 rounded-md text-white cursor-pointer hover:bg-blue-500' >All</button>
        <button onClick={()=>setFilter('completed')} className='ml-6 font-serif bg-blue-400 py-1 px-2 rounded-md text-white cursor-pointer hover:bg-blue-500'>Completed</button>
        <button onClick={()=>setFilter('pending')} className='ml-6 font-serif bg-blue-400 py-1 px-2 rounded-md text-white cursor-pointer hover:bg-blue-500'>Pending</button>
        {filteredTasks.map(task=>(
            <TaskItem key={task.id} task={task}/>
        ))}
    </div>
  )
}

export default TaskList