import axios from 'axios';
import myAxios from './axios';
import { apiUrl } from '../constants/url';

export const createImage = async (formData) => axios.post(`${apiUrl}image/`, formData);

export const getImage = async (id) => myAxios({
  method: 'GET',
  url: `image/${id}`,
});

export const deleteImage = async (id) => myAxios({
  method: 'delete',
  url: `image/${id}`,
});

export const getImagesUsers = async (data) => myAxios({
  method: 'post',
  url: 'image/users',
  data,
  headers: {
    'Content-Type': 'application/json',
  },
  // headers: {
  //   'Content-Type': 'application/json',

  //   // 'content-length': `${data.size}`, // 👈 Headers need to be a string
  // },
});
