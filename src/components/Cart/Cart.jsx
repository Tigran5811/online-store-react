import { useDispatch, useSelector } from 'react-redux';
import { apiUrl } from '../../constants/url';
import { getUserAccountSelector } from '../../redux/selectors/userAccount';
import { createOrderAction, removeOrdersAction } from '../../redux/actions/orders';
import { withRouter } from '../../hocs/withRouter';
import styles from './Cart.module.scss';

const Cart = ({
  onRowClick, typeButton,
  removeProduct, orders, pathname, product,
}) => {
  const user = useSelector(getUserAccountSelector);
  const dispatch = useDispatch();

  const buyProduct = async (ProductId) => {
    dispatch(createOrderAction(ProductId, user._id, user.token, pathname));
  };

  const removeOrder = async (OrderId) => {
    dispatch(removeOrdersAction(OrderId, user.token));
  };

  return (
    <div className={styles.list_container}>
      <div className={styles.container}>
        <div className={styles.container_01}>
          <div className={styles.wrap}>
            {product.map((item, index) => (
              item && (
                <div className={styles.box} key={index}>
                  <div className={styles.icon} role="button" key={index} onClick={() => onRowClick(item[0][1])}>
                    {item.map((j, i) => {
                      if (j[0] === '_id') {
                        return null;
                      }
                      if (j[0] === 'laptopImage' || j[0] === 'image') {
                        return (
                          <div key={i}>
                            <img src={`${apiUrl}${j[1].filename}`} alt="AS" />
                          </div>
                        );
                      }
                      if (j[0] === 'Price' || j[0] === 'price') {
                        return <div key={i}>{`${j[1]} ${'$'}`}</div>;
                      }

                      return <div key={i}>{j[1]}</div>;
                    })}
                  </div>
                  {typeButton && (typeButton === 'remove' ? (
                    <button onClick={() => {
                      removeOrder(orders[index]._id);
                    }}
                    >
                      {typeButton}
                    </button>
                  ) : (
                    <button onClick={() => {
                      buyProduct(item[0][1]);
                    }}
                    >
                      {typeButton}
                    </button>
                  ))}
                  {(user.role === 'SuperAdmin' && removeProduct) && (
                    <button onClick={() => {
                      removeProduct(item[0][1], item[item.length - 1][1]._id);
                    }}
                    >
                      Remove
                    </button>
                  )}
                  {orders && (
                    <button>
                      Buy product
                    </button>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Cart);

// <div>
//   {products.map((item, index) => (
//     item && (
//     <div key={index}>
//       <div role="button" key={index} onClick={() => onRowClick(product[index])}>
//         {columns.map((col, i) => {
//           if (col.Header === 'Image') {
//             return (<div key={i}><img src={`${apiUrl}${item[`col${i + 1}`]}`} alt="AS" /></div>);
//           }
//           if (col.Header === 'Price') {
//             return (<div key={i}>{`${item[`col${i + 1}`]} ${'$'}`}</div>);
//           }
//           return (<div key={i}>{item[`col${i + 1}`]}</div>);
//         })}
//       </div>
//       { typeButton === 'remove' ? (
//         <button onClick={() => {
//           removeOrder(orders[index]._id);
//         }}
//         >
//           {typeButton}
//         </button>
//       ) : (
//         <button onClick={() => {
//           buyProduct(product[index]);
//         }}
//         >
//           {typeButton}

//         </button>
//       )}
//       {user.role === 'SuperAdmin' && (
//       <button onClick={() => {
//         removeProduct(product[index], productImageId[index]);
//       }}
//       >
//         Remove
//       </button>
//       )}
//     </div>
//     )

//   ))}

// </div>
