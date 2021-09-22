import createOrderForm from '../components/forms/createOrderForm';
import showOrders from '../components/orders';
import { getOrders, deleteOrders } from '../helpers/data/orderData';
import showRevenue from '../components/forms/addRevenueForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CREATE ORDER
    if (e.target.id.includes('create-btn')) {
      console.warn('Here is the order form');
      createOrderForm();
    }
    // VIEW ORDER
    if (e.target.id.includes('view-btn')) {
      console.warn('Here is the order card');
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
    // if (e.target.id.includes('item-delete-btn')) {
    //   if (window.confirm('Delete Item?')) {

    //   }
    // }
    // VIEW REVENUE
    if (e.target.id.includes('revenue-btn')) {
      showRevenue();
    }
  });
};

export default domEvents;
