import { getMapProduct, getMapProducts, getMapProductsImageId } from '../../constants/mapProduct';

export const getMapOrders = (order) => order?.map((item) => {
  if (item.laptop) {
    return getMapProducts([item.laptop])[0];
  }
  if (item.display) {
    return getMapProducts([item.display])[0];
  }
  return undefined;
});

export const getMapOrdersId = (order) => order?.map((item) => {
  if (item.laptop) {
    return getMapProduct([item.laptop])[0];
  }
  if (item.display) {
    return getMapProduct([item.display])[0];
  }
  return undefined;
});

export const getMapOrdersProductId = (order) => order?.map((item) => {
  if (item.display) {
    return getMapProductsImageId([item.display])[0];
  }
  if (item.laptop) {
    return getMapProductsImageId([item.laptop])[0];
  }
  return undefined;
});
