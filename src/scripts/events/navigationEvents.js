import createOrderForm from '../components/forms/createOrderForm';
import clearDom from '../helpers/clearDom';
import showOrders from '../components/orders';
import getOrders from '../helpers/data/orderData';

const navigationEvents = () => {
  // CREATE ORDER FORM EVENT
  document.querySelector('#createOrder').addEventListener('click', createOrderForm);

  // HOMEPAGE
  document.querySelector('#home').addEventListener('click', clearDom);

  // All Orders
  document.querySelector('#viewOrders').addEventListener('click', () => {
    getOrders().then(showOrders);
  });
};

export default navigationEvents;
