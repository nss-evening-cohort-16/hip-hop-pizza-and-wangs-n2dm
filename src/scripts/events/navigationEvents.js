import createOrderForm from '../components/forms/createOrderForm';
import clearDom from '../helpers/clearDom';

const navigationEvents = () => {
  // CREATE ORDER FORM EVENT
  document.querySelector('#createOrder').addEventListener('click', createOrderForm);

  // HOMEPAGE
  document.querySelector('#home').addEventListener('click', clearDom);
};

export default navigationEvents;
