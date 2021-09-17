import createOrderForm from '../components/forms/createOrderForm';
import showOrders from '../components/orders';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR CREATING AN ORDER FORM FROM HOME SCREEN
    if (e.target.id.includes('create-btn')) {
      console.warn('Clicked the Create Order Button on the Home Page');
      createOrderForm();
    }
    // continuing
    if (e.target.id.includes()) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        console.warn('Clicked delete card');

        deleteOrder(firebaseKey).then(showOrders);
      }
    }
  });
};

export default domEvents;
