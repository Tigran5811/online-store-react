import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../../components/Cart/Cart';
import { Input } from '../../ui-kit/components/Input/Input';
import styles from './Laptop.module.scss';
import { deleteLaptopsAction, getLaptopsAction } from '../../redux/actions/laptops';
import { getLaptopsSelector } from '../../redux/selectors/laptops';
import { getUserAccountSelector } from '../../redux/selectors/userAccount';
import { productMap } from '../../constants/mapProduct';
import { createImageAction } from '../../redux/actions/image';
import { createLaptopAction } from '../../redux/actions/laptop';

const cx = classNames.bind(styles);

const Laptops = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState();
  const { role, token } = useSelector(getUserAccountSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const laptops = useSelector(getLaptopsSelector);
  const [{
    Manufacturer, SSD, Resolution, Diagonal, Price,
  }, setStat] = useState({
    Manufacturer: '',
    SSD: '',
    Resolution: '',
    Diagonal: '',
    Price: '',

  });
  useEffect(() => {
    dispatch(getLaptopsAction(token));
  }, []);

  const onChange = ({ currentTarget: { value, name } }) => {
    setStat((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeImage = (e) => {
    e.preventDefault();
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setFile(file);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (Manufacturer !== undefined) {
      const id = await dispatch(createImageAction(file));
      const data = {
        Manufacturer, SSD, Resolution, Diagonal, Price, laptopImage: id,
      };
      dispatch(createLaptopAction(data, token));
    }
    window.location.reload();
  };

  const onUsersRowClick = (id) => {
    navigate(`/laptop?id=${id}`);
  };

  const addProduct = () => {
    setIsOpen(!isOpen);
  };

  const removeProduct = (id, idImage) => {
    dispatch(deleteLaptopsAction(id, token, idImage));
  };

  return (
    <div className={styles.container}>

      {role === 'SuperAdmin' && <div><button onClick={addProduct}>Add</button></div>}
      <form onSubmit={onSubmit} className={cx('addProduct', { open: isOpen })}>
        <Input onChange={onChange} value={Manufacturer} name="Manufacturer" placeholder="Manufacturer" type="text" />
        <Input onChange={onChange} value={SSD} name="SSD" placeholder="SSD" type="text" />
        <Input onChange={onChange} value={Resolution} name="Resolution" placeholder="Resolution" type="text" />
        <Input onChange={onChange} value={Diagonal} name="Diagonal" placeholder="Diagonal" type="number" />
        <Input onChange={onChange} value={Price} name="Price" placeholder="Price" type="number" />
        <input onChange={onChangeImage} name="image" type="file" />
        <button disabled={(!Manufacturer || !SSD) || (!Resolution || !Diagonal) || (!Price || !file)} type="submit">Register</button>
      </form>
      <Cart
        onRowClick={onUsersRowClick}
        product={productMap(laptops)}
        typeButton="Add basket"
        removeProduct={removeProduct}
      />
    </div>
  );
};
export default Laptops;
