import axios from "axios"

const API_URL= 'http://192.168.0.105:8080'


export function fechOrders(){

   return  axios(`${API_URL}/orders` );
}