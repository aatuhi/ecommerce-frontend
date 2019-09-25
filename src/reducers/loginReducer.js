import loginService from '../services/login'
import orderService from '../services/orders'

const initialState = JSON.parse(window.localStorage.getItem('loggedUser'))

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.data
    case 'LOG_OUT':
      return null
    default:
      return state
  }
}

export const userLoggingIn = credentials => async dispatch => {
  const user = await loginService.login(credentials)
  console.log('user', user)
  window.localStorage.setItem('loggedUser', JSON.stringify(user))
  orderService.setToken(user.token)
  dispatch({
    type: 'LOG_IN',
    data: user,
  })
}

export const userLoggingOut = () => dispatch => {
  window.localStorage.removeItem('loggedUser')
  dispatch({
    type: 'LOG_OUT',
  })
}

export default loginReducer
