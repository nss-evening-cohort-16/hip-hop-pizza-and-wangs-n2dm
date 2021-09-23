import createOrderForm from '../components/forms/createOrderForm';
import showOrders from '../components/orders';
import { getOrders, deleteOrders } from '../helpers/data/orderData';
import showRevenue from '../components/forms/addRevenueForm';
import { getSingleItem, updateItem } from '../helpers/data/itemData';
import itemForm from '../components/forms/itemForm';
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
    // VIEW REVENUE
    if (e.target.id.includes('revenue-btn')) {
      showRevenue();
    }
    // DOM EVENTS FOR ITEMS
    // EDIT AN ITEM
    if (e.target.id.includes('item-edit-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((obj) => itemForm(obj));
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

export default domEvents;
