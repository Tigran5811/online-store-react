export const GET_IMAGES = 'GET_IMAGES';

const reducer = (state = [], { type, data }) => {
  switch (type) {
    case GET_IMAGES:
      return data;
    default:
      return state;
  }
};
export default reducer;
