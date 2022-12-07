import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:3001' })

const AuthApi = {
   login: formData => API.post('/auth/login', formData),
   signUp: formData => API.post('/auth/register', formData),
}

export default AuthApi
