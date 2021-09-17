import showOrders from '../components/orders';
import getOrders from '../helpers/data/orderData';

const domEvents = () => {
  document.querySelector('#button-container').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrder')) {
      getOrders().then(showOrders);
    }
  });
};

export default domEvents;
