import createOrderForm from '../components/forms/createOrderForm';
import showOrders from '../components/orders';
import { getOrders } from '../helpers/data/orderData';
import homeLoggedIn from '../components/homeLoggedIn';

const navigationEvents = () => {
  // CREATE ORDER FORM EVENT
  document.querySelector('#createOrder').addEventListener('click', createOrderForm);

  // HOMEPAGE
  document.querySelector('#home').addEventListener('click', homeLoggedIn);

  // All Orders
  document.querySelector('#viewOrders').addEventListener('click', () => {
    getOrders().then(showOrders);
  });
};

export default navigationEvents;
