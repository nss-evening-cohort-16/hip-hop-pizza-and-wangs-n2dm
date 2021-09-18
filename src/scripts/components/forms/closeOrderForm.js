const closeOrderForm = () => {
  document.querySelector('#main-content').innerHTML = `
    <form>
      <select class="form-select" aria-label="Default select example">
          <option selected>Order Type</option>
          <option value="1">Phone</option>
          <option value="2">Walk-in</option>
          <option value="2">Delivery</option>
      </select>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>`;
};

export default closeOrderForm;
