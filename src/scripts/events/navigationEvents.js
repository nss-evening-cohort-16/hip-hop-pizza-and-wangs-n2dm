import homeLoggedOut from '../components/homeLoggedOut';

// NAVIGATION EVENTS
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', homeLoggedOut);

  // HOME PAGE
  document.querySelector('#home').addEventListener('click', () => {
    console.warn('Cliked!');
  });

  // CREATE AN ORDER
  document.querySelector('#createOrder').addEventListener('click', () => {
    console.warn.apply('Clicked-create-entry');
  });

  // CREATE AN ORDER
  document.querySelector('#viewOrders').addEventListener('click', () => {
    console.warn.apply('Clicked-create-entry');
  });
  // VIEW REVENUE
  document.querySelector('#revenue').addEventListener('click', () => {
    console.warn.apply('Clicked-create-entry');
  });
};

export default navigationEvents;
