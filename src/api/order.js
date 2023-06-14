import axios from './axios';

export const getOrders = async (token) => axios({
  method: 'GET',
  url: 'order',
}, token);

export const getOrder = async (id, token) => axios({
  method: 'GET',
  url: `order/${id}`,

}, token);

export const createOrder = async (data, token) => axios({
  method: 'post',
  url: 'order',
  data,
}, token);

export const deleteOrders = async (id, token) => axios({
  method: 'delete',
  url: `order/${id}`,
}, token);
