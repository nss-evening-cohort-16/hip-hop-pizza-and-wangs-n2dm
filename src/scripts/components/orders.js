import clearDom from '../helpers/clearDom';
import homeLoggedIn from './homeLoggedIn';

const showOrders = (array) => {
  clearDom();
  homeLoggedIn();
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
                <a href="#" class="card-link" id="delete-order--${order.firebaseKey}">Delete</a>
            </div>
        </div>`;
  });
};

export default showOrders;
