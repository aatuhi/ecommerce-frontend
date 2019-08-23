const shoppingCartReducer = (state = [], action) => {
  console.log('shoppingCartReducer action', action)
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return [...state, action.data]
    case 'EMPTY_CART':
      return []
    default:
      return state
  }
}

export const emptyShoppingCart = () => (dispatch) => {
  dispatch({
    type: 'EMPTY_CART',
  })
}

export const addProductToCart = product => (dispatch) => {
  window.localStorage.setItem('shoppingCart', product)
  dispatch({
    type: 'ADD_PRODUCT_TO_CART',
    data: product,
  })
}

export default shoppingCartReducer
