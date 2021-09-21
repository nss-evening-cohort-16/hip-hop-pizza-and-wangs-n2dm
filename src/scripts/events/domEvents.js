import createOrderForm from '../components/forms/createOrderForm';
import showOrders from '../components/orders';
import { getOrders } from '../helpers/data/orderData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CREATE ORDER
    if (e.target.id.includes('create-btn')) {
      console.warn('This is Create Order');
      createOrderForm();
    }
    // VIEW ORDER
    if (e.target.id.includes('view-btn')) {
      console.warn('This is View Order');
      getOrders().then(showOrders);
    }
  });
};

export default domEvents;
