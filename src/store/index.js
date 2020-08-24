import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import hostReducer from '../reducers/hostReducer'

export const store = createStore(hostReducer, applyMiddleware(thunk))
