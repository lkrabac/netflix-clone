import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_MOVIES_BASE_URL,
});

export default instance;