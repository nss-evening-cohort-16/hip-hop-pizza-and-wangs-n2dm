const navBar = () => {
  document.querySelector('#navbar-container').innerHTML = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
  <div class="container-fluid">
    <a id="home" class="navbar-brand" href="#">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPMVICKR_0okc3trJoRsPjBBL8StkzXhYqxg&usqp=CAU" alt="" width="30" height="24" class="d-inline-block align-text-top">
      Vocab-YOU-lary
    </a>
    <ul class="navbar-nav">
    <li class="nav-item">
      <a id="viewOrders" class="nav-link" href="#">View Orders</a>
    </li>
    <li class="nav-item">
      <a id="ccreateOrder" class="nav-link" href="#">Create an Order</a>
    </li>
    </ul>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    </form>
    <div class="logout" id="logout-button"></div>
  </div>
</nav>
  `;
};
export default navBar;
