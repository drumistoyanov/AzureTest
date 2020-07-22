import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Components/store/reducers/rootReducer';
import thunk from 'redux-thunk';
import '../node_modules/font-awesome/css/font-awesome.css';
 

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
 
serviceWorker.register();