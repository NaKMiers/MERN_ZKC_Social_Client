import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:3001'})

const uploadApi = {
   uploadImage: data => API.post('/uploads', data),

   uploadPost: data => API.post('/posts', data),
}

export default uploadApi
