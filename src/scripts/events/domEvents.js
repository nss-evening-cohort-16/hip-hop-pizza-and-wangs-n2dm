import createOrderForm from "../components/forms/createOrderForm"

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {

    if(e.target.includes('createOrderHome')) {
        createOrderForm();
    }
  });
};

export default domEvents;
