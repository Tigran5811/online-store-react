export const CHANGE_ASIDE = 'CHANGE_ASIDE';

const reducer = (state = false, { type, data = false }) => {
  switch (type) {
    case CHANGE_ASIDE:
      return data;
    default:
      return state;
  }
};
export default reducer;
