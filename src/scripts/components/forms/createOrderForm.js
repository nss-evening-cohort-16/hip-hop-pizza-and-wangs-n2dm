import clearDom from '../../helpers/clearDom';

const createOrderForm = (obj = { }) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
    <form id="order-form">
  <div class="mb-3">
    <label for="orderName" class="form-label">Order Name</label>
    <input type="text" class="form-control" id="orderName" value="${obj.orderName || ''}">
  </div>
  <div class="mb-3">
    <label for="customerPhone" class="form-label">Customer Phone</label>
    <input type="text" class="form-control" id="customerPhone" value="${obj.customerPhoneNumber || ''}">
  </div>
  <div class="mb-3">
    <label for="customerEmail" class="form-label">Customer Email</label>
    <input type="text" class="form-control" id="customerEmail" value="${obj.customerEmailAddress || ''}">
  </div>
  <select class="form-select" aria-label="Default select example" value="${obj.orderType || ''}">
    <option selected>Order Type</option>
    <option value="1">Phone</option>
    <option value="2">Walk-in</option>
  </select>
  <button type="submit" id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="btn btn-primary">Create/Edit Order</button>
</form>
    `;
};

export default createOrderForm;
