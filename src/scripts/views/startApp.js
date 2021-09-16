import homeLoggedIn from '../components/homeLoggedIn';
import navBar from '../components/navBar';
import domBuilder from '../components/domBuilder';
import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  console.warn('Hip-hop-Pizza!');
  domBuilder();
  navBar();
  navigationEvents();
  homeLoggedIn();
};
export default startApp;
