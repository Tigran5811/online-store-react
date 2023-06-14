export const GET_DISPLAYS = 'GET_DISPLAYS';
export const DELETE_DISPLAYS = 'DELETE_DISPLAYS';

const reducer = (state = [], { type, data }) => {
  switch (type) {
    case GET_DISPLAYS:
      return data;
    case DELETE_DISPLAYS:
      return state.filter((item) => item.id !== data);
    default:
      return state;
  }
};
export default reducer;
