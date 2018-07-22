import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './client/Root';
import {AppContainer} from 'react-hot-loader';
import registerServiceWorker from './registerServiceWorker';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
};

render(Root);

if(module.hot) module.hot.accept('./client/Root', () => {render(Root)});

registerServiceWorker();
