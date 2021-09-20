import logoutButton from './buttons/logoutButton';

const navBar = () => {
  document.querySelector('#navbar-container').innerHTML = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
  <div class="collapse navbar-collapse" id="navbarNav">
    <img id="home" class="nav-logo" src="https://github.com/nss-evening-cohort-16/hip-hop-pizza-and-wangs-java-souls/raw/Development/instructions/hhpw-record.png" alt="pizza-logo">
    Hip Hop Pizza And Wangs
    <ul class="navbar-nav">
    <li class="nav-item">
      <a id="viewOrders" class="nav-link" href="#">View Orders</a>
    </li>
    <li class="nav-item">
      <a id="createOrder" class="nav-link" href="#">Create an Order</a>
    </li>
    <div class = "search-logout">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    </form>
    </div>
    <div class="logout" id="logout-button"></div>
  </ul>
</nav>
  `;
  logoutButton();
};
export default navBar;
