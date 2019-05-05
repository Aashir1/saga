import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { CounterReducer } from "./Reducer";
import { watchAsyncIncrement } from "./sagas/saga";

let sagaMiddleware = createSagaMiddleware();

let reducers = combineReducers({CounterReducer});
let store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAsyncIncrement);

export default store;
