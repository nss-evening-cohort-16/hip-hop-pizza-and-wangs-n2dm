const viewOrder = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-order-btn">View Order>';

  array.forEach((item) => {
    document.querySelector('#order').innerHTML += `
      <div class="card">
           <div class="card-body" style="height: 180px;">
            <h5 class="card-title">${item.title} </br> Category?${item.language}item.language</h5>
            <p class="card-text bold">${item.definition}</p>
            
            <i class="btn btn-success fas fa-eye" id="view-order-btn--${item.firebaseKey}"></i>
            <i id="edit-order-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
               </div>
      </div>
      `;
  });
};
const emptyWords = () => {
  document.querySelector('#words').innerHTML = '<h1>No Items</h1>';
};

export { viewOrder, emptyWords };
