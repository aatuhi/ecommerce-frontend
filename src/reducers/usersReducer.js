import userService from '../services/users'

const usersReducer = (state = [], action) => {
  console.log('userReducer action', action)
  switch (action.type) {
    case 'INIT_USERS':
      return action.data
    default:
      return state
  }
}

export const usersInitialization = () => async (dispatch) => {
  const registeredUsers = await userService.getAll()
  dispatch({
    type: 'INIT_USERS',
    data: registeredUsers,
  })
}

export default usersReducer
