import { ADD_TO_CART_FAIL, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, GET_CART_PRODUCTS_OF_LOGIN_USER_FAIL, GET_CART_PRODUCTS_OF_LOGIN_USER_REQUEST, GET_CART_PRODUCTS_OF_LOGIN_USER_SUCCESS, REMOVE_FROM_CART_FAIL, REMOVE_FROM_CART_REQUEST, REMOVE_FROM_CART_SUCCESS } from "../constants/cartConstant"

export const cartReducer = (state = { cartProducts: [], myCart: [] }, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART_REQUEST: return { ...state, added: false }
        case ADD_TO_CART_SUCCESS: return { ...state, added: true }
        case ADD_TO_CART_FAIL: return { ...state }

        case GET_CART_PRODUCTS_OF_LOGIN_USER_REQUEST: return { ...state, }
        case GET_CART_PRODUCTS_OF_LOGIN_USER_SUCCESS: return { ...state, myCart: payload }
        case GET_CART_PRODUCTS_OF_LOGIN_USER_FAIL: return { ...state }

        case REMOVE_FROM_CART_REQUEST: return { ...state, deleted: false }
        case REMOVE_FROM_CART_SUCCESS: return { ...state, deleted: true }
        case REMOVE_FROM_CART_FAIL: return { ...state }

        default: return state
    }
}