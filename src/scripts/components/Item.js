import clearDom from '../helpers/clearDom';
import homeLoggedIn from './homeLoggedIn';

const showItems = (array) => {
  clearDom();
  homeLoggedIn();
  array.forEach((item) => {
    console.warn(item);
    document.querySelector('#order-container').innerHTML += `
    <div class="card item-card">
    <div class="card-body">
      <h3 class="card-item">${item.name}</h3>
      <h3 class="card-price">PRICE: $${item.price}</h3>
      <div id="item-buttons">
        <a id="item-edit-btn--${item.firebaseKey}" href="#"> Edit Item </a>
        <br>
        <a id="item-delete-btn--${item.firebaseKey}" href="#"> Delete Item </a>
      </div>
    </div>
  </div>`;
  });
};

export default showItems;
