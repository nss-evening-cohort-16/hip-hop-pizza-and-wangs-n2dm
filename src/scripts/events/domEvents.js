import createOrderForm from '../components/forms/createOrderForm';
import showOrders from '../components/orders';
import { getOrders } from '../helpers/data/orderData';

const domEvents = () => {
  document.querySelector('#button-container').addEventListener('click', (e) => {
    // CREATE ORDER
    if (e.target.id.includes('create-btn')) {
      console.warn('Here is the order form');
      createOrderForm();
    }
    // VIEW ORDER
    if (e.target.id.includes('view-btn')) {
      console.warn('Here is the order card');
      getOrders().then(showOrders);
    }
  });
};

export default domEvents;
