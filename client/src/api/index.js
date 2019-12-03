import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/',
});

export const insertVeggie = payload => api.post(`/veggie`, payload);
export const getAllVeggies = () => api.get(`/veggies`);
export const deleteVeggieById = id => api.delete(`/veggie/${id}`);
export const searchVeggies = search => api.get(`veggieSearch/${search}`);

export const insertCartItem = payload => api.post(`/cartItem`, payload);
export const getAllCartItems = () => api.get(`/cartItems`);
export const deleteCartItemById = id => api.delete(`/cartItem/${id}`);

const apis = {
    insertVeggie,
    getAllVeggies,
    deleteVeggieById,
    searchVeggies,
    insertCartItem,
    getAllCartItems,
    deleteCartItemById
};

export default apis;
