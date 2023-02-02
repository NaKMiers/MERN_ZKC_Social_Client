import axios from 'axios'

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL })

const uploadApi = {
   uploadImage: data => API.post('/uploads', data),

   uploadPost: data => API.post('/posts', data),
}

export default uploadApi
