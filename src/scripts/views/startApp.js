import homeLoggedIn from '../components/homeLoggedIn';
import navBar from '../components/navBar';
import showOrders from '../components/orders';
import domBuilder from '../components/domBuilder';
import navigationEvents from '../events/navigationEvents';
import { getOrders } from '../helpers/data/orderData';

const startApp = () => {
  console.warn('Hip-hop-Pizza!');
  domBuilder();
  navBar();
  navigationEvents();
  homeLoggedIn();
  getOrders().then(showOrders);
};
export default startApp;
