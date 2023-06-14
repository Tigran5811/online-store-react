import { API } from '../../api';

export const createImageAction = (file) => async () => {
  const formData = new FormData();
  formData.append('image', file);
  const { data } = await API.image.createImage(formData);
  return data._id;
};
