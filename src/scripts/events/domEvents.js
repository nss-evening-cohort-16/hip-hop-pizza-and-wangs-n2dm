import createOrderForm from '../components/forms/createOrderForm';
import showOrders from '../components/orders';
// import viewOrderDetail from '../helpers/data/mergedData';
import { getOrders } from '../helpers/data/orderData';
// import getOrderDetail from '../components/orderDetails';

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
    // if (e.target.id.includes('order-detail')) {
    //   console.warn('Here is the order detail');
    //   const [, firebaseKey] = e.target.id.split('--');
    //   viewOrderDetail(firebaseKey).then(getOrderDetail);
    // }
  });
};

// VIEW ORDER DETAIL

export default domEvents;
