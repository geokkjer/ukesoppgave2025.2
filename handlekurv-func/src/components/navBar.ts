import type { AppState } from '../types';

export function navBar(model: AppState): HTMLElement {
    const element = document.createElement('header');
    const nav = document.createElement('nav');
    nav.className = 'navbar';
    const logo = document.createElement('h1');
    logo.className = 'logo';
    logo.innerText = 'Nettbutikk';
    const ul = document.createElement('ul');
    ul.className = 'nav-links';
    const li1 = document.createElement('li');
    const a1 = document.createElement('a');
    a1.href = '#';
    a1.innerText = 'Handle produkter 🛍';
    // a1.addEventListener('click', () => { model.app.currentPage = 'products'; });

    const a2 = document.createElement('a');
    a2.href = '#';
    a2.innerText = 'Handlekurv 🛒';
    // a2.addEventListener('click', () => { model.app.currentPage = 'cart';  });

    const infoCart = document.createElement('span');    
    infoCart.className = 'cart-info';
    infoCart.innerText = `(${model.cart.items.length}) totalt: ${model.cart.total.toFixed(2)} NOK`;


    li1.appendChild(a1);
    li1.appendChild(a2);
    ul.appendChild(li1);
    ul.appendChild(infoCart);
    nav.appendChild(logo);
    nav.appendChild(ul);
    element.appendChild(nav);
    return element;
}