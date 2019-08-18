import axios from 'axios'

const baseUrl = '/api/users'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
  console.log('token set to ', token)
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createUser = async (user) => {
  const response = await axios.post(baseUrl, user)
  return response.data
}

const deleteUser = async (userId) => {
  const config = {
    headers: { Authorization: token },
  }
  const request = axios.delete(`${baseUrl}/${userId}`, config)
  return request.then(response => response.status)
}

export default {
  getAll,
  createUser,
  deleteUser,
  setToken,
}
