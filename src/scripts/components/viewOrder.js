import axios from 'axios';
import firebaseConfig from '../../api/apiKeys';
import { getOrders } from '../helpers/data/orderData';

const dbUrl = firebaseConfig.databaseURL;

const editOrder = (orderObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/order.json`, orderObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/orders/${response.data.name}.json`, body)
        .then(() => {
          getOrders().then(resolve);
        });
    }).catch((error) => reject(error));
});

export default editOrder;
