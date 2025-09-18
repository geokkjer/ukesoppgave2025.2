import { loginTask } from "./controller";
import type { Model, DispatchFunction } from "./types";
import { mainView } from "./views/mainView";
import { productsView } from "./views/productsView";
import { addToCart } from "./controller"


export function render(state: Model, action: string | null, value: any): void {
    const stateCopy = structuredClone(state);
    const dispatch: DispatchFunction = (action, value) => render(state, action, value);

    // Handle actions
    if (action == 'login') {
        state = loginTask(state, value);
        const app = document.getElementById("app")!;
        app!.innerHTML = '';
        const element = mainView(state, dispatch);
        app.replaceChildren(element);
    }
    if (action == 'addToCart') {
        const state = addToCart(stateCopy,value);
        const element = productsView(state, dispatch);
        const app = document.getElementById("app")!;
        app.replaceChildren(element);
    }
    // Render views based on current page    
    if (stateCopy.app.currentPage === 'login') mainView(stateCopy, dispatch);
    else if (stateCopy.app.currentPage === 'products') productsView(stateCopy, dispatch);



}




