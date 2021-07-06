import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './app.css';
import '@fortawesome/fontawesome-free/js/all.js';
import SimpleHabit from './components/simpleHabit';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <SimpleHabit />
  </React.StrictMode>,
  document.getElementById('root')
);

