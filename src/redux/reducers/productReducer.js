import { GET_ALL_PRODUCTS_FAIL, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS } from "../constants/productConstants"

export const productReducer = (state = { Products: [] }, { type, payload }) => {
    switch (type) {
        case GET_ALL_PRODUCTS_REQUEST: return { ...state, loading: true }
        case GET_ALL_PRODUCTS_SUCCESS: return { ...state, loading: false, Products: payload }
        case GET_ALL_PRODUCTS_FAIL: return { ...state, loading: false }

        default: return state
    }
}