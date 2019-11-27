import axios from 'axios'

const baseUrl = 'https://shielded-spire-60169.herokuapp.com/api/orders'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.get(baseUrl, config)
  return response.data
}

const createOrder = async orderDetails => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(baseUrl, orderDetails, config)
  return response.data
}

export default {
  getAll,
  createOrder,
  setToken
}
