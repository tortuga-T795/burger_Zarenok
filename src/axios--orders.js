import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-75a81.firebaseio.com/'
})

export default instance;