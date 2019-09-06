const shoppingCartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const productToFind = state.find(
        product => product._id === action.data._id,
      )
      if (!productToFind) {
        return [...state, { ...action.data, quantity: 1 }].sort(
          (a, b) => a.price - b.price,
        )
      }
      console.log('included')
      const newState = state.filter(
        product => product._id !== productToFind._id,
      )
      return [
        ...newState,
        { ...action.data, quantity: productToFind.quantity + 1 },
      ].sort((a, b) => a.price - b.price)
    }
    case 'REMOVE_PRODUCT_FROM_CART': {
      const productToFind = state.find(product => product._id === action.data)
      if (productToFind.quantity > 1) {
        const newState = state.filter(
          product => product._id !== productToFind._id,
        )
        return [
          ...newState,
          { ...productToFind, quantity: productToFind.quantity - 1 },
        ].sort((a, b) => a.price - b.price)
      }
      const newState = state.filter(
        product => product._id !== productToFind._id,
      )
      return newState.sort((a, b) => a.price - b.price)
    }
    case 'UPDATE_PRODUCT_QUANTITY': {
      console.log(action.data)
      const newState = state.filter(product => product._id !== action.data._id)
      return [...newState, action.data].sort((a, b) => a.price - b.price)
    }
    case 'EMPTY_CART':
      return []
    default:
      return state
  }
}

export const addProductToCart = product => (dispatch) => {
  dispatch({
    type: 'ADD_PRODUCT_TO_CART',
    data: product,
  })
}

export const removeProductFromCart = product => (dispatch) => {
  dispatch({
    type: 'REMOVE_PRODUCT_FROM_CART',
    data: product,
  })
}

export const updateProductQuantity = updatedProduct => (dispatch) => {
  dispatch({
    type: 'UPDATE_PRODUCT_QUANTITY',
    data: updatedProduct,
  })
}

export const emptyShoppingCart = () => (dispatch) => {
  dispatch({
    type: 'EMPTY_CART',
  })
}
export default shoppingCartReducer
