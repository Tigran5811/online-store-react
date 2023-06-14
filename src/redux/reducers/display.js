export const GET_DISPLAY = 'GET_DISPLAY';

const reducer = (state = [], { type, data = [] }) => {
  switch (type) {
    case GET_DISPLAY:
      return data;
    default:
      return state;
  }
};
export default reducer;
