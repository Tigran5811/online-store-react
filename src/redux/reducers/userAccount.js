export const USER_ACCOUNT = 'USER_ACCOUNT';
export const ACCOUNT_LOGOUT = 'ACCOUNT_LOGOUT';

const reducer = (state = [], { type, data }) => {
  switch (type) {
    case USER_ACCOUNT:
      return data;
    case ACCOUNT_LOGOUT:
      return {};
    default:
      return state;
  }
};
export default reducer;
