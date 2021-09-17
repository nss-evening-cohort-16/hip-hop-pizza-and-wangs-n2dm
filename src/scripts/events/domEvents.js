import createOrderForm from '../components/forms/createOrderForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR CREATING AN ORDER FORM FROM HOME SCREEN
    if (e.target.id.includes('create-btn')) {
      console.warn('Clicked the Create Order Button on the Home Page');
      createOrderForm();
    }
    // continuing
  });
};

export default domEvents;
