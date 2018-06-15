import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';

import ('./fontawesome');
import ('./fa-light.js');

import App from './app';

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept();
}