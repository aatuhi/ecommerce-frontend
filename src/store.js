import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import productReducer from './reducers/productReducer'
import shoppingCartReducer from './reducers/shoppingCartReducer'

const reducer = combineReducers({
  products: productReducer,
  shoppingCart: shoppingCartReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
