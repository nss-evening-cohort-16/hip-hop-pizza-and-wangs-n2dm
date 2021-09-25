import navigationEvents from '../../events/navigationEvents';
import clearDom from '../../helpers/clearDom';

const showRevenue = () => {
  clearDom();
  navigationEvents();
  document.querySelector('#form-container').innerHTML = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">REVENUE</h5>
    <h5 class="card-subtitle">TOTAL REVENUE:</h5>
    <p class="card-text">DATE RANGE</p>
    <p class="card-text">TOTAL TIPS</p>
    <p class="card-text">PAYMENT TYPES</p>
  </div>
</div>
    `;
};

export default showRevenue;
