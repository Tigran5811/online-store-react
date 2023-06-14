import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { VerifyEmailAction } from '../../redux/actions/user';

const VerifyEmail = () => {
  const [token, setToken] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChange = (e) => {
    setToken(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(VerifyEmailAction({ token }));

    return navigate('/login');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={token} onChange={onChange} placeholder="Token" type="text" name="token" />
        <button disabled={!token} type="submit">Authorization</button>
      </form>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default VerifyEmail;
