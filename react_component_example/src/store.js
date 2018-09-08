import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

let initialState = {

}

export default createStore(
    reducer,
    initialState,
    applyMiddleware(thunkMiddleware)
);;
