import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //Load function App từ App.js
import * as serviceWorker from './serviceworker';

ReactDOM.render(<App />, document.getElementById('root')); //render noi dung function App toi id root

serviceWorker.unregister();