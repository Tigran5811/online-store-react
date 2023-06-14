export const GET_LAPTOP = 'GET_LAPTOP';

const reducer = (state = [], { type, data = [] }) => {
  switch (type) {
    case GET_LAPTOP:
      return data;
    default:
      return state;
  }
};
export default reducer;
