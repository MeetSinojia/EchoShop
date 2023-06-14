import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: '/.netlify/functions/api' // Update the baseURL to the Netlify Functions API endpoint
});

export default instance;
