import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from '../../hocs/withRouter';
import styles from './Laptop.module.scss';
import { apiUrl } from '../../constants/url';
import { getLaptopAction } from '../../redux/actions/laptop';
import { getLaptopSelector } from '../../redux/selectors/laptop';
import { getUserAccountSelector } from '../../redux/selectors/userAccount';
import { createOrderAction } from '../../redux/actions/orders';

const Laptop = ({ searchParams, pathname }) => {
  const { id } = searchParams;
  const dispatch = useDispatch();
  const user = useSelector(getUserAccountSelector);
  const laptop = useSelector(getLaptopSelector);

  useEffect(() => {
    dispatch(getLaptopAction(user.token, id));
  }, []);

  const buyProduct = async () => {
    dispatch(createOrderAction(id, user._id, user.token, pathname));
  };

  return (
    <div className={styles.box}>
      <img src={`${apiUrl}${laptop?.laptopImage?.filename}`} alt="" />
      <h1>{laptop.Manufacturer}</h1>
      <h1>{laptop.SSD}</h1>
      <h1>{laptop.Resolution}</h1>
      <h1>{laptop.Diagonal}</h1>
      <h1>{`${laptop.Price} $`}</h1>
      <button onClick={buyProduct}>Add basket</button>
    </div>
  );
};

export default withRouter(Laptop);
