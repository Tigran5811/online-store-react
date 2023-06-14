import { API } from '../../api';
import { GET_LAPTOP } from '../reducers/laptop';

export const getLaptopAction = (id, token) => async (dispatch) => {
  const data = await API.laptop.getLaptop(token);

  if (data._id) {
    dispatch({ type: GET_LAPTOP, data });
  }
};

export const createLaptopAction = (data, token) => async () => {
  await API.laptop.createLaptop(data, token);
};
