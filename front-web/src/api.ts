import axios from "axios";

const API_URL = 'https://prime-sds2.herokuapp.com';
export function fetchProducts(){

return axios(`${API_URL}/products`)    
}