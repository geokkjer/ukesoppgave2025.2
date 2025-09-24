import type { AppState, CartItem, DispatchFunction } from "../types";
import { footer } from "../components/footer";
import { navBar } from "../components/navBar";

export default class CartView {
    private state: AppState;
    private dispatch: DispatchFunction;

    constructor(state: AppState, dispatch: DispatchFunction) {
        this.state = state;
        this.dispatch = dispatch;
    }

    render(): HTMLElement {
        const nav = navBar(this.state, this.dispatch);
        const foot = footer();
        const model = structuredClone(this.state);
        const cartElement = document.createElement("div");
        cartElement.className = "cart";
        cartElement.appendChild(nav);
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
            //for (const item of model.cart.items) {
            //    cartElement.appendChild(cartCard(item));
            //}
            //cartElement.appendChild(totalCard(model));
        }
        cartElement.appendChild(foot);

        return cartElement;
    }

    private cartCard(item: CartItem): HTMLElement {
    }

    private totalCard(state: AppState): HTMLElement {

    }
}
