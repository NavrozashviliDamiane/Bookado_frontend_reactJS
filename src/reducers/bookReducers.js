import {
    BOOK_LIST_REQUEST,
    BOOK_LIST_SUCCESS,
    BOOK_LIST_FAIL,

    BOOK_DETAIL_REQUEST,
    BOOK_DETAIL_SUCCESS,
    BOOK_DETAIL_FAIL,

    FEATUREDBOOK_LIST_REQUEST,
    FEATUREDBOOK_LIST_SUCCESS,
    FEATUREDBOOK_LIST_FAIL,



} from '../constants/bookConstants'


export const bookListReducer = (state = { books: []}, action) => {
    switch (action.type) {
        case BOOK_LIST_REQUEST:
            return { loading: true, books: []}
        
        case BOOK_LIST_SUCCESS:
            return {loading: false, books: action.payload }
        
            case BOOK_LIST_FAIL:
                return {loading: false, error: action.payload }
        
        default:
            return state
        
    }
}




export const bookDetailReducer = (state = { book: []}, action) => {
    switch (action.type) {
        case BOOK_DETAIL_REQUEST:
            return { loading: true, ...state}
        
        case BOOK_DETAIL_SUCCESS:
            return {loading: false, book: action.payload }
        
            case BOOK_DETAIL_FAIL:
                return {loading: false, error: action.payload }
        
        default:
            return state
        
    }
}





export const featuredbookListReducer = (state = { books: []}, action) => {
    switch (action.type) {
        case FEATUREDBOOK_LIST_REQUEST:
            return { loading: true, books: []}
        
        case FEATUREDBOOK_LIST_SUCCESS:
            return {loading: false, books: action.payload }
        
            case FEATUREDBOOK_LIST_FAIL:
                return {loading: false, error: action.payload }
        
        default:
            return state
        
    }
}