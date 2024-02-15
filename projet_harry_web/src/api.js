import axios from 'axios';

const instance = axios.create({
  baseURL: 'api.potterdb.com',
});

export default instance;