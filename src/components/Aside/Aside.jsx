import classNames from 'classnames/bind';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Aside.module.scss';
import { Nav } from './Nav/Nav';
import { getAside } from '../../redux/selectors/aside';

const cx = classNames.bind(styles);

export const Aside = () => {
  const isOpenAside = useSelector(getAside);
  return (
    <aside className={cx('aside', { open: isOpenAside })}>
      <Nav />
    </aside>
  );
};
