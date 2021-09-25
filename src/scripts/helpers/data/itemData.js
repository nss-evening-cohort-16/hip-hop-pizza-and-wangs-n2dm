import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET ALL ITEMS
const getAllItems = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/items.json?orderBy="orderId"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// CREATE AN ITEM
const createItem = (itemObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/items.json`, itemObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/items/${response.data.name}.json`, body)
        .then(() => {
          getAllItems(itemObj.orderId).then((itemArray) => resolve(itemArray));
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

// UPDATE ITEM
const updateItem = (Obj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/items/${Obj.firebaseKey}.json`, Obj)
    .then(() => getAllItems(Obj).then(resolve))
    .catch(reject);
});

export {
  getAllItems, createItem, getOrderItems, getSingleItem, updateItem
};
