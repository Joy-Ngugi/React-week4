import React, {createContext, useReducer, useEffect} from 'react'
import axios from 'axios'

const TaskContext = createContext();

function TaskReducer(state, action) {
    switch (action.type){
        case 'FETCH_TASKS':
            return {...state, tasks: action.payload};
        case 'ADD_TASK':
            return {...state, tasks: [...state.tasks, action.payload]};
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task=>
                    task.id ===action.payload.id ? action.payload :task
                ),
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task=> task.id !== action.payload),
            };
            default:
                return state;
    }
}
  function TaskProvider({children}){
    const [state, dispatch] = useReducer(TaskReducer, {tasks:[]});

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
         .then(response => dispatch ({ type: 'FETCH_TASKS', payload:response.data}));
    }, []);
  
  return (
    <TaskContext.Provider value= {{state, dispatch}}>
        {children}
    </TaskContext.Provider>
  )
}

export  {TaskContext, TaskProvider};