import { loginTask } from "./controller";
import type { AppState, DispatchFunction } from "./types";
import { loginView } from "./views/loginView";
import { productsView } from "./views/productsView";
import { addToCart } from "./controller"
import { cartView } from "./views/cartView";
import { navBar } from "./components/navBar";
import { footer } from "./components/footer";
import { mainView } from "./views/mainView";
import { navigation } from "./controller";
import { CartView } from "./views/cartClass";



export function render(state: AppState, action: string | null, value: any): void {
    const stateCopy = structuredClone(state);
    const dispatch: DispatchFunction = (action, value) => render(state, action, value);
    const app = document.getElementById("app")!;

    // Handle actions
    if (action == 'login') {
        state = loginTask(state, value);
    }
    if (action == 'addToCart') {
        state = addToCart(stateCopy,value);
        
    }
    if (action === 'products-view') {
        state = navigation(stateCopy, value);
        console.log('Current page set to products', state.app.currentPage);
    }
    if (action === 'cart-view') {
        state = navigation(stateCopy, value);
        console.log('Current page set to cart', state.app.currentPage);
    }
    if (action === 'login-view') {
        state = navigation(stateCopy, value);
        console.log('Current page set to login', state.app.currentPage);
    }
    // Render views based on current page    
    let element: HTMLElement;
    if (state.app.currentPage === 'login') {
        element = loginView(stateCopy, dispatch);
        app.replaceChildren(element);
    } else if (state.app.currentPage === 'main') {
        element = mainView(stateCopy, dispatch);
        app.replaceChildren(element);
    } else if (state.app.currentPage === 'products') {
        app.replaceChildren();
        const nav = navBar(stateCopy, dispatch);
        element = productsView(stateCopy, dispatch);
        const foot = footer(); 
        nav.appendChild(element);
        element = nav;
        element.appendChild(foot);
        app.replaceChildren(element);
    } else if (state.app.currentPage === 'cart') {
        element = new CartView(stateCopy, dispatch).render();
        app.replaceChildren(element);
    } else {
        element = document.createElement('div');
        element.textContent = 'Page not found';
    }

    app.replaceChildren(element);

}




