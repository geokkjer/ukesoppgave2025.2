import type { Model } from "./types";
import { productsView } from "./productsView";
import { footer, navBar } from "./commonView";

export function render(state: Model, action: string | null): void {
    const app = document.getElementById('app');
    app!.innerHTML = '';
    console.log("Rendering app...", state);
    // const renderMainView = mainView();


    // console.log("Rendering with state:", state);
    // console.log("Action:", action);

    const oldState = {
        ...state,
    };
    if (oldState.app.currentPage === 'products') {
        productsView(oldState);
        navBar(oldState);
        footer();
    } else if (oldState.app.currentPage === 'cart') {

        navBar(oldState);
        footer();
        const app = document.getElementById('app');
        app!.innerHTML = 'this is the cart page';
    }

    const handleEvent = (action: string) => render(model, action);
    const element = updateView(model, handleEvent);
    app!.replaceChildren(element);
}

