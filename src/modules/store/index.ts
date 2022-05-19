import {createStore, compose, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(reducer, initialState = {}) {
  const middleware = [logger, sagaMiddleware]

  const enhancer = process.env.NODE_ENV === "production" ? compose(applyMiddleware(...middleware))
    : composeWithDevTools(applyMiddleware(...middleware)); 
  
  const store = createStore(reducer, initialState, enhancer);
  
  sagaMiddleware.run(rootSaga);

  return store;  
}