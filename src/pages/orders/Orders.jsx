import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cart from '../../components/Cart/Cart';
import { getOrdersSelector } from '../../redux/selectors/orders';
import { productMapOrders } from '../../constants/mapProduct';

const Orders = () => {
  const navigate = useNavigate();
  const orders = useSelector(getOrdersSelector);

  const onUsersRowClick = (id) => {
    navigate(`/order?id=${id}`);
  };

  return (

    <Cart
      orders={orders}
      onRowClick={onUsersRowClick}
      product={productMapOrders(orders)}
      typeButton="remove"
    />
  );
};

export default Orders;
