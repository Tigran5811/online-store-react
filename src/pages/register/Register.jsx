import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpUserAction } from '../../redux/actions/user';
import styles from './Register.module.scss';
import { Input } from '../../ui-kit/components/Input/Input';
import { Link } from '../../ui-kit/components/Link/Link';
import { Button } from '../../ui-kit/components/Button/Button';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [{
    username, password, firstName, lastName, age, email,
  }, setStat] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    age: '',
    email: '',
  });

  const onChange = ({ currentTarget: { value, name } }) => {
    setStat((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUpUserAction({
      username, password, firstName, lastName, age, email,
    }));
    return navigate('/verify-email');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <Input value={username} onChange={onChange} placeholder="User Name" type="text" name="username" />
        <Input value={password} onChange={onChange} placeholder="Password" type="text" name="password" />
        <Input value={firstName} onChange={onChange} placeholder="First Name" type="text" name="firstName" />
        <Input value={lastName} onChange={onChange} placeholder="Last Name" type="text" name="lastName" />
        <Input value={age} onChange={onChange} placeholder="Age" type="text" name="age" />
        <Input value={email} onChange={onChange} placeholder="Email" type="text" name="email" />
        <Button size="large" disabled={(!username || !password) || (!firstName || !lastName) || (!age || !email)} type="submit" text="Register" />
        <Link to="/login" text="Log In" size="large" />

      </form>
    </div>
  );
};

export default Register;
