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
      axios.patch(`${dbUrl}/orders/${response.data.name}.json`, body)
        .then(() => {
          getOrders(orderObj).then(resolve);
        });
    }).catch((error) => reject(error));
});

const deleteOrders = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/orders/${firebaseKey}.json`)
    .then(() => {
      getOrders().then(resolve);
    })
    .catch(reject);
});

// GET A SINGLE ORDER CARD
const getSingleOrderCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const editOrder = (editObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/orders${editObj.firebaseKey}.json`, editObj)
    .then(() => getOrders(editObj).then(resolve))
    .catch(reject);
});

export {
  getOrders,
  deleteOrders,
  getSingleOrderCard,
  editOrder,
  createOrder
};
