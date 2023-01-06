import axios from "axios";
import { ADD_TO_CART_FAIL, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, GET_CART_PRODUCTS_OF_LOGIN_USER_FAIL, GET_CART_PRODUCTS_OF_LOGIN_USER_REQUEST, GET_CART_PRODUCTS_OF_LOGIN_USER_SUCCESS, REMOVE_FROM_CART_FAIL, REMOVE_FROM_CART_REQUEST, REMOVE_FROM_CART_SUCCESS } from "../constants/cartConstant";

export const addToCart = product => async dispatch => {
    try {
        dispatch({ type: ADD_TO_CART_REQUEST })
        const { data } = await axios.post("http://localhost:5000/cartProducts", product)
        dispatch({ type: ADD_TO_CART_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADD_TO_CART_FAIL, payload: error.message })
    }
}

export const getCartProductsOfUser = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_CART_PRODUCTS_OF_LOGIN_USER_REQUEST })
        const { allUsers: { login: { id } } } = getState()
        const { data } = await axios.get("http://localhost:5000/cartProducts")
        const cartProducts = data.filter(item => item.userId === id)
        dispatch({ type: GET_CART_PRODUCTS_OF_LOGIN_USER_SUCCESS, payload: cartProducts })
    } catch (error) {
        dispatch({ type: GET_CART_PRODUCTS_OF_LOGIN_USER_FAIL, payload: error.message })
    }
}

export const removeFromCart = id => async dispatch => {
    try {
        dispatch({ type: REMOVE_FROM_CART_REQUEST })
        await axios.delete(`http://localhost:5000/cartProducts/${id}`)
        dispatch({ type: REMOVE_FROM_CART_SUCCESS })
    } catch (error) {
        dispatch({ type: REMOVE_FROM_CART_FAIL, payload: error.message })
    }
}