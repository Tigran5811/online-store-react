export const productMap = (product) => product?.map((item) => Object.entries(item));

export const productMapOrders = (product) => product?.map((item) => Object.entries(
  Object.values(item)[2],
).filter((i) => i[0] !== 'createdAt' && i[0] !== 'updatedAt' && i[0] !== '__v'));
