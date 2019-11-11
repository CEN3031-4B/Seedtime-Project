import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const insertVeggie = payload => api.post('/veggie', payload)
export const getAllVeggies = () => api.get('/veggies')
export const deleteVeggieById = id => api.delete('/veggies/${id}')

const apis = {
    insertVeggie,
    getAllVeggies,
    deleteVeggieById,
}

export default apis