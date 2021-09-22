/* import axios from 'axios';
import firebaseConfig from '../../api/apiKeys';
import { getOrders } from '../helpers/data/orderData';

const dbUrl = firebaseConfig.databaseURL;

const editOrder = (orderObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/orders/${orderObj.firebaseKey}.json`, orderObj)
    .then(() => getOrders().then(resolve))
    .catch((error) => reject(error));
});

export default editOrder; */
