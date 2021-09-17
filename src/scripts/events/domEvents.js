import showOrders from '../components/orders';
import getOrders from '../helpers/data/orderData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrders')) {
      getOrders().then(showOrders);
    }
  });
};

export default domEvents;
