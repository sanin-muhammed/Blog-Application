import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:2001/api',
    headers: {
        'Content-Type': 'application/json', // Default content type
    },
});

export default axiosInstance;