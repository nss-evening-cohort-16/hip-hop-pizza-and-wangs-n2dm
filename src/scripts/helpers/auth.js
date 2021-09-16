import firebase from 'firebase/app';
import 'firebase/auth';
import startApp from '../views/startApp';
import loginButton from '../components/buttons/loginButton';
import logoutButton from '../components/buttons/logoutButton';
import firebaseConfig from '../../api/apiKeys';
import homeLoggedOut from '../components/homeLoggedOut';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp();
      logoutButton();
    } else {
      // person is NOT logged in
      loginButton();
      homeLoggedOut();
    }
  });
};

export default checkLoginStatus;
