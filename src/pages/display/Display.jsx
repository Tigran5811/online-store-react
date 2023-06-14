import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from '../../hocs/withRouter';
import styles from './Display.module.scss';
import { apiUrl } from '../../constants/url';
import { getUserAccountSelector } from '../../redux/selectors/userAccount';
import { createOrderAction } from '../../redux/actions/orders';
import { getDisplaySelector } from '../../redux/selectors/display';
import { getDisplayAction } from '../../redux/actions/display';

const Display = ({ searchParams, pathname }) => {
  const { id } = searchParams;
  const dispatch = useDispatch();
  const user = useSelector(getUserAccountSelector);
  const display = useSelector(getDisplaySelector);

  useEffect(() => {
    dispatch(getDisplayAction(user.token, id));
  }, []);

  const buyProduct = async () => {
    dispatch(createOrderAction(id, user._id, user.token, pathname));
  };

  return (
    <div className={styles.box}>
      <img src={`${apiUrl}${display?.image?.filename}`} alt="" />
      <h1>{display.name}</h1>
      <h1>{display.brand}</h1>
      <h1>{display.color}</h1>
      <h1>{display.inch}</h1>
      <h1>{`${display.price} $`}</h1>
      <button onClick={buyProduct}>Add basket</button>
    </div>
  );
};

export default withRouter(Display);
