import { loginTask } from "./controller";
import type { AppState, DispatchFunction } from "./types";
import { loginView } from "./views/loginView";
import { productsView } from "./views/productsView";
import { addToCart } from "./controller"
import { cartView } from "./views/cartView";


export function render(state: AppState, action: string | null, value: any): void {
    const stateCopy = structuredClone(state);
    const dispatch: DispatchFunction = (action, value) => render(state, action, value);
    const app = document.getElementById("app")!;

    // Handle actions
    if (action == 'login') {
        state = loginTask(state, value);
        
        app!.innerHTML = '';
        const element = loginView(state, dispatch);
        app.replaceChildren(element);
    }
    if (action == 'addToCart') {
        const state = addToCart(stateCopy,value);
        const element = productsView(state, dispatch);
        const app = document.getElementById("app")!;
        app.replaceChildren(element);
    }
    // Render views based on current page    
    let element: HTMLElement;
    if (state.app.currentPage === 'login') element = loginView(stateCopy, dispatch);
    else if (state.app.currentPage === 'products') element = productsView(stateCopy, dispatch);
    else if (state.app.currentPage === 'cart') element = cartView(stateCopy, dispatch);
    else {
        element = document.createElement('div');
        element.textContent = 'Page not found';
    }

    app.replaceChildren(element);

}




