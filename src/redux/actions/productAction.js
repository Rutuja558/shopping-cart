import axios from "axios";
import { GET_ALL_PRODUCTS_FAIL, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS } from "../constants/productConstants";

export const getAllProducts = () => async dispatch => {
    try {
        dispatch({ type: GET_ALL_PRODUCTS_REQUEST })
        const { data } = await axios.post("http://3.7.252.58:4001/product/getAllProduct")
        dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_ALL_PRODUCTS_FAIL, payload: error.message })
    }
}