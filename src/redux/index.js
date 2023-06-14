import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import usersReducer from './reducers/users';
import userReducer from './reducers/user';
import imageReducer from './reducers/userImage';
import imagesReducer from './reducers/userImages';
import authReducer from './reducers/auth';
import asideReducer from './reducers/aside';
import userAccountReducer from './reducers/userAccount';
import laptopsReducer from './reducers/laptops';
import laptopReducer from './reducers/laptop';
import displaysReducer from './reducers/displays';
import displayReducer from './reducers/display';
import ordersReducer from './reducers/orders';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  image: imageReducer,
  images: imagesReducer,
  auth: authReducer,
  aside: asideReducer,
  userAccount: userAccountReducer,
  laptops: laptopsReducer,
  laptop: laptopReducer,
  displays: displaysReducer,
  display: displayReducer,
  orders: ordersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: combineReducers({
//     users: usersReducer,
//     user: userReducer,
//     image: imageReducer,
//     images: imagesReducer,
//     auth: authReducer,
//     aside: asideReducer,
//     userAccount: userAccountReducer,
//     laptops: laptopsReducer,
//     laptop: laptopReducer,
//     orders: ordersReducer,

//   }),

// });
