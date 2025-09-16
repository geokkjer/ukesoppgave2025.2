import type { Model } from "./types";

function mainView(): HTMLElement {
    const app = document.getElementById('app');
     
        // gamle version- overgang
        // document.createElement('header');
        // document.createElement('main');
        // document.createElement('footer');

        const header = document.createElement('header') as HTMLElement;
        const main = document.createElement('main') as HTMLElement;
        const footer = document.createElement('footer') as HTMLElement;

        header.id = 'header';
        main.id = 'main';
        footer.id = 'footer';

        app?.appendChild(header);
        app?.appendChild(main);
        app?.appendChild(footer);

        return app!;    
}

function navBar(model: Model): HTMLElement {
    const header = document.getElementById('header');
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
    a1.innerText = 'Produkter';
    a1.addEventListener('click', () => { model.app.currentPage = 'products'; });
    const a2 = document.createElement('a');
    a2.href = '#';
    a2.innerText = 'Handlekurv 🛒';
    a2.addEventListener('click', () => { model.app.currentPage = 'cart';  });

    const infoCart = document.createElement('span');
    infoCart.className = 'cart-info';
    infoCart.innerText = `(${model.cart.items.length}) totalt: ${model.cart.total.toFixed(2)} NOK`;

    
    li1.appendChild(a1);
    li1.appendChild(a2);
    ul.appendChild(li1);
    ul.appendChild(infoCart);
    nav.appendChild(logo);
    nav.appendChild(ul);
    header!.appendChild(nav);
    return header!;
}

function footer (): HTMLElement {
    const footer = document.getElementById('footer');
    footer!.innerHTML = `
      <p>&copy; 2025 My E-commerce Site</p>
    `;
    return footer!;

}

export { mainView, navBar };