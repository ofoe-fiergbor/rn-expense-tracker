import {combineReducers} from 'redux';
import addExpTransactionReducer from './addExpTransactionReducer';
import addIncomeReducer from './addIncomeReducer'

export default combineReducers({
    addExpTransactionReducer,
    addIncomeReducer
})