import firebase from 'firebase/app';
import 'firebase/auth';
import homeLoggedOut from '../homeLoggedOut';

const signMeOut = () => {
  firebase.auth().signOut();
  homeLoggedOut();
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#logout-button').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};
export default logoutButton;
