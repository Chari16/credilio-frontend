import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
})

const search = (text) => api.get(`/movies/search/`, { params: { q: text } })

const apis = {
    search
}

export default apis

