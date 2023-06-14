import React from 'react';
import styles from './Input.module.scss';

export const Input = ({
  name, onChange, type, placeholder, value,
}) => (
  <input
    className={styles.input}
    value={value}
    placeholder={placeholder}
    type={type}
    name={name}
    onChange={onChange}
  />
);
