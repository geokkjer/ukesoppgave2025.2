import { mainView } from "./commonView";

function productsView() {
    mainView();
    const app = document.getElementById('app');
    return `
      <h1>Products Page</h1>
      <p>List of products will be displayed here.</p>
    `;
  }
  
  export { productsView };