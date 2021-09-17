import clearDom from '../../helpers/clearDom';

const createOrderForm = (obj = { }) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `<div class="mb-3">
  <label for="orderName" class="form-label">Order Name</label>
  <input type="text" class="form-control" id="orderName" value="${obj.orderName}" required>
</div>
<div class="mb-3">
  <label for="customerPhone" class="form-label">Customer Phone</label>
  <input type="text" class="form-control" id="customerPhone" value="${obj.customerPhoneNumber}" required>
</div>
<div class="mb-3">
  <label for="customerEmail" class="form-label">Customer Email</label>
  <input type="email" class="form-control" id="customerEmail" value="${obj.customerEmailAddress}" required>
</div>
<div class="mb-3">
  <label for="orderType" class="form-label">Order Type</label>
  <select class="form-select" aria-label="Default select example">
<option selected>Open this select menu</option>
<option value="1">Phone</option>
<option value="2">Walk-In</option>
</select>
<button type="submit" id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="btn btn-success">Create/Edit Order</button>
</div>`;
};

export default createOrderForm;
