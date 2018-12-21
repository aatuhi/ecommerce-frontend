import productService from '../services/products'

const productReducer = (state = [], action) => {
  console.log('productreducer action,', action)
  switch (action.type) {
    case 'INIT_PRODUCTS':
      return action.data
    default:
      return state
  }
}

export const productInitialization = () => {
  return async dispatch => {
    const products = await productService.getAll()
    dispatch({
      type: 'INIT_PRODUCTS',
      data: products,
    })
  }
}

export default productReducer