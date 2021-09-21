import clearDom from '../helpers/clearDom';

const getOrderDetail = (array) => {
  clearDom();
  array.forEach((item) => {
    document.querySelector('#order-container').innerHTML += `
        <div class="card item-card">
        <div class="card-body">
          <h3 class="card-item">${item.name}</h3>
          <h3 class="card-price">PRICE: $${item.price}</h3>
          <div id="item-buttons">
            <a href="#" id="item-edit-btn--${item.firebaseKey}"> Edit Item </a>
            <a href="#" id="item-delete-btn--${item.firebaseKey}">Delete Item </a>
          </div>
        </div>
      </div>`;
  });
  document.querySelector('#detail-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-item-btn">Add Item</button>';
  document.querySelector('#detail-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="go-to-payment-btn">Go To Payment</button>';
};
export default getOrderDetail;
