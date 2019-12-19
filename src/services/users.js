import axios from 'axios'

const baseUrl = '/api/users'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
  console.log('token set to ', token)
}

const getAll = async () => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.get(baseUrl, config)
  return response.data
}

const createUser = async user => {
  const response = await axios.post(baseUrl, user)
  return response.data
}

const deleteUser = async userId => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.delete(`${baseUrl}/${userId}`, config)
  return response.data
}

export default {
  getAll,
  createUser,
  deleteUser,
  setToken
}
