import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import { getOfferById, offers } from './mocks/offers';
import { comments } from './mocks/comments';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      getOfferById={getOfferById}
      offers={offers}
      comments={comments}
    />
  </React.StrictMode>,
);
