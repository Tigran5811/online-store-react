import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';
import Users from '../../pages/users/Users';
import VerifyEmailUser from '../../pages/verify-email/Verify-email';
import { PrivateRoute } from '../../routes/PrivateRoute';
import { PublicRoute } from '../../routes/PublicRoute';
import Home from '../../pages/home/Home';
import { withDialog } from '../../hocs/withDialog';
import { Header } from '../Header/Header';
import { Aside } from '../Aside/Aside';
import styles from './AppLayout.module.scss';
import Laptop from '../../pages/laptop/Laptop';
import Laptops from '../../pages/laptops/Laptops';
import Display from '../../pages/display/Display';
import Displays from '../../pages/displays/Displays';
import Orders from '../../pages/orders/Orders';
import { changeAside } from '../../redux/actions/aside';
import User from '../../pages/user/User';
import { Footer } from '../Footer/Footer';

const cx = classNames.bind(styles);

const AppLayout = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(changeAside(true));
  }, [location]);

  return (
    <div className={cx('box')}>
      <div className={styles.container}>
        <Header />
        <main>
          <div className={styles.container_scroll}>
            <div className={styles.view}>
              <Aside />
              <Routes>
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
                <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
                <Route path="/user" element={<PrivateRoute><User /></PrivateRoute>} />
                <Route path="/verify-email" element={<PublicRoute><VerifyEmailUser /></PublicRoute>} />
                <Route path="/laptops" element={<Laptops />} />
                <Route path="/laptop" element={<Laptop />} />
                <Route path="/displays" element={<Displays />} />
                <Route path="/display" element={<Display />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </div>
            <Footer />
          </div>

        </main>
      </div>

    </div>
  );
};
export default withDialog(AppLayout);

// const dispatch = useDispatch();

// useEffect(() => {
//   const token = localStorage.getItem('token');
//   const id = localStorage.getItem('id');
//   if (id) {
//     dispatch(getUserAccountAction(token, id));
//   }
// });
