const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div id="navbar-container"></div>
    <div id="main-container">
      <div id ="button-container"></div>
      <div id="order-container"></div>
      <div id="detail-container"></div>
      <div id="form-container"></div>
      <div id="detail-button"></div>
    </div>
    `;
};
export default domBuilder;
