export const SING_UP = 'ADD_TODO';
export const SING_IN = 'SING_IN';
export const VERIFY_EMAIL = 'VERIFY_EMAIL';

const reducer = (state = [], { type, data }) => {
  switch (type) {
    case SING_UP:
      return [...state, data];
    case SING_IN:
      return [...state, data];
    default:
      return state;
  }
};
export default reducer;
