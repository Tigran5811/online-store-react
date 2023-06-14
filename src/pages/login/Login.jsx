import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signinUser } from '../../redux/actions/user';
import { getUserAccountSelector } from '../../redux/selectors/userAccount';
import { Input } from '../../ui-kit/components/Input/Input';
import styles from './Login.module.scss';
import { Button } from '../../ui-kit/components/Button/Button';
import { Link } from '../../ui-kit/components/Link/Link';

const Login = () => {
  const [{ email, password }, setState] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(getUserAccountSelector);

  useEffect(() => {
    if (user.token) {
      navigate('/');
    }
  }, []);

  const onChange = ({ currentTarget: { value, name } }) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(signinUser(email, password));
    if (user) {
      return navigate('/');
    }
    return navigate('/login');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={(event) => {
        onSubmit(event);
      }}
      >
        <Input value={email} onChange={onChange} placeholder="Email..." type="text" name="email" />
        <Input value={password} onChange={onChange} placeholder="Password..." type="text" name="password" />
        <Button size="large" disabled={!email || !password} type="submit" text="Sign In" />
        <Link to="/register" text="Register" size="large" />
      </form>

    </div>
  );
};

export default Login;
