export const GET_USERS = 'GET_USERS';

const reducer = (state = [], { type, data = [] }) => {
  switch (type) {
    case GET_USERS:
      return data;
    default:
      return state;
  }
};
export default reducer;
