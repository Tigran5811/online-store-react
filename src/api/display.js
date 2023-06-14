import axios from './axios';

export const getDisplays = async (token) => axios({
  method: 'GET',
  url: 'display',
}, token);

export const getDisplay = async (id, token) => axios({
  method: 'GET',
  url: `display/${id}`,

}, token);

export const updateDisplay = async (id, data) => axios({
  method: 'put',
  url: `display/${id}`,
  data,
  headers: {
    'Content-Type': 'application/json',

    //   // 'content-length': `${file.size}`, // 👈 Headers need to be a string
  },

});

export const createDisplay = async (data, token) => axios({
  method: 'post',
  url: '/display',
  data,
}, token);

export const deleteDisplay = async (id, token) => axios({
  method: 'delete',
  url: `display/${id}`,
}, token);
