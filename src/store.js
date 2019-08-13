import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import productReducer from './reducers/productReducer'
import shoppingCartReducer from './reducers/shoppingCartReducer'
import loginReducer from './reducers/loginReducer'

const reducer = combineReducers({
  products: productReducer,
  shoppingCart: shoppingCartReducer,
  user: loginReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
