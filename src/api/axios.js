import axios from 'axios';

const instance = axios.create();
instance.defaults.baseURL = 'http://localhost:3004/';
instance.defaults.method = 'POST';

instance.interceptors.response.use((config) => config.data, (config) => {
  const status = config.response;
  if (status === 403 || status === 401) {
    localStorage.removeItem('token');
  }
  return Promise.reject(config.response);
});

export default (config, withToken) => {
  const request = instance({
    ...config,
    headers: withToken ? {
      Authorization: `Bearer ${JSON.parse(withToken)}`,
    } : {},
  });
  return request;
};
// withToken ? {
//   Authorization: `Bearer ${JSON.parse(withToken)}`,
// } :
