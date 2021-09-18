const closeOrderForm = (obj = {}) => {
  document.querySelector('#main-content').innerHTML = `
    <form>
      <select class="form-select" aria-label="Default select example" value="${obj.paymentType || ''}">
          <option selected>Payment Type</option>
          <option value="1">Debit</option>
          <option value="2">Credit</option>
          <option value="3">Cash</option>
      </select>
      <div class="mb-3">
          <label for="tipAmount" class="form-label">Tip Amount</label>
          <input type="text" class="form-control" id="tipAmount" value="${obj.tipAmount}">
      </div>
      <button type="submit" id="${obj.firebaseKey}" class="btn btn-primary">Submit</button>
    </form>`;
};

export default closeOrderForm;
