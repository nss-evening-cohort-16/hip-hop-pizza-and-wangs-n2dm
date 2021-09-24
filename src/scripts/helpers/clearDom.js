const clearDom = () => {
  document.querySelector('#button-container').innerHTML = '';
  document.querySelector('#order-container').innerHTML = '';
  document.querySelector('#detail-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#detail-button').innerHTML = '';
  document.querySelector('#login-form-container').innerHTML = '';
};

export default clearDom;
