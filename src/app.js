import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import HomeComponent from './components/home-component/home-component';

const App = () => (
    <BrowserRouter>
        <Route component={HomeComponent} />
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept();
}