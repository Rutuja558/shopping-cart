import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from '../constants/userConstants'

export const userReducer = (state = { users: [] }, { type, payload }) => {
    switch (type) {
        case USER_REGISTER_REQUEST: return { loading: true }
        case USER_REGISTER_SUCCESS: return { loading: false, register: true }
        case USER_REGISTER_FAIL: return { loading: false, error: payload }

        case USER_LOGIN_REQUEST: return { loading: true }
        case USER_LOGIN_SUCCESS: return { loading: false, login: payload }
        case USER_LOGIN_FAIL: return { loading: false, error: payload }

        case USER_LOGOUT: return {}

        default: return state
    }
}