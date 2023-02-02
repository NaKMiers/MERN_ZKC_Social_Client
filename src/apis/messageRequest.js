import axios from 'axios'

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL })

const messageApi = {
   getMessages: id => API.get('/messages/' + id),
   addMessage: data => API.post('/messages/', data),
}

export default messageApi
