import firebase from 'firebase/app';
import firebaseConfig from '../../api/apiKeys';
import 'firebase/auth';
import startApp from '../views/startApp';
import loginButton from '../components/buttons/loginButton';
// import logoutButton from '../components/buttons/logoutButton';
import homeLoggedOut from '../components/homeLoggedOut';
import homeLoggedIn from '../components/homeLoggedIn';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp();
      // logoutButton();
      homeLoggedIn();
    } else {
      // person is NOT logged in
      loginButton();
      homeLoggedOut();
    }
  });
};

export default checkLoginStatus;
