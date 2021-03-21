import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://www.benoithubert.tk/wp-json/wp/v2/posts',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export default {
  getAll() {
    return apiClient.get(`/`)
  },
  getOneById(id) {
    return apiClient.get(`/${id}`)
  },
}
