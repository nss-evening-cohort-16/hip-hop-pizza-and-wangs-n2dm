import createOrderForm from '../components/forms/createOrderForm';
import showOrders from '../components/orders';
import { getOrders, deleteOrders } from '../helpers/data/orderData';
import showRevenue from '../components/forms/addRevenueForm';
import { deleteItem } from '../helpers/data/itemData';
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
    // DELETE ITEM
    if (e.target.id.includes('item-delete-btn')) {
      if (window.confirm('Delete Item?')) {
        const [, firebaseKey] = e.target.id.split('--');
        console.warn('this should go through');

        deleteItem(firebaseKey).then(getOrderDetail);
      }
    }

    // VIEW REVENUE
    if (e.target.id.includes('revenue-btn')) {
      showRevenue();
    }
  });
};

// VIEW ORDER DETAIL

export default domEvents;
