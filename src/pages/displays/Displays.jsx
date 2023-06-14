import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../../components/Cart/Cart';
import { Input } from '../../ui-kit/components/Input/Input';
import styles from './Displays.module.scss';
import { getUserAccountSelector } from '../../redux/selectors/userAccount';
import { productMap } from '../../constants/mapProduct';
import { deleteDisplaysAction, getDisplaysAction } from '../../redux/actions/displays';
import { getDisplaysSelector } from '../../redux/selectors/displays';
import { createImageAction } from '../../redux/actions/image';
import { createDisplayAction } from '../../redux/actions/display';

const cx = classNames.bind(styles);

const Displays = () => {
  const [file, setFile] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const { role, token } = useSelector(getUserAccountSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const displays = useSelector(getDisplaysSelector);
  const [{
    name, brand, color, inch, price,
  }, setStat] = useState({
    name: '',
    brand: '',
    color: '',
    inch: '',
    Price: '',
  });

  useEffect(() => {
    dispatch(getDisplaysAction(token));
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
    if (name !== undefined) {
      const id = await dispatch(createImageAction(file));
      const data = {
        name, brand, color, inch, price, image: id,
      };
      dispatch(createDisplayAction(data, token));
    }
    window.location.reload();
  };

  const onUsersRowClick = (id) => {
    navigate(`/display?id=${id}`);
  };

  const addProduct = () => {
    setIsOpen(!isOpen);
  };

  const removeProduct = (id, idImage) => {
    dispatch(deleteDisplaysAction(id, token, idImage));
  };

  return (
    <div>
      {role === 'SuperAdmin' && <button onClick={addProduct}>Add</button>}
      <form onSubmit={onSubmit} className={cx('addProduct', { open: isOpen })}>
        <Input onChange={onChange} value={name} name="name" placeholder="Name" type="text" />
        <Input onChange={onChange} value={brand} name="brand" placeholder="Brand" type="text" />
        <Input onChange={onChange} value={color} name="color" placeholder="Color" type="text" />
        <Input onChange={onChange} value={inch} name="inch" placeholder="Inch" type="number" />
        <Input onChange={onChange} value={price} name="price" placeholder="Price" type="number" />
        <input onChange={onChangeImage} name="image" type="file" />
        <button disabled={(!name || !brand) || (!color || !inch) || (!price || !file)} type="submit">Create</button>
      </form>
      <Cart
        onRowClick={onUsersRowClick}
        product={productMap(displays)}
        typeButton="Add basket"
        removeProduct={removeProduct}
      />
    </div>
  );
};

export default Displays;
