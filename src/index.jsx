import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

class   quikFlixApplication extends React.Component {
    render() {
        return (
        <div className='quikFlix'>
            <div> Good Morning</div>
        </div>
        );        
    }
}

const container = document.getElementsByClassName('app-container')[0];

ReactDOM.render(React.createElement(quikFlixApplication), container);