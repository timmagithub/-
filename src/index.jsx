/* essential dependencies and components */
import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { createStore }  from 'redux';
import { Provider } from 'react-redux';
import moviesApp from './reducers/reducers';

import MainView from './components/main-view/main-view';

import './index.scss';

const store = createStore(moviesApp, devToolsEnhancer());

/* main component */
class quikFlixApplication extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container>
                    <MainView />
                </Container>
            </Provider>
        );        
    }
}

/* finds root of app */
const container = document.getElementsByClassName('app-container')[0];

/* renders app in DOM root */
ReactDOM.render(React.createElement(quikFlixApplication), container);