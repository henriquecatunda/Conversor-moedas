import axios from 'axios';

const api = axios.create({
    baseURL: 'https://v6.exchangerate-api.com/v6/2a49bf35301de261998a2405/'
}); 

export default api;
