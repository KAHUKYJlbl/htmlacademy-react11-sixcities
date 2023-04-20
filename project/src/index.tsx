import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './components/app/app';
import { store } from './store/store';
import { checkAuthStatus } from './store/user/api-actions';

store.dispatch(checkAuthStatus());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
      <App />
    </Provider>
  </React.StrictMode>,
);
