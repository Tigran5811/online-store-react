import { API } from '../../api';
import { GET_USER } from '../reducers/user';
import { USER_ACCOUNT } from '../reducers/userAccount';
import { getOrdersAction } from './orders';
// import { getImageAction } from './userImage';

export const getUserAction = (token, id) => async (dispatch) => {
  const data = await API.user.getUser(id, token);

  dispatch({ type: GET_USER, data });
};

export const signinUser = (email, password) => async (dispatch) => {
  const user = await API.auth.signIn({ email, password });
  if (user !== undefined) {
    const file = await API.user.getUser(user.id, JSON.stringify(user.token));
    const data = { ...file, token: JSON.stringify(user.token) };
    dispatch({ type: USER_ACCOUNT, data });
    dispatch(getOrdersAction(JSON.stringify(user.token)));
  }
};

export const signUpUserAction = (data) => async () => {
  await API.auth.signUp(data);
};

export const VerifyEmailAction = (token) => async () => {
  await API.auth.VerifyEmail(token);
};

export const updateUserAction = (id, data) => async () => {
  await API.user.updateUser(id, data);
};
