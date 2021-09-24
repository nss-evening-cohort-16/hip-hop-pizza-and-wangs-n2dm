/* eslint-disable no-alert */
import viewOrderDetail from '../helpers/data/mergedData';
import getOrderDetail from '../components/orderDetails';
/* import showOrders from '../components/orders'; */
// import itemForm from '../components/forms/ItemForm';

const detailEvent = () => {
  document.querySelector('#order-container').addEventListener('click', (e) => {
    if (e.target.id.includes('order-detail')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey);
      viewOrderDetail(firebaseKey).then((object) => getOrderDetail(object.itemsObject));
    }
    // SHOW ADD NEW ITEM FORM
    // if (e.target.id.includes('item-edit-btn')) {
    //   const [, firebaseKey] = e.target.id.split('--');
    //   console.warn('item form');
    //   itemForm(firebaseKey);
  });
};

export default detailEvent;
