import productService from '../services/products'

const productReducer = (state = [], action) => {
  console.log('productreducer action,', action)
  switch (action.type) {
    case 'INIT_PRODUCTS':
      return action.data
    case 'CREATE_PRODUCT':
      return [...state, action.data]
    default:
      return state
  }
}

export const productInitialization = () => async (dispatch) => {
  const products = await productService.getAll()
  dispatch({
    type: 'INIT_PRODUCTS',
    data: products,
  })
}

export const productCreation = productObject => async (dispatch) => {
  const product = await productService.createProduct(productObject)
  dispatch({
    type: 'CREATE_PRODUCT',
    data: product,
  })
}

export default productReducer
