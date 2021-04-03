import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.jonas-streule.ch/wp-json/',
    headers: {
        'Content-Type': 'application/json',
    }
});