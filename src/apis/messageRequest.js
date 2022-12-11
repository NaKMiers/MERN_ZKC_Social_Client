import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:3001'})

const messageApi = {
   getMessages: id => API.get('/messages/' + id),
   addMessage: data => API.post('/messages/', data),
}

export default messageApi
