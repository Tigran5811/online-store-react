import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLaptopsSelector } from '../../redux/selectors/laptops';
import { getDisplaysSelector } from '../../redux/selectors/displays';
import Cart from '../../components/Cart/Cart';
import { productMap } from '../../constants/mapProduct';

const Home = () => {
  const laptop = useSelector(getLaptopsSelector);
  const display = useSelector(getDisplaysSelector);
  const navigate = useNavigate();

  const onUsersRowClick = (id) => {
    navigate(`/laptop?id=${id}`);
  };
  return (

    <Cart
      onRowClick={onUsersRowClick}
      product={productMap([...laptop, ...display])}
      typeButton="Add basket"
    />
  );
};

export default Home;
