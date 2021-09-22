import createOrderForm from '../components/forms/createOrderForm';
import { getSingleOrderCard } from '../helpers/data/orderData';

const editEvents = () => {
  document.querySelector('#order-container').addEventListener('click', (e) => {
    // This is the Click-Event for Editing a Order
    if (e.target.id.includes('edit-order')) {
      const [, id] = e.target.id.split('--');

      getSingleOrderCard(id).then((orderObj) => createOrderForm(orderObj));
    }
  });
};

export default editEvents;
