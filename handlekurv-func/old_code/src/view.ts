import { model } from "./model";
import { generateMain } from "./productsView";
import { generateNavbar, generateFooter } from "./commonView";
import { cartView } from "./cartView";

export function updateView() {
  if (model.app.currentPage === 'products') {
    const app = document.getElementById('app');
    app!.innerHTML = '';
    const header = document.createElement('header');
    const main = document.createElement('main');
    main.id = 'main';
    const footer = document.createElement('footer');
    footer.id = 'footer';
    app!.appendChild(header);
    app!.appendChild(main);
    app!.appendChild(footer);
    generateNavbar(header);
    generateMain(main);
    generateFooter(footer);
  }
  else if (model.app.currentPage === 'cart') {
    const app = document.getElementById('app');
    const cart = cartView();
    app!.innerHTML = '';
    app!.appendChild(cart);
  }
  else if (model.app.currentPage === 'product-detail') {
    alert('Viser produktdetaljer som vi må lage senere');
  }
}

