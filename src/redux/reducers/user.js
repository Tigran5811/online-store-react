export const GET_USER = 'GET_USER';
export const USER_LOGOUT = 'USER_LOGOUT';

const reducer = (state = [], { type, data }) => {
  switch (type) {
    case GET_USER:
      return data;
    case USER_LOGOUT:
      return [];
    default:
      return state;
  }
};
export default reducer;
