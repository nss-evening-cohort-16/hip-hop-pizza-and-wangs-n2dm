import createOrderForm from '../components/forms/createOrderForm';
import showOrders from '../components/orders';
import { getOrders, deleteOrders } from '../helpers/data/orderData';
import getOrderDetail from '../components/orderDetails';
import showRevenue from '../components/forms/addRevenueForm';
import { deleteItem } from '../helpers/data/itemData';

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
        console.warn(e.target.id.split('--'));

        deleteOrders(id).then(showOrders);
      }
    }
    // VIEW REVENUE
    if (e.target.id.includes('revenue-btn')) {
      showRevenue();
    }
    // DELETING ORDER ITEMS
    if (e.target.id.includes('item-delete-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('ON-CLICKED DELETE BOOK', e.target.id);
      deleteItem(firebaseKey).then(getOrderDetail);
    }
  });
};

// VIEW ORDER DETAIL

export default domEvents;
