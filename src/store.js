import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { bookListReducer, bookDetailReducer, featuredbookListReducer } from './reducers/bookReducers'

const reducer = combineReducers({
    booklist: bookListReducer,
    bookDetail: bookDetailReducer,
    featuredbooklist: featuredbookListReducer,
})


const initialState = {}

const middleware = [thunk]


const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))


export default store