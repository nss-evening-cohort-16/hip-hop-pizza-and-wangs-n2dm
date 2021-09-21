import createOrderForm from '../components/forms/createOrderForm';
import showOrders from '../components/orders';
import { getOrders } from '../helpers/data/orderData';
import showRevenue from '../components/forms/addRevenueForm';

const domEvents = () => {
  document.querySelector('#button-container').addEventListener('click', (e) => {
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
    // VIEW REVENUE
    if (e.target.id.includes('revenue-btn')) {
      showRevenue();
    }
  });
};

export default domEvents;
