import axios from 'axios'

const baseUrl = '/api/orders'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
  console.log('token set to ', token)
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createOrder = async (orderDetails) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, orderDetails, config)
  return response.data
}

export default {
  getAll,
  createOrder,
  setToken,
}
