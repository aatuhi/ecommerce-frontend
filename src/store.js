import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import productReducer from './reducers/productReducer'
import shoppingCartReducer from './reducers/shoppingCartReducer'
import loginReducer from './reducers/loginReducer'
import usersReducer from './reducers/usersReducer'
import ordersReducer from './reducers/ordersReducer'

const reducer = combineReducers({
  products: productReducer,
  shoppingCart: shoppingCartReducer,
  user: loginReducer,
  registeredUsers: usersReducer,
  allOrders: ordersReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
