import axios from 'axios';
//http://localhost:3333/tasks
const api = axios.create({
  //baseURL: 'http://localhost:3333/'
  baseURL: 'http://economia.awesomeapi.com.br/'
});

export default api;