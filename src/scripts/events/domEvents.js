import createOrderForm from '../components/forms/createOrderForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR CREATING AN ORDER FORM FROM HOME SCREEN
    if (e.target.includes('createOrderHome')) {
      createOrderForm();
    }
    // continuing
  });
};

export default domEvents;
