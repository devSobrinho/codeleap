import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://dev.codeleap.co.uk/careers',
});
