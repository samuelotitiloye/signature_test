import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sign'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './component/reducers/signReducer';



const sagaMiddleware = createSagaMiddleware();

const middleware = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
)

console.log(middleware);
console.log(store)

sagaMiddleware.run(rootSaga);



ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));
// registerServiceWorker();





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// export default App;

