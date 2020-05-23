import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { requestRobots, searchRobots } from './reducers'
import App from './containers/App';

const logger = createLogger();
const rootReducers = combineReducers({requestRobots, searchRobots});
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>
,document.getElementById('root'));

serviceWorker.register();