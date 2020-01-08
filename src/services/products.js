import axios from 'axios'

const baseUrl = 'api/products'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createProduct = async product => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(baseUrl, product, config)
  return response.data
}

const editProduct = async updatedProduct => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.put(
    `${baseUrl}/${updatedProduct._id}`,
    updatedProduct,
    config
  )
  return response.data
}

const removeProduct = async id => {
  const config = {
    headers: { Authorization: token }
  }
  const response = axios.delete(`${baseUrl}/${id}`, config)
  return response.status
}

const getFeaturedProducts = async () => {
  const response = await axios.get(`${baseUrl}/featured`)
  return response.data
}

const createFeaturedProducts = async products => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(`${baseUrl}/featured`, products, config)
  return response.data
}

export default {
  setToken,
  getAll,
  createProduct,
  removeProduct,
  editProduct,
  getFeaturedProducts,
  createFeaturedProducts
}
