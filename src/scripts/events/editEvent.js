import createOrderForm from '../components/forms/createOrderForm';
import getOrderDetail from '../components/orderDetails';
import { deleteItem } from '../helpers/data/itemData';
import { getSingleOrderCard } from '../helpers/data/orderData';

const editEvents = () => {
  document.querySelector('#order-container').addEventListener('click', (e) => {
    // This is the Click-Event for Editing a Order
    if (e.target.id.includes('edit-order')) {
      const [, id] = e.target.id.split('--');

      getSingleOrderCard(id).then((orderObj) => createOrderForm(orderObj));
    }

    if (e.target.id.includes('item-delete-btn')) {
      // eslint-disable-next-line no-alert
      const [, firebaseKey] = e.target.id.split('--');
      deleteItem(firebaseKey).then(getOrderDetail);
    }
  });
};
export default editEvents;
