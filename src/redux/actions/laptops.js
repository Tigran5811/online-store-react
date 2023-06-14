import { API } from '../../api';
import { DELETE_LAPTOPS, GET_LAPTOPS } from '../reducers/laptops';
import { REMOVE_ORDERS } from '../reducers/orders';

export const getLaptopsAction = (token) => async (dispatch) => {
  const data = await API.laptop.getLaptops(token);

  dispatch({ type: GET_LAPTOPS, data });
};

export const deleteLaptopsAction = (id, token, idImage) => async (dispatch, getState) => {
  const { orders } = getState();
  orders.map(async (item) => {
    await API.order.deleteOrders(item._id, token);
    dispatch({ type: REMOVE_ORDERS, data: item._id });
  });
  await API.laptop.deleteLaptop(id, token);
  await API.image.deleteImage(idImage, token);
  dispatch({ type: DELETE_LAPTOPS, data: id });
};
