import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const enum Setting {
  PlacesToStayTotalCount = 312,
  PlacesToStayShownCount = 9,
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App PlacesToStayTotalCount={Setting.PlacesToStayTotalCount} PlacesToStayShownCount={Setting.PlacesToStayShownCount} />
  </React.StrictMode>,
);