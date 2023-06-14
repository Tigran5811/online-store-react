import axios from './axios';

export const getLaptops = async (token) => axios({
  method: 'GET',
  url: 'laptop',
}, token);

export const getLaptop = async (id, token) => axios({
  method: 'GET',
  url: `laptop/${id}`,

}, token);

export const updateLaptop = async (id, data) => axios({
  method: 'put',
  url: `laptop/${id}`,
  data,
  headers: {
    'Content-Type': 'application/json',

    //   // 'content-length': `${file.size}`, // 👈 Headers need to be a string
  },

});

export const createLaptop = async (data, token) => axios({
  method: 'post',
  url: '/laptop',
  data,
}, token);

export const deleteLaptop = async (id, token) => axios({
  method: 'delete',
  url: `laptop/${id}`,
}, token);
