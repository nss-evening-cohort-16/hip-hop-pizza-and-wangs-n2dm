import createOrderForm from '../components/forms/createOrderForm';
createOrder
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

import { deleteOrders } from '../helpers/data/orderData';
import showOrders from '../components/orders';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR CREATING AN ORDER FORM FROM HOME SCREEN
    if (e.target.id.includes('create-btn')) {
      console.warn('Clicked the Create Order Button on the Home Page');
      createOrderForm();
    }
    // continuing
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete this order?')) {
        const [, firebaseKey] = e.target.id.split('--');
        console.warn('Clicked delete card');

        deleteOrders(firebaseKey).then(showOrders);
      }
main
    }
  });
};

export default domEvents;
