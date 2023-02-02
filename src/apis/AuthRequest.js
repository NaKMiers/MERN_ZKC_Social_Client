import axios from 'axios'
const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL })

const authApi = {
   login: formData => API.post('/auth/login', formData),
   signUp: formData => API.post('/auth/register', formData),
}

export default authApi
