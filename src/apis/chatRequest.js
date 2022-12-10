import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:3001'})

const chatApi = {
   userChats: id => API.get('/chats/' + id),
}

export default chatApi
