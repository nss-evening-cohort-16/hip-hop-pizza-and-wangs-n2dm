import createOrderForm from '../components/forms/createOrderForm';
import showOrders from '../components/orders';
import { getOrders, deleteOrders, createOrder } from '../helpers/data/orderData';
import showRevenue from '../components/forms/addRevenueForm';
import { createItem, getSingleItem, updateItem } from '../helpers/data/itemData';
import itemForm from '../components/forms/itemForm';
import showItems from '../components/Item';
import viewOrderDetail from '../helpers/data/mergedData';
import getOrderDetail from '../components/orderDetails';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CREATE ORDER
    if (e.target.id.includes('create-btn')) {
      console.warn('This is Create Order');
      createOrderForm();
    }
    // VIEW ORDER
    if (e.target.id.includes('view-btn')) {
      console.warn('This is View Order');
      getOrders().then(showOrders);
    }
    // DELETE ORDER
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete this order?')) {
        console.warn('clicked delete');
        const [, id] = e.target.id.split('--');
        console.warn('Clicked delete order', id);

        deleteOrders(id).then(showOrders);
      }
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
    /// ///////////////////////// ITEM EVENTS ///////////////////////////////////////////////////////

    // DOM EVENT FOR ADDING AN ITEM
    if (e.target.id.includes('add-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      itemForm(firebaseKey);
    }
    // Click EVENT FOR SUBMITTING NEW ITEM
    if (e.target.id.includes('submit-item')) {
      e.preventDefault();
      // const [, orderId] = e.target.id.split('--');
      const newItem = {
        name: document.querySelector('#item-name').value,
        price: Number(document.querySelector('#item-price').value),
      };
      createItem(newItem).then(showItems);
    }
    if (e.target.id.includes('revenue-btn')) {
      showRevenue();
    }
    // DOM EVENTS FOR ITEMS
    // EDIT AN ITEM
    if (e.target.id.includes('item-edit-btn')) {
      const [, id] = e.target.id.split('--');
      getSingleItem(id).then((obj) => itemForm(obj));
    }
    // CLICK EVENT FOR UPDATING AN ITEM
    if (e.target.id.includes('update-item-btn')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const itemObj = {
        name: document.querySelector('#item-name').value,
        price: document.querySelector('#item-price').value,
        firebaseKey
      };
      updateItem(itemObj);
      getSingleItem(firebaseKey).then((item) => viewOrderDetail(item.orderId).then(getOrderDetail));
    }
  });
};

// VIEW ORDER DETAIL

export default domEvents;
