import { loginTask } from "./controller";
import type { Model, DispatchFunction } from "./types";
import { mainView } from "./views/mainView";
import { productsView } from "./views/productsView";
import { addToCart } from "./controller"
import { cartView } from "./views/cartView";


export function render(state: Model, action: string | null, value: any): void {
    const stateCopy = structuredClone(state);
    const dispatch: DispatchFunction = (action, value) => render(state, action, value);
    const app = document.getElementById("app")!;

    // Handle actions
    if (action == 'login') {
        state = loginTask(state, value);
        
        app!.innerHTML = '';
        const element = mainView(state, dispatch);
        app.replaceChildren(element);
    }
    if (action == 'addToCart') {
        const state = addToCart(stateCopy,value);
        const element = productsView(state, dispatch);
        const app = document.getElementById("app")!;
        app.replaceChildren(element.id);
    }
    // Render views based on current page    
    let element: HTMLElement;
    if (state.app.currentPage === 'login') element = mainView(stateCopy, dispatch);
    else if (state.app.currentPage === 'products') productsView(stateCopy, dispatch);
    else if (state.app.currentPage === 'cart') cartView(stateCopy, dispatch);
    
    app.replaceChildren(element);

}




