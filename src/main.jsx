import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './reset.scss';
import './icon.scss';
import { persistor, store } from './redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
