import axios from "axios";

const key = 'https://api.unsplash.com/';

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${key}`;
axios.defaults.headers.get['Accepts'] = 'application/json';