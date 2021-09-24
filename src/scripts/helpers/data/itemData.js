import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET ALL ITEMS
const getAllItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// CREATE AN ITEM
const createItem = (Obj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/items.json`, Obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/items/${response.data.name}.json`, body)
        .then(() => {
          getAllItems(Obj.orderId).then((itemArray) => resolve(itemArray));
        });
    }).catch(reject);
});

// GET ORDER ITEMS
const getOrderItems = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json?orderBy="orderId"&equalTo="${orderId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// GET SINGLE ITEM
const getSingleItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// DELETE ITEM ORDER
const deleteItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/items/${firebaseKey}.json`)
    .then(() => {
      getOrderItems(firebaseKey).then(resolve);
    })
    .catch(reject);
});

export {
  getAllItems, createItem, getOrderItems, getSingleItem, deleteItem
};
