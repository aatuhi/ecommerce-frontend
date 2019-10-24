import axios from 'axios'

const baseUrl = 'https://localhost:3001/api/orders'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.get(baseUrl, config)
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
