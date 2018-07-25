import axios from 'axios';

export const getUser = () => axios.get('https://jsonplaceholder.typicode.com/users');