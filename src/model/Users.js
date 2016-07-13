import axios from 'axios';

const list = () => {
    return axios.get('/api/?results=20').then((response) => {
       return response.data.results;
    });
};

export default {
    list
};