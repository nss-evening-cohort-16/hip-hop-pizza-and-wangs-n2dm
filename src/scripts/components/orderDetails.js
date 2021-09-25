import clearDom from '../helpers/clearDom';
import orderTotal from './orderTotal';

const getOrderDetail = (array) => {
  clearDom();
  const orderCount = orderTotal(array);
  document.querySelector('#order-container').innerHTML += `<h1>TOTAL: ${orderCount}</h1>`;
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
  document.querySelector('#detail-button').innerHTML = `
  <button class="btn btn-success btn-lg mb-4" id="add-item-btn">Add Item</button>
  <button class="btn btn-success btn-lg mb-4" id="go-to-payment-btn">Go To Payment</button>
  `;
};
export default getOrderDetail;
