import signMeOut from '../components/buttons/logoutButton';
import createOrderForm from '../components/forms/createOrderForm';

// NAVIGATION EVENTS
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signMeOut);

  // HOME PAGE
  document.querySelector('#home').addEventListener('click', () => {
    console.warn('Clicked!');
  });

  // CREATE AN ORDER
  document.querySelector('#createOrder').addEventListener('click', () => {
    createOrderForm();
    console.warn.apply('Clicked-create-order');
  });

  // CREATE AN ORDER
  document.querySelector('#viewOrders').addEventListener('click', () => {
    console.warn.apply('Clicked-view Order');
  });
  // VIEW REVENUE
  document.querySelector('#revenue').addEventListener('click', () => {
    console.warn.apply('Clicked-create-entry');
  });
};

export default navigationEvents;
