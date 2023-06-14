import { API } from '../../api';
import { GET_DISPLAY } from '../reducers/display';

export const getDisplayAction = (id, token) => async (dispatch) => {
  const data = await API.display.getDisplay(token);

  if (data._id) {
    dispatch({ type: GET_DISPLAY, data });
  }
};

export const createDisplayAction = (data, token) => async () => {
  await API.display.createDisplay(data, token);
};
