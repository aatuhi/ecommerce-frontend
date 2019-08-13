import axios from 'axios'

const baseUrl = '/api/products'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
  console.log('token set to ', token)
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createProduct = async (product) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, product, config)
  return response.data
}

export default {
  getAll,
  createProduct,
  setToken,
}
