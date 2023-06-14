import classNames from 'classnames/bind';
import React, { useState } from 'react';
import styles from './CreateProductDialog.module.scss';

import { Button } from '../../../ui-kit/components/Button/Button';
import Dialog from '../../../ui-kit/components/Dialog/Dialog';

const cx = classNames.bind(styles);

export const CounterDialog = () => {
  const [count, setCount] = useState(0);

  const handleAddition = () => {
    setCount(count + 1);
  };

  const handleDeduction = () => {
    setCount(count - 1);
  };

  return (
    <Dialog isOpen>
      <div className={cx('btn_cont')}>
        <Button onClick={handleAddition} type="button" text="addition" />
        <Button onClick={handleDeduction} type="button" text="deduction" />
      </div>
      <h1 className={cx('h1')}>{count}</h1>
    </Dialog>
  );
};
