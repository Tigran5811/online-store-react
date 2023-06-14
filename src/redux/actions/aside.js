import { CHANGE_ASIDE } from '../reducers/aside';

export const changeAside = (isOpenAside) => async (dispatch) => {
  const data = !isOpenAside;
  dispatch({ type: CHANGE_ASIDE, data });
};
