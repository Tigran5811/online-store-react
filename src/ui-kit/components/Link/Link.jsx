import classNames from 'classnames/bind';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Link.module.scss';

const cx = classNames.bind(styles);

export const Link = ({
  text, size, to,
}) => (
  <NavLink to={to} className={cx('link', { large: size === 'large' })}>
    {
      text
    }
  </NavLink>
);
