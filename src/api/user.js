import axios from './axios';

export const getUsers = async (token) => axios({
  method: 'GET',
  url: 'user',
}, token);

export const getUser = async (id, token) => axios({
  method: 'GET',
  url: `user/${id}`,

}, token);

export const updateUser = async (id, data) => axios({
  method: 'put',
  url: `user/${id}`,
  data,
  headers: {
    'Content-Type': 'application/json',

    //   // 'content-length': `${file.size}`, // 👈 Headers need to be a string
  },

});
