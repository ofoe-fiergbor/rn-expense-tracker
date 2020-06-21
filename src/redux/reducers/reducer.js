import {combineReducers} from 'redux';
import addTransactionReducer from './addTransationReducer';

export default combineReducers({
    addTransaction: addTransactionReducer
})