export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const ADD_IMPORTANT = 'ADD_IMPORTANT';
export const ADD_COMPLETED = 'ADD_COMPLETED';

const reducer = (state = [], { type, payload: { todo, id } = {} }) => {
  switch (type) {
    case ADD_TODO:
      return [...state, todo];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== id);
    case ADD_IMPORTANT:
      return state.map((item) => (item.id === id ? {
        ...item,
        isImportant: !item.isImportant,
      } : item));
    case ADD_COMPLETED:
      return state.map((item) => (item.id === id ? {
        ...item,
        isCompleted: !item.isCompleted,
      } : item));
    default:
      return state;
  }
};
export default reducer;
