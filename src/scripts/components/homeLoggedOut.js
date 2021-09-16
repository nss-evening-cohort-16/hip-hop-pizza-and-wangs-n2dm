import loginButton from './buttons/loginButton';

const homeLoggedOut = () => {
  loginButton();
  document.querySelector('#app').innerHTML = `
    <img = "https://raw.githubusercontent.com/nss-evening-cohort-16/hip-hop-pizza-and-wangs-n2dm/main/instructions/hhpw-record.png"/>
    `;
};
export default homeLoggedOut;
