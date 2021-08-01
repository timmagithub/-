/* essential dependencies and components */
import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './components/main-view/main-view';

import './index.scss';

/* main component */
class   quikFlixApplication extends React.Component {
    render() {
        return (
            <MainView />
        );        
    }
}

/* finds root of app */
const container = document.getElementsByClassName('app-container')[0];

/* renders app in DOM root */
ReactDOM.render(React.createElement(quikFlixApplication), container);