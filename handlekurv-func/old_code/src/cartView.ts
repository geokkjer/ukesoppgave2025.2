import { model } from "./model";
import { generateNavbar, generateFooter } from "./commonView";
import type { CartItem } from "./types";
import { updateView } from "./view";
import { removeFromCart } from "./controller";

export function cartView(): HTMLElement {
    const header = document.createElement('header');
    const footer = document.createElement('footer');
    generateNavbar(header);
    generateFooter(footer);
    const cartElement = document.createElement("div");
    cartElement.className = "cart";
    cartElement.appendChild(header);
    
    if (model.cart.items.length === 0) {
        const div = document.createElement("div");
        div.className = "empty-cart";
        const h3 = document.createElement("h3");
        h3.innerText = "Handlekurven din er tom";
        const p = document.createElement("p");
        p.innerText = "Legg til noen produkter for å komme i gang!";
        div.appendChild(h3);
        div.appendChild(p);
        cartElement.appendChild(div);
    }
    else {
        for (const item of model.cart.items){
            cartElement.appendChild(cartCard(item));
        }
        cartElement.appendChild(totalCard());
    }
    cartElement.appendChild(footer);
    return cartElement;
}

function cartCard(item: CartItem): HTMLElement {
    const card = document.createElement("div");
    card.className = "cart-card";
    const title = document.createElement("h3");
    title.innerText = item.product.name;
    const quantity = document.createElement("p");
    quantity.innerText = `${item.quantity} stk`;
    const button = document.createElement("button");
    button.className = "btn btn-secondary";
    button.innerText = "Fjern";
    button.addEventListener("click", () => {
        removeFromCart(item.product.id);
        updateView();
    });
    const price = document.createElement("p");
    price.innerText = `totalt: ${(item.product.price * item.quantity).toFixed(2)} NOK`;
    card.appendChild(title);
    card.appendChild(quantity);
    card.appendChild(button);
    card.appendChild(price);
    return card;
}

function totalCard(): HTMLElement {
    const card = document.createElement("div");
    card.className = "total-card";
    const title = document.createElement("h3");
    title.innerText = "Total";
    const total = model.cart.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2);
    const price = document.createElement("p");
    price.innerText = `totalt: ${total} NOK`;
    const button =document.createElement("button");
    button.className = "btn btn-primary";
    button.innerText = "Tøm kasse";
    button.addEventListener("click", () => {
        model.cart.items = [];
        model.cart.total = 0;
        updateView();
    });
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(button);
    return card;
}