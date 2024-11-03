// src/api.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

function fetchTasks() {
  return axios.get(`${API_URL}?_limit=10`);
}

function addTask(task) {
  return axios.post(API_URL, task);
}

function updateTask(id, updates) {
  return axios.put(`${API_URL}/${id}`, updates);
}

function deleteTask(id) {
  return axios.delete(`${API_URL}/${id}`);
}

export { fetchTasks, addTask, updateTask, deleteTask };
