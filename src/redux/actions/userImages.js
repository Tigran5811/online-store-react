import { API } from '../../api';
import { GET_IMAGES } from '../reducers/userImages';

export const getImagesAction = (users) => async (dispatch) => {
  try {
    const images = users.map((item) => item.image);

    if (images.length > 0) {
      const data = await API.image.getImagesUsers({ images });
      dispatch({ type: GET_IMAGES, data });
    }
  } catch (error) {
    alert(error.massage);
  }
};
