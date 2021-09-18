import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALL FOR ORDERS
const dbUrl = firebaseConfig.databaseURL;

//  GET ORDERS
const getOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// GET A SINGLE ORDER CARD
const getSingleOrderCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});
export { getOrders, getSingleOrderCard };
