import { API } from '../../api';
import { GET_IMAGE } from '../reducers/userImage';

export const getImageAction = (imageId) => async (dispatch) => {
  const data = await API.image.getImage(imageId);
  dispatch({ type: GET_IMAGE, data });
};
