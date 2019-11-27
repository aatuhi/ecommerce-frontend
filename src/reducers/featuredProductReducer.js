import productService from '../services/products'

const featuredProductReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_FEATURED_PRODUCTS':
      return action.data
    case 'CREATE_FEATURED_PRODUCTS':
      return [...state, action.data]
    default:
      return state
  }
}

export const featuredProductInitialization = () => async dispatch => {
  const featuredProducts = await productService.getFeaturedProducts()
  dispatch({
    type: 'INIT_FEATURED_PRODUCTS',
    data: featuredProducts
  })
}

export const featuredProductsCreation = products => async dispatch => {
  dispatch({
    type: 'CREATE_FEATURED_PRODUCTS',
    data: products
  })
}

export default featuredProductReducer
