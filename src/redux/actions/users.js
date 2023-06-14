import { API } from '../../api';
import { GET_USERS } from '../reducers/users';

export const getUsersAction = (token) => async (dispatch) => {
  const data = await API.user.getUsers(token);
  if (data.length > 0) {
    dispatch({ type: GET_USERS, data });
  }
};
