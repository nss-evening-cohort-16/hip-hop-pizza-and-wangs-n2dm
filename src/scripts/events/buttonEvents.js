import createOrderForm from '../components/forms/createOrderForm';
import showOrders from '../components/orders';
import { getOrders, createOrder } from '../helpers/data/orderData';
import itemForm from '../components/forms/itemForm';
import { createItem } from '../helpers/data/itemData';
import viewOrderDetail from '../helpers/data/mergedData';

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
        isopen: true,
        price: 10
      };

      createOrder(orderObj).then(showOrders);
    }
    // DOM EVENT FOR ADDING AN ITEM
    if (e.target.id.includes('add-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      itemForm(firebaseKey);
    }
    // Click EVENT FOR SUBMITTING NEW ITEM
    if (e.target.id.includes('submit-item')) {
      e.preventDefault();
      const [, orderId] = e.target.id.split('--');
      const newItem = {
        name: document.querySelector('#item-name').value,
        price: Number(document.querySelector('#item-price').value),
        orderId
      };
      createItem(newItem).then(() => viewOrderDetail(orderId).then(viewOrderDetail));
    }
  });
};

export default buttonEvents;
