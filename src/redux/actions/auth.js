// import { API } from '../../api';
// import { SING_IN } from '../reducers/auth';
// import { GET_USER } from '../reducers/user';
// import { getImageAction } from './userImage';

// export const signupUser = (token, id) => async (dispatch) => {
//   const data = await API.user.getUser(id, token);

//   if (data.image !== undefined) {
//     dispatch(getImageAction(data?.image));
//   }
//   dispatch({ type: GET_USER, data });
// };

// export const signinUser = (email, password) => async (dispatch) => {
//   const data = await API.auth.signIn({ email, password });
//   if (data !== undefined) {
//     dispatch({ type: SING_IN, data });
//   }
// };

// export const verifyEmailUser = (token, id) => async (dispatch) => {
//   const data = await API.user.getUser(id, token);

//   if (data.image !== undefined) {
//     dispatch(getImageAction(data?.image));
//   }
//   dispatch({ type: GET_USER, data });
// };
