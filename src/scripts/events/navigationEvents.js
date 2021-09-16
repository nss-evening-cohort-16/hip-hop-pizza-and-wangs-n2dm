import createOrderForm from '../components/forms/createOrderForm';

const navigationEvents = () => {
  document.querySelector('#createOrder').addEventListener('click', () => {
    createOrderForm();
  });
};

export default navigationEvents;
