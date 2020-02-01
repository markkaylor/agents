import axios from 'axios'

const ApiClient = axios.create({  
  baseURL: `http://130.211.51.113`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default ApiClient