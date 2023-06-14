import React from 'react';
import styles from './Nav.module.scss';
import { Link } from '../../../ui-kit/components/Link/Link';
import laptop from '../../../ui-kit/assets/icons/laptop.svg';
import keyboard from '../../../ui-kit/assets/icons/keyboard.svg';
import mouse from '../../../ui-kit/assets/icons/mouse.svg';
import monitor from '../../../ui-kit/assets/icons/monitor.svg';
import processor from '../../../ui-kit/assets/icons/processor.svg';
import ram from '../../../ui-kit/assets/icons/ram.svg';

export const Nav = () => (
  <nav className={styles.nav}>
    <div>
      <img src={laptop} alt="" />

      <Link
        size="large"
        text="Laptop"
        to="/laptops"
      />
    </div>
    <div>
      <img src={monitor} alt="" />

      <Link
        size="large"
        text="Display"
        to="/displays"
      />
    </div>
    <div>
      <img src={keyboard} alt="" />

      <Link
        size="large"
        text="Keyboard"
        to="/keyboard"
      />
    </div>
    <div>
      <img src={mouse} alt="" />

      <Link
        size="large"
        text="Mouse"
        to="/mouse"
      />
    </div>
    <div>
      <img src={processor} alt="" />

      <Link
        size="large"
        text="Processor"
        to="/processor"
      />
    </div>
    <div>
      <img src={ram} alt="" />

      <Link
        size="large"
        text="Ram"
        to="/ram"
      />
    </div>

  </nav>
);
