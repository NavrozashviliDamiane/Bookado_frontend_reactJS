import axios from 'axios'

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



export const listBooks = () => async (dispatch) => {
    try {
        dispatch({ type: BOOK_LIST_REQUEST })

        const { data } = await axios.get('http://127.0.0.1:8000/api/books/')

        dispatch({
            type: BOOK_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BOOK_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}




export const listBookDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: BOOK_DETAIL_REQUEST })

        const { data } = await axios.get(`http://127.0.0.1:8000/api/books/${id}`)

        dispatch({
            type: BOOK_DETAIL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BOOK_DETAIL_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const featuredlistBooks = () => async (dispatch) => {
    try {
        dispatch({ type: FEATUREDBOOK_LIST_REQUEST })

        const { data } = await axios.get('http://127.0.0.1:8000/api/books/')

        dispatch({
            type: FEATUREDBOOK_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: FEATUREDBOOK_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}