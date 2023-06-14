import { API } from '../../api';
import { DELETE_DISPLAYS, GET_DISPLAYS } from '../reducers/displays';
import { REMOVE_ORDERS } from '../reducers/orders';

export const getDisplaysAction = (token) => async (dispatch) => {
  const data = await API.display.getDisplays(token);

  dispatch({ type: GET_DISPLAYS, data });
};

export const deleteDisplaysAction = (id, token, idImage) => async (dispatch, getState) => {
  const { orders } = getState();
  orders.map(async (item) => {
    await API.order.deleteOrders(item._id, token);
    dispatch({ type: REMOVE_ORDERS, data: item._id });
  });
  await API.display.deleteDisplay(id, token);
  await API.image.deleteImage(idImage, token);
  dispatch({ type: DELETE_DISPLAYS, data: id });
};
