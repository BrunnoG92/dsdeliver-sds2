import axios from "axios";
const API_URL = 'https://bruno-projetc-sds2.herokuapp.com';
export function fetchOrders () {
    return axios (`${API_URL}/orders`);
}