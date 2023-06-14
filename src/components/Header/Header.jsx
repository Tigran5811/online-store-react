import React from 'react';
import classNames from 'classnames/bind';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.scss';
import { apiUrl } from '../../constants/url';
import avatar from '../../ui-kit/assets/images/avatar.png';
import { getAside } from '../../redux/selectors/aside';
import { changeAside } from '../../redux/actions/aside';
import { getUserAccountSelector } from '../../redux/selectors/userAccount';
import { getOrdersSelector } from '../../redux/selectors/orders';
import { AccountLogOutAction } from '../../redux/actions/userAccount';
import { Input } from '../../ui-kit/components/Input/Input';
import logo from '../../../public/logo.svg';
import basket from '../../ui-kit/assets/icons/basket.svg';
import logOuts from '../../ui-kit/assets/icons/logOut.svg';
import users from '../../ui-kit/assets/icons/users.svg';
import login from '../../ui-kit/assets/icons/login.svg';

const cx = classNames.bind(styles);

export const Header = () => {
  const user = useSelector(getUserAccountSelector);
  const isOpenAside = useSelector(getAside);
  const order = useSelector(getOrdersSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(AccountLogOutAction());
    navigate('/login');
  };

  const openAside = () => {
    dispatch(changeAside(isOpenAside));
  };

  return (
    <div className={cx('container')}>
      <div>
        <NavLink to="/">
          <img src={logo} alt="" />

        </NavLink>
        <button onClick={openAside} type="button">products</button>
      </div>
      <div>
        <Input type="text" placeholder="Search..." />
        {!user.token && (
          <NavLink to="/login">
            <img src={login} alt="" />
          </NavLink>
        )}
        {user.role === 'SuperAdmin' && (
          <NavLink to="/users">
            <img src={users} alt="" />
          </NavLink>
        )}
      </div>
      <div>
        {user.token && (
          <NavLink type="button" onClick={logOut} className={styles.basket} to="/login">
            <img src={logOuts} alt="" />
          </NavLink>
        )}
        <div>
          {
            user.token && (
              <>
                <NavLink className={styles.basket} to="/orders">
                  <p>{order.length}</p>
                  <img src={basket} alt="" />
                </NavLink>
                <NavLink to={`/user?id=${user._id}`}>
                  <img className={cx('account_img')} src={user.image ? `${apiUrl}${user.image.filename}` : avatar} alt="A" />
                </NavLink>

              </>
            )
          }
        </div>
      </div>

    </div>
  );
};
