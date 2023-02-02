import axios from 'axios'

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL })

API.interceptors.request.use(req => {
   if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
   }
   return req
})

const userApi = {
   getUser: id => API.get('/users/' + id),
   getAllUser: () => API.get('/users'),
   updateUser: (id, data) => API.put('/users/' + id, data),
   followUser: (id, data) => API.patch('/users/follow/' + id, data),
   unFollowUser: (id, data) => API.patch('/users/unfollow/' + id, data),
}

export default userApi
