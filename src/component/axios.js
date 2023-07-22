import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: 'https://amzon-clone-backend.onrender.com/'
});

export default instance;