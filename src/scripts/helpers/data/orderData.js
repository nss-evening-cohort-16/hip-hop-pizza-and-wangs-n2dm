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

// CREATE ORDER

const createOrders = (orderObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/orders.json`, orderObj)
    .then((response) => {
      const order = { firebaseKey: response.data.customername };
      axios.patch(`${dbUrl}/orders/${response.data.customername}.json`, order)
        .then(() => {
          getOrders(orderObj).then(resolve);
        });
    }).catch((error) => reject(error));
});
export { getOrders, createOrders };
