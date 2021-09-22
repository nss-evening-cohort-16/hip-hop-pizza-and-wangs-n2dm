import createOrderForm from '../components/forms/createOrderForm';
import showOrders from '../components/orders';
// import viewOrderDetail from '../helpers/data/mergedData';
import { getOrders } from '../helpers/data/orderData';
import showRevenue from '../components/forms/addRevenueForm';

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
    // VIEW REVENUE
    if (e.target.id.includes('revenue-btn')) {
      showRevenue();
    }
  });
};

// VIEW ORDER DETAIL

export default domEvents;
