export const GET_LAPTOPS = 'GET_LAPTOPS';
export const DELETE_LAPTOPS = 'DELETE_LAPTOPS';

const reducer = (state = [], { type, data }) => {
  switch (type) {
    case GET_LAPTOPS:
      return data;
    case DELETE_LAPTOPS:
      return state.filter((item) => item.id !== data);
    default:
      return state;
  }
};
export default reducer;
