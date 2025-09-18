
import type { Model } from "../types";
import { addToCart } from "../controller";


function productsView(state: Model): HTMLElement {
    const model = structuredClone (state); 
    const main = document.getElementById('main');
    main!.innerHTML = '';

    for (let product of model.products) {
        const productCard = document.createElement('article');
        productCard.className = 'product-card';
        const image = document.createElement('div');
        image.className = 'product-image';
        image.innerText = product.image;
        const productInfo = document.createElement('div');
        productInfo.className = 'product-info';
        const price = document.createElement('p');
        price.className = 'product-price';
        price.innerHTML = `<span class="currency">kr</span> <span class="amount">${product.price}</span>`;
        const description = document.createElement('p');
        description.className = 'product-description';
        description.innerText = product.description;
        productInfo.appendChild(price);
        productInfo.appendChild(description);
        const footer = document.createElement('footer');
        footer.className = 'product-footer';
        const button = document.createElement('button');
        button.className = 'btn btn-success';
        button.innerText = 'Legg i handlekurv';
        button.addEventListener('click', () => {addToCart(state, product.id); });
        footer.appendChild(button);
        productCard.appendChild(image);
        productCard.appendChild(productInfo);
        productCard.appendChild(footer);
        main!.appendChild(productCard);
      }
      return main!;
  }
  
  export { productsView };