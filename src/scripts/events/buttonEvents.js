import createOrderForm from '../components/forms/createOrderForm';
import showOrders from '../components/orders';
import { getOrders, createOrder } from '../helpers/data/orderData';

const buttonEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CREATE ORDER
    if (e.target.id.includes('create-btn')) {
      createOrderForm();
    }
    // VIEW ORDER
    if (e.target.id.includes('view-btn')) {
      getOrders().then(showOrders);
    }
    // DOM EVENT FOR ADDING ORDER FROM SUBMIT BUTTON
    if (e.target.id.includes('submit-order')) {
      e.preventDefault();
      const orderObj = {
        customername: document.querySelector('#orderName').value,
        customerphonenumber: document.querySelector('#customerPhone').value,
        customeremail: document.querySelector('#customerEmail').value,
        ordertype: document.querySelector('#ordertype').value,
        isopen: true
      };

      createOrder(orderObj).then(showOrders);
    }
  });
};

export default buttonEvents;
