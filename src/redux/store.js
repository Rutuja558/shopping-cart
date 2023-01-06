import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { cartReducer } from "./reducers/cartReducer"
import { productReducer } from "./reducers/productReducer"
import { userReducer } from "./reducers/userReducer"

const rootReducer = combineReducers({
    allUsers: userReducer,
    products: productReducer,
    cartProducts: cartReducer
})

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

export default store