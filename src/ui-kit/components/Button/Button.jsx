import classNames from 'classnames/bind';
import React from 'react';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

export const Button = ({
  text, type, onClick, disabled, size,
}) => (
  <button size={size} disabled={disabled} onClick={onClick} className={cx('button', { disabled }, { large: size === 'large', small: size === 'small' })} type={type}>{text}</button>
);
