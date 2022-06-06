import axios from 'axios';
import { useQuery, useMutation } from 'react-query';
const useRequest = () => {
  const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 30000,
    headers: {
      'content-type': 'application/json',
    },
    'access-control-allow-origin': '*',
  });
  request.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        return error;
      }
      return Promise.reject(error.response);
    }
  );
  const getData = (...arg) => {
    return request.get(...arg);
  };

  const get = useQuery('', getData);

  return { request, get };
};

export default useRequest;
