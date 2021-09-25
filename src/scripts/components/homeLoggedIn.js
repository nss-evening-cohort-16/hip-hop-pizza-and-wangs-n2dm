import clearDom from '../helpers/clearDom';

const homeLoggedIn = () => {
  clearDom();
  console.warn('hello');
  //  document.querySelector('#main-container').innerHTML += `<h1> Welcome, ${user.displayName}</h1>`;
  document.querySelector('#button-container').innerHTML = `
    <button type="button" id="view-btn" class="btn btn-primary">View Orders</button>
    <button type="button" id="create-btn" class="btn btn-secondary">Create Order</button>
    <button type="button" id="revenue-btn" class="btn btn-success"> View Revenue</button>
    `;
};
export default homeLoggedIn;
