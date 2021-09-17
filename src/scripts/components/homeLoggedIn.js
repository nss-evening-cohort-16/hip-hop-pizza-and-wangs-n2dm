import clearDom from '../helpers/clearDom';

const homeLoggedIn = () => {
  clearDom();
  document.querySelector('#button-container').innerHTML = `
    <button type="button" class="btn btn-primary">View Orders</button>
    <button type="button" class="btn btn-secondary" id="createOrderHome">Create Order</button>
    <button type="button" class="btn btn-success"> View Revenue</button>
    `;
};
export default homeLoggedIn;
