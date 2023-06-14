import { activeStyle } from './constants';

export const getActiveStyle = ({ isActive }) => (isActive ? activeStyle : undefined);
