const clearDom = () => {
  document.querySelector('#main-container').innerHTML = '';
  document.querySelector('#order-container').innerHTML = '';
  document.querySelector('#detail-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
};

export default clearDom;
