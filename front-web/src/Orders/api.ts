import axios from "axios";
const API_URL = "http://localhost:"

export function fetchProducts (){
    return axios (`${API_URL}8080/products`)
}