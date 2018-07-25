import {createStore, applyMiddleware, compose} from 'redux';
import modules from './modules';
import ReduxThunk from 'redux-thunk';

const isDevelopment = process.env.NODE_ENV === 'development';

const composeEnhancers = isDevelopment ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

const configureStore = (initialState) => {
    const store = createStore(modules, initialState, composeEnhancers(applyMiddleware(ReduxThunk)));

    if(module.hot){
        module.hot.accept('./modules', () => {
            const nextRootReducer = require('./modules').default;
            store.replaceReducers(nextRootReducer);
        });
    }

    return store;
};

export default configureStore;