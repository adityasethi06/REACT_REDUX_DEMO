import {combineReducers} from 'redux'
import { cakeReducer } from './cake/cakeReducer'

export const rootReducer = combineReducers({
    cake: cakeReducer
})