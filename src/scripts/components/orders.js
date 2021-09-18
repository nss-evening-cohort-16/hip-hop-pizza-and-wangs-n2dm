import clearDom from '../helpers/clearDom';

const showOrders = (array) => {
  clearDom();
  document.querySelector('#button-container').innerHTML = `
    <button type="button" id="view-btn" class="btn btn-primary">View Orders</button>
    <button type="button" id="create-btn" class="btn btn-secondary">Create Order</button>
    <button type="button" id="revenue-btn" class="btn btn-success"> View Revenue</button>
    `;
  array.forEach((order) => {
    document.querySelector('#order-container').innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <p class="card-text">Email: ${order.customeremail}</p>
                <h5 class="card-title">${order.customername}</h5>
                <p class="card-text">Phone: ${order.customerphonenumber}</p>
                <h5 class="card-subtitle mb-2 text-muted">OrderStatus: ${order.isopen}</h5>
                <p class="card-text">Order Type: ${order.ordertype}</p>
                <a href="#" class="card-link">Details</a>
                <a href="#" class="card-link">Edit</a>
                <a href="#" class="card-link" id="delete-order">Delete</a>
            </div>
        </div>`;
  });
};

export default showOrders;
