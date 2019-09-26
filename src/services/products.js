import axios from 'axios'

const baseUrl = 'https://shielded-spire-60169.herokuapp.com/api/products'

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
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, product, config)
  return response.data
}

const editProduct = async updatedProduct => {
  const config = {
    headers: { Authorization: token },
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
    headers: { Authorization: token },
  }
  const response = axios.delete(`${baseUrl}/${id}`, config)
  return response.status
}

export default {
  setToken,
  getAll,
  createProduct,
  removeProduct,
  editProduct,
}
