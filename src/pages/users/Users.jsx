import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMapUser, getMapUsers } from './utils';
import { Table } from '../../components/Table/Table';
import { usersColumns } from './constant';
import { getUsersSelector } from '../../redux/selectors/users';
import { getUsersAction } from '../../redux/actions/users';
import { getUserAccountSelector } from '../../redux/selectors/userAccount';

const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { role, token } = useSelector(getUserAccountSelector);
  const users = useSelector(getUsersSelector);

  useEffect(() => {
    dispatch(getUsersAction(token));
    if (role !== 'SuperAdmin') {
      navigate('/');
    }
  }, []);

  const onUsersRowClick = (id) => {
    navigate(`/user?id=${id}`);
  };

  return (

    <Table
      usersData={getMapUsers(users)}
      userData={getMapUser(users)}
      columns={usersColumns}
      onRowClick={onUsersRowClick}
    />

  );
};

export default Users;
