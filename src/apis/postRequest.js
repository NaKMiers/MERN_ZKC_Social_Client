import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:3001'})

const authApi = {
   getTimeLinePosts: id => API.get('/posts/timeline/' + id),
   likePost: (id, userId) => API.patch('/posts/' + id, {userId}),
}

export default authApi
