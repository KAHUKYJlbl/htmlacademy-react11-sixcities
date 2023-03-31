import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/app/app';
import { store } from './store/store';

import { offers } from './mocks/offers';
import { comments } from './mocks/comments';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        comments={comments}
      />
    </Provider>
  </React.StrictMode>,
);
