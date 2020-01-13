const cart = JSON.parse(window.localStorage.getItem("cart"))

const shoppingCartReducer = (state = cart || [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      const productToFind = state.find(
        product => product._id === action.data._id
      )
      if (!productToFind) {
        const newState = [...state, { ...action.data, quantity: 1 }].sort(
          (a, b) => a.price - b.price
        )
        window.localStorage.setItem("cart", JSON.stringify(newState))
        return newState
      }
      console.log("included")
      const stateWithoutProduct = state.filter(
        product => product._id !== productToFind._id
      )
      const newState = [
        ...stateWithoutProduct,
        { ...action.data, quantity: productToFind.quantity + 1 }
      ].sort((a, b) => a.price - b.price)
      window.localStorage.setItem("cart", JSON.stringify(newState))
      return newState
    }
    case "REMOVE_PRODUCT_FROM_CART": {
      const productToFind = state.find(product => product._id === action.data)
      if (productToFind.quantity > 1) {
        const stateWithoutProduct = state.filter(
          product => product._id !== productToFind._id
        )
        const newState = [
          ...stateWithoutProduct,
          { ...productToFind, quantity: productToFind.quantity - 1 }
        ].sort((a, b) => a.price - b.price)
        window.localStorage.setItem("cart", JSON.stringify(newState))
        return newState
      }
      const newState = state
        .filter(product => product._id !== productToFind._id)
        .sort((a, b) => a.price - b.price)
      window.localStorage.setItem("cart", JSON.stringify(newState))
      return newState
    }
    case "UPDATE_PRODUCT_QUANTITY": {
      console.log(action.data)
      const stateWithoutProduct = state.filter(
        product => product._id !== action.data._id
      )
      if (action.data.quantity < 1) {
        return [...stateWithoutProduct].sort(
          (a, b) => a.price - b.price
        )
      }
      const newState = [...stateWithoutProduct, action.data].sort(
        (a, b) => a.price - b.price
      )
      window.localStorage.setItem("cart", JSON.stringify(newState))
      return newState
    }
    case "EMPTY_CART": {
      const newState = []
      window.localStorage.setItem("cart", JSON.stringify(newState))
      return newState
    }
    default:
      return state
  }
}

export const addProductToCart = product => dispatch => {
  dispatch({
    type: "ADD_PRODUCT_TO_CART",
    data: product
  })
}

export const removeProductFromCart = product => dispatch => {
  dispatch({
    type: "REMOVE_PRODUCT_FROM_CART",
    data: product
  })
}

export const updateProductQuantity = updatedProduct => dispatch => {
  dispatch({
    type: "UPDATE_PRODUCT_QUANTITY",
    data: updatedProduct
  })
}

export const emptyShoppingCart = () => dispatch => {
  dispatch({
    type: "EMPTY_CART"
  })
}
export default shoppingCartReducer
