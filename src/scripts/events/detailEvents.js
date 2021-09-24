import viewOrderDetail from '../helpers/data/mergedData';
import getOrderDetail from '../components/orderDetails';
// import itemForm from '../components/forms/ItemForm';
// import showOrders from '../components/orders';

const detailEvent = () => {
  document.querySelector('#order-container').addEventListener('click', (e) => {
    if (e.target.id.includes('order-detail')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey);
      viewOrderDetail(firebaseKey).then((object) => getOrderDetail(object.itemsObject));
    }
  });
};

export default detailEvent;
