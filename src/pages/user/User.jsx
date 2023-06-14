import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../ui-kit/assets/images/avatar.png';
import { withRouter } from '../../hocs/withRouter';
import styles from './User.module.scss';
import { getUserSelector } from '../../redux/selectors/user';
import { getUserAction, updateUserAction } from '../../redux/actions/user';
import { apiUrl } from '../../constants/url';
import { getUserAccountSelector } from '../../redux/selectors/userAccount';
import { createImageAction } from '../../redux/actions/image';

const User = ({ searchParams }) => {
  const [file, setFile] = useState();
  const navigate = useNavigate();
  const user = useSelector(getUserSelector);
  const { id } = searchParams;
  const dispatch = useDispatch();
  const { _id, token } = useSelector(getUserAccountSelector);

  useEffect(() => {
    dispatch(getUserAction(token, id));
    if (!token) {
      navigate('/login');
    }
  }, [id]);

  const onChange = (e) => {
    e.preventDefault();
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setFile(file);
    }
  };
  const handleUploadClick = async (e) => {
    e.preventDefault();
    if (file.name !== undefined) {
      const id = await dispatch(createImageAction(file));
      const data = {
        image: id,
      };
      dispatch(updateUserAction(_id, data));
    }
  };

  return (
    <div>
      <img className={styles.img} src={user.image ? `${apiUrl}${user.image.filename}` : avatar} alt="A" />
      <h2>{user?.username}</h2>
      <h2>{user?.firstName}</h2>
      <h2>{user?.lastName}</h2>
      <h2>{user?.age}</h2>
      <h2>{user?.email}</h2>

      <form onSubmit={handleUploadClick}>
        <input name="image" onChange={onChange} type="file" />
        <button>send</button>
      </form>
    </div>
  );
};

export default withRouter(User);
