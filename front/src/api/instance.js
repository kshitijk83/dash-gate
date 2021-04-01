import Axios from 'axios';

const axiosInstance = Axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;