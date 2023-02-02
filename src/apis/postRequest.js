import axios from 'axios'

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL })

const authApi = {
   getTimeLinePosts: id => API.get('/posts/timeline/' + id),
   likePost: (id, userId) => API.patch('/posts/' + id, { userId }),
}

export default authApi
