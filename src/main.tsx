import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App onAvailabilitySubmit={function (availability: { [day: string]: { periods: { startHour: string; endHour: string; }[]; }; }): void {
            throw new Error('Function not implemented.');
        } } />
  </React.StrictMode>,
  document.getElementById('root')
);


