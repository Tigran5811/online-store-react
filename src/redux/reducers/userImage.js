export const GET_IMAGE = 'GET_IMAGE';

const reducer = (state = [], { type, data }) => {
  switch (type) {
    case GET_IMAGE:
      return data;
    default:
      return state;
  }
};
export default reducer;
