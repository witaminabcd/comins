import axios from 'axios';

const AXIOS = axios.create({
  baseURL: '/',
  headers: {
    'X-Custom-Header': 'foobar',
    'Content-type': 'application/json; charset=UTF-8',
  }
});

export const updateCatalog = (data: any) => {
  return AXIOS.get('/data/catalog.json', {params: data});
};
