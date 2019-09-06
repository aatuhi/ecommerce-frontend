import orderService from '../services/orders'

const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ORDERS':
      return action.data
    default:
      return state
  }
}

export const ordersInitialization = () => async (dispatch) => {
  const allOrders = await orderService.getAll()
  dispatch({
    type: 'INIT_ORDERS',
    data: allOrders,
  })
}

export default ordersReducer
