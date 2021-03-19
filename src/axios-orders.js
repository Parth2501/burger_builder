import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://shop-app-1b538.firebaseio.com/'
});

export default instance;