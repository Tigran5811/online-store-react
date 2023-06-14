export const GET_ORDERS = 'GET_ORDERS';
export const REMOVE_ORDERS = 'REMOVE_ORDERS';
export const REMOVE_ALL = 'REMOVE_ALL';

const reducer = (state = [], { type, data = [] }) => {
  switch (type) {
    case GET_ORDERS:
      return data;
    case REMOVE_ORDERS:
      return state.filter((item) => item._id !== data);
    case REMOVE_ALL:
      return [];
    default:
      return state;
  }
};
export default reducer;
