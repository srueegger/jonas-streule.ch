import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.jonas-streule.ch/wp-json/wp/v2/',
    headers: {
        'Content-Type': 'application/json',
    }
});