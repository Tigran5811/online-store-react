import { API } from '../../api';
import { GET_ORDERS, REMOVE_ALL, REMOVE_ORDERS } from '../reducers/orders';

export const getOrdersAction = (token) => async (dispatch) => {
  const data = await API.order.getOrders(token);
  dispatch({ type: GET_ORDERS, data });
};

export const removeOrdersAction = (orderId, token) => async (dispatch) => {
  const { id } = await API.order.deleteOrders(orderId, token);
  dispatch({ type: REMOVE_ORDERS, data: id });
};

export const removeAllOrders = () => async (dispatch) => {
  dispatch({ type: REMOVE_ALL });
};

export const createOrderAction = (ProductId, userId, token, pathname) => async (dispatch) => {
  console.log('4');
  if (pathname.includes('display')) {
    const data = { user: userId, display: ProductId };
    await API.order.createOrder(data, token);
  }
  if (pathname.includes('laptop')) {
    console.log('454');
    const data = { user: userId, laptop: ProductId };
    await API.order.createOrder(data, token);
  }
  dispatch(getOrdersAction(token));
};
