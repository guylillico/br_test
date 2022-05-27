import axios from 'axios'

const API = axios.create({
  baseURL: `https://www.betright.com.au/api`,
  withCredentials: false,
})

export default API
