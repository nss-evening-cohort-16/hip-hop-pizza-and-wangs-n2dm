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

// CREATE ORDERS
const createOrder = (orderObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/orders.json`, orderObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/orders.json`, body)
        .then(() => {
          getOrders(orderObj).then(resolve);
        });
    }).catch((error) => reject(error));
});

const deleteOrders = (firebaseKey, userId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/orders/${firebaseKey}.json`)
    .then(() => {
      getOrders(userId).then(resolve);
    })
    .catch(reject);
});

// GET A SINGLE ORDER CARD
const getSingleOrderCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export {
  getOrders,
  deleteOrders,
  getSingleOrderCard,
  createOrder
};
