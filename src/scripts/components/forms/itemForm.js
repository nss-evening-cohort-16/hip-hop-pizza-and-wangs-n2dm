import clearDom from '../../helpers/clearDom';

const itemForm = (orderId, obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
    <form id="add-item-form" class="mb-4">
        <div class="form-group">
          <label for="itemname">Item Name</label>
          <input type="text" class="form-control" id="item-name" value="${obj.name || ''}" placeholder="Item Name" required>
        </div>
        <div class="form-group">
          <label for="itemprice">Item Price</label>
          <input type="text" class="form-control" id="item-price" value="${obj.price || ''}" placeholder="Item Price" required>
        </div>
        <div class="form-button">
            <button id="${obj.firebaseKey ? `update-item-btn--${obj.firebaseKey}` : `submit-item-btn--${orderId}`}" class="btn btn-success">Add/Edit Item</button>
        </div>
      </form>
      `;
};

export default itemForm;
