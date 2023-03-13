import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import { getOfferById, getOfferRandom } from './mocks/offers';
import { getCommentRandom } from './mocks/comments';

const Setting = {
  PLACES_TO_STAY_TOTAL_COUNT: 312,
  PLACES_TO_STAY_SHOWN_COUNT: 5,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placesToStayTotalCount={Setting.PLACES_TO_STAY_TOTAL_COUNT}
      placesToStayShownCount={Setting.PLACES_TO_STAY_SHOWN_COUNT}
      getOfferById={getOfferById}
      getOfferRandom={getOfferRandom}
      getCommentRandom={getCommentRandom}
    />
  </React.StrictMode>,
);
