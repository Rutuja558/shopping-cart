import {
    USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS
    , USER_LOGIN_FAIL,
    USER_LOGOUT
} from "../constants/userConstants"
import axios from 'axios'

export const handleAddUsers = values => async dispatch => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST })
        const { data } = await axios.post("http://localhost:5000/users", values)
        dispatch({ type: USER_REGISTER_SUCCESS })
    } catch (error) {
        console.log(error);
        dispatch({ type: USER_REGISTER_FAIL, payload: error.message })

    }
}

export const handleLoginAction = ({ email, password }) => async dispatch => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        const { data } = await axios.get("http://localhost:5000/users")
        const result = data.find(item => item.email === email && item.password === password)

        if (!result) {
            dispatch({ type: USER_LOGIN_FAIL, payload: "email password wrong" })
        } else {
            dispatch({ type: USER_LOGIN_SUCCESS, payload: result })
        }
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload: error.message })

    }
}

export const handleLogoutAction = () => dispatch => dispatch({ type: USER_LOGOUT })