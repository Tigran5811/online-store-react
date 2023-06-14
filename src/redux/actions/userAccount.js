import { API } from '../../api';
import { ACCOUNT_LOGOUT, USER_ACCOUNT } from '../reducers/userAccount';
import { removeAllOrders } from './orders';

export const getUserAccountAction = (token, id) => async (dispatch) => {
  const data = await API.user.getUser(id, token);

  dispatch({ type: USER_ACCOUNT, data });
};

export const AccountLogOutAction = () => async (dispatch) => {
  dispatch({ type: ACCOUNT_LOGOUT });
  dispatch(removeAllOrders());
  localStorage.clear();
};
