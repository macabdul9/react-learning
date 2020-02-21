import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';


const root = combineReducers({
    ctr:counterReducer,
    res:resultReducer
})

const store = createStore(root);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
