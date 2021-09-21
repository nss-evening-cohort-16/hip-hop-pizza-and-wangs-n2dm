import homeLoggedIn from '../components/homeLoggedIn';
import navBar from '../components/navBar';
import domBuilder from '../components/domBuilder';
import navigationEvents from '../events/navigationEvents';
import domEvents from '../events/domEvents';
import buttonEvents from '../events/buttonEvents';

const startApp = () => {
  console.warn('Hip-hop-Pizza!');
  domBuilder();
  domEvents(); // This adds the Event Listerters to the DOM
  navBar();
  navigationEvents();
  domEvents();
  homeLoggedIn();
  buttonEvents();
};
export default startApp;
