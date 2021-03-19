import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost/wp-json/wp/v2/posts',
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
